import React, { useState } from "react";
import { Link } from "react-router-dom";
import HttpsIcon from "@mui/icons-material/Https";
import "../login/index.css";
import { message } from "antd";
import instanceAxios from "../../../configs/axios";
import { useDispatch } from "react-redux";
import { saveAccount } from "../../../redux/slices/account";

const PASSWORDTYPE = {
    PASSWORD: "password",
    TEXT: "text"
}

const RegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Register() {

    const dispatch = useDispatch();

    const [passwordType, setPasswordType] = useState(PASSWORDTYPE.PASSWORD);
    const [messageApi, contextHolder] = message.useMessage();
    const [agreeTerms, setAgreeTerms] = useState(false);

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

        console.log(values);
        const { name, email, password, confirmPassword, birthday } = values;

        if (!name) {
            messageApi.open({
                type: 'error',
                content: 'Name is not empty !',
            });
            return;
        }

        if (!birthday) {
            messageApi.open({
                type: 'error',
                content: 'Birthday is not empty !',
            });
            return;
        }

        if (!RegexEmail.test(email)) {
            messageApi.open({
                type: 'error',
                content: 'Validate Email !',
            });
            return;
        }

        if (password.length < 6) {
            messageApi.open({
                type: 'error',
                content: 'Password is longer than 6 characters !',
            });
            return;
        }

        if (password !== confirmPassword) {
            messageApi.open({
                type: 'error',
                content: 'Confirm password !',
            });
            return;
        }

        if (!agreeTerms) {
            messageApi.open({
                type: 'error',
                content: 'Agree Terms !',
            });
            return;
        }

        try {
            const result = await instanceAxios.post("/auth/register", { name, email, password, birthday })
            if (result.data.statusCode === 201) {
                e.target.reset();
                messageApi.open({
                    type: 'success',
                    content: 'Register success !',
                });
                // dispatch(saveAccount(null))
            }
        } catch (error) {
            messageApi.open({
                type: 'success',
                content: error.response.data.message,
            });
            // console.log("==>> error :: ", error);
        }
    }

    return (
        <>
            {contextHolder}
            <div className="mx-[124px]">
                <div className="flex mt-[15px] mb-[52px] gap-2 uppercase">
                    <Link title="Home" to="/">
                        Uniqlo
                    </Link>
                    <span>/</span>
                    <p>Register</p>
                </div>
                <main className="w-[60%] mb-[88px]">
                    <div className="flex justify-between mb-[52px] items-center">
                        <h1 className="text-[#1b1b1b] uppercase font-bold text-[32px]">
                            Register
                        </h1>
                        <HttpsIcon className="text-[24px]" />
                    </div>
                    <form className="border shadow px-6 py-5 rounded-md" onSubmit={onSubmit}>
                        <div className="flex justify-between gap-[10px] mb-[28px]">
                            <p className="text-[#1b1b1b] break-words font-normal">
                                We will send a confirmation letter to an email address
                                With your account. Please check the email from us.
                            </p>
                            <span className="min-w-[100px] text-[#378694]">
                                Obligatory &#8277;
                            </span>
                        </div>
                        <div className="flex mb-7">
                            <label
                                className="min-w-[200px] uppercase  font-bold"
                                htmlFor="name"
                            >
                                Name &#8277;
                            </label>
                            <div className="flex-1">
                                <input
                                    id="name"
                                    type="text"
                                    className="login-input  border-2 w-full"
                                    name="name"
                                />
                                {/* <span className="text-[13px] mt-2">
                                    Please enter an email address.
                                </span> */}
                            </div>
                        </div>
                        <div className="flex mb-7">
                            <label
                                className="min-w-[200px] uppercase  font-bold"
                                htmlFor="birthday"
                            >
                                Birthday &#8277;
                            </label>
                            <div className="flex-1">
                                <input
                                    id="birthday"
                                    type="date"
                                    className="login-input  border-2 w-full"
                                    name="birthday"
                                />
                                {/* <span className="text-[13px] mt-2">
                                    Please enter an email address.
                                </span> */}
                            </div>
                        </div>
                        <div className="flex mb-7">
                            <label
                                className="min-w-[200px] uppercase  font-bold"
                                htmlFor="email"
                            >
                                Email &#8277;
                            </label>
                            <div className="flex-1">
                                <input
                                    id="email"
                                    type="text"
                                    className="login-input  border-2 w-full"
                                    name="email"
                                />
                                {/* <span className="text-[13px] mt-2">
                                    Please enter an email address.
                                </span> */}
                            </div>
                        </div>
                        <div className="flex mb-7">
                            <label
                                className="min-w-[200px] uppercase  font-bold"
                                htmlFor="password"
                            >
                                Password &#8277;
                            </label>
                            <div className="flex-1">
                                <input
                                    id="password"
                                    type={passwordType}
                                    className="login-input  border-2 w-full"
                                    name="password"
                                />
                                {/* <span className="text-[13px]  mt-2">
                                    Please enter a password.
                                </span> */}
                            </div>
                        </div>
                        <div className="flex mb-7">
                            <label
                                className="min-w-[200px] uppercase  font-bold"
                                htmlFor="cfpassword"
                            >
                                Confirm Password &#8277;
                            </label>
                            <div className="flex-1">
                                <input
                                    id="cfpassword"
                                    type={passwordType}
                                    className="login-input  border-2 w-full"
                                    name="confirmPassword"
                                />
                                {/* <span className="text-[13px]  mt-2">
                                    Please enter a password.
                                </span> */}
                            </div>
                        </div>
                        <div className="flex mb-7 w-full items-center gap-3">
                            <input id="toggle" className="w-5 h-5" type="checkbox" onChange={togglePassword} />
                            <label htmlFor="toggle" >{PASSWORDTYPE.PASSWORD === passwordType ? "Show" : "Hidden"} password</label>
                        </div>
                        {/* <div className="flex mb-7">
                            <label
                                className="min-w-[200px] uppercase font-bold"
                                htmlFor="male"
                            >
                                Gender
                            </label>
                            <div className="flex-1 flex gap-[20px]">
                                <div className="flex items-center gap-2">
                                    <input
                                        className="w-5 h-5 "
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        checked
                                    />
                                    <label className="font-semibold" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        className="w-5 h-5"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                    />
                                    <label className="font-semibold" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        className="w-5 h-5"
                                        type="radio"
                                        name="gender"
                                        id="other"
                                    />
                                    <label className="font-semibold" htmlFor="other">
                                        Unchecked
                                    </label>
                                </div>
                            </div>
                        </div> */}
                        <div className="border-b mb-7"></div>
                        <div>
                            <h3 className="text-[18px] font-bold mb-4 uppercase">
                                Membership Agreement{" "}
                                <span className="text-[#378694]">&#8277;</span>
                            </h3>
                            <p className="text-[#7d7d7d] break-words mb-[20px]">
                                By creating an account, you agree with the privacy policy and
                                UNIQLO use clause
                            </p>
                            <div className="flex items-center gap-3 mb-5">
                                <input type="checkbox" className="h-5 w-5" id="confirm" onChange={(e) => setAgreeTerms(e.target.value)} />
                                <label htmlFor="confirm" className="text-[#1b1b1b] font-normal">
                                    I agree with the terms of use and privacy of
                                    Uniqlo
                                </label>
                            </div>
                            <div className="flex gap-5 uppercase font-bold underline">
                                <Link>Terms of use</Link>
                                <Link>Privacy policy</Link>
                            </div>
                            <div className="mt-[40px]">
                                <button className="w-[50%] h-[45px] bg-[#1b1b1b] text-white uppercase cursor-pointer text-[18px]">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
}
