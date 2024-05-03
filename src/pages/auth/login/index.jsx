import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../../public/images/logo-header.svg";
import "./index.css";
import { message } from "antd";
import { saveAccount } from "../../../redux/slices/account";
import instanceAxios from "../../../configs/axios";
import { useDispatch } from "react-redux";

const PASSWORDTYPE = {
    PASSWORD: "password",
    TEXT: "text"
}

export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [passwordType, setPasswordType] = useState(PASSWORDTYPE.PASSWORD);
    const [messageApi, contextHolder] = message.useMessage();


    const togglePassword = () => {
        if (passwordType === PASSWORDTYPE.PASSWORD) {
            setPasswordType(PASSWORDTYPE.TEXT)
        } else {
            setPasswordType(PASSWORDTYPE.PASSWORD)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = {};
        for (let [name, value] of formData.entries()) {
            values[name] = value;
        }

        const { email, password } = values;

        try {
            const result = await instanceAxios.post("/auth/login", { email, password, role: "user" })
            if (result.data.statusCode === 200) {
                e.target.reset();
                messageApi.open({
                    type: 'success',
                    content: 'Login success !',
                });
                dispatch(saveAccount(result.data.data))
                localStorage.setItem("user_login", JSON.stringify(result.data.data));
                navigate("/")
            }
        } catch (error) {
            console.log(error);
            messageApi.open({
                type: 'error',
                content: error.response.data.message,
            });
        }
    }


    return (
        <>
            {contextHolder}
            <header className="mt-[40px] px-5 border-b h-[72px] flex items-center">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </header>
            <main className="my-[88px]">
                <div
                    className=" border m-auto flex px-6 py-5 gap-5"
                    style={{ width: "calc(1232px + 2* 20px)" }}
                >
                    <form className="flex-1" onSubmit={onSubmit}>
                        <div className="flex justify-between items-center">
                            <h1 className="text-[#1b1b1b] uppercase text-[35px] font-semibold mb-5">
                                Login
                            </h1>
                            <div className="text-[#378694]">Obligatory &#42;</div>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <p>Log in with your email address and password.</p>
                            <img src="https://asset.uniqlo.com/g/icons/info.svg" alt="" />
                        </div>
                        <div className="flex flex-col gap-2 mb-5">
                            <label
                                className="text-[18px] uppercase font-semibold"
                                htmlFor="email"
                            >
                                Email &#42;
                            </label>
                            <input
                                id="email"
                                name="email"
                                className="login-input"
                                type="text"
                                placeholder="Enter valid email"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label
                                className="text-[18px] uppercase font-semibold"
                                htmlFor="password"
                            >
                                Password &#42;
                            </label>
                            <input
                                id="password"
                                name="password"
                                className="login-input"
                                type={passwordType}
                                placeholder="Enter a valid password"
                            />
                        </div>
                        <span>
                            Passwords need at least 06 characters (including letters and numbers).
                            {/* Only can use these special characters -_.@ */}
                        </span>
                        <div className="flex items-center gap-3 mt-5 mb-5">
                            <input className="w-5 h-5" type="checkbox" name="" id="showPass" onChange={togglePassword} />
                            <label htmlFor="showPass">{PASSWORDTYPE.PASSWORD === passwordType ? "Show" : "Hidden"} password</label>
                        </div>
                        <div className="text-[#1b1b1b] underline uppercase font-semibold text-[18px] flex flex-col gap-2 mb-[40px]">
                            <Link>Terms of use</Link>
                            <Link>Privacy policy</Link>
                        </div>
                        <div className="w-[50%]">
                            <button className="w-full h-[45px] bg-[#1b1b1b] text-white uppercase cursor-pointer text-[18px]">
                                Login
                            </button>
                        </div>
                        <div className="uppercase text-[#1b1b1b] text-[18px] underline mt-2 font-semibold">
                            Forgot your password?
                        </div>
                    </form>
                    <div className="border-r"></div>
                    <div className="flex-1">
                        <h1 className="text-[#1b1b1b] uppercase text-[35px] font-semibold mb-5">
                            CREATE AN ACCOUNT
                        </h1>
                        <p className="text-[#1b1b1b] mb-[40px]">
                            Please create an account now! You can receive special services
                            For you such as checking the history of buying and receiving coupons
                            For members. Sign up for free today!
                        </p>
                        <Link to="/register">
                            <button className="w-[50%] h-[45px] bg-[#1b1b1b] text-white uppercase cursor-pointer text-[18px]">
                                REGISTER
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
            <div className="mb-[28px] text-center uppercase font-bold">
                Copyright of Uniqlo Co., Ltd. Reserve all rights.
            </div>
        </>
    );
}
