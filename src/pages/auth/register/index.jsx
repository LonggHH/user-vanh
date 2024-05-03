import React from "react";
import { Link } from "react-router-dom";
import HttpsIcon from "@mui/icons-material/Https";
import "../login/index.css";

export default function Register() {




    return (
        <>
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
                    <form className="border shadow px-6 py-5 rounded-md ">
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
                                className="min-w-[200px] uppercase text-red-500 font-bold"
                                htmlFor="email"
                            >
                                Email &#8277;
                            </label>
                            <div className="flex-1">
                                <input
                                    id="email"
                                    type="text"
                                    className="login-input border-red-500 border-2 w-full"
                                />
                                <span className="text-[13px] text-red-500 mt-2">
                                    Please enter an email address.
                                </span>
                            </div>
                        </div>
                        <div className="flex mb-7">
                            <label
                                className="min-w-[200px] uppercase text-red-500 font-bold"
                                htmlFor="password"
                            >
                                Password &#8277;
                            </label>
                            <div className="flex-1">
                                <input
                                    id="password"
                                    type="password"
                                    className="login-input border-red-500 border-2 w-full"
                                />
                                <span className="text-[13px] text-red-500 mt-2">
                                    Please enter a password.
                                </span>
                            </div>
                        </div>
                        <div className="flex mb-7">
                            <label
                                className="min-w-[200px] uppercase text-red-500 font-bold"
                                htmlFor="password"
                            >
                                Confirm Password &#8277;
                            </label>
                            <div className="flex-1">
                                <input
                                    id="password"
                                    type="password"
                                    className="login-input border-red-500 border-2 w-full"
                                />
                                <span className="text-[13px] text-red-500 mt-2">
                                    Please enter a password.
                                </span>
                            </div>
                        </div>
                        <div className="flex mb-7 w-full items-center gap-3">
                            <input id="toggle" className="w-5 h-5" type="checkbox" />
                            <label htmlFor="toggle">Show password</label>
                        </div>
                        {/* <div className="flex mb-7">
                            <label
                                className="min-w-[200px] uppercase font-bold"
                                htmlFor="dateOfBirth"
                            >
                                Birthday
                            </label>
                            <div className="flex-1">
                                <input
                                    id="dateOfBirth"
                                    type="date"
                                    className="login-input border-2 w-full"
                                />
                                <span className="text-[13px] mt-2">
                                    Không thể chỉnh sửa ngày sinh sau khi bạn đăng ký tài khoản.
                                </span>
                            </div>
                        </div> */}
                        <div className="flex mb-7">
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
                        </div>
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
                                <input type="checkbox" className="h-5 w-5" id="confirm" />
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
