import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MemberChangePassword() {
  const [typePassword, setTypepassword] = useState("password");

  console.log(typePassword);

  const handleChangeTypePassword = () => {
    setTypepassword(typePassword === "password" ? "text" : "password");
  };
  return (
    <>
      <main className="px-5 py-7 border">
        <div className="flex justify-between items-center mb-7">
          <h3 className="text-[31px] uppercase font-bold">
            Thay đổi mật khẩu của tôi
          </h3>
          <span className="text-[#378694]">Bắt buộc &#8277;</span>
        </div>
        <form className="flex flex-col gap-7">
          <div className="flex">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Mật khẩu hiện tại
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <div className="" style={{ flex: 1 }}>
              <input
                type={`${typePassword === "password" ? "password" : "text"}`}
                className="login-input w-[60%]"
              />
              <p className="mt-2 w-[60%]">
                Mật khẩu cần có ít nhất 08 ký tự (bao gồm cả chữ và số). Chỉ có
                thể sử dụng các ký tự đặc biệt này -_.@
              </p>
              <Link className="text-[16px] uppercase underline font-bold mt-3">
                Quên mật khẩu của bạn?
              </Link>
            </div>
          </div>
          <div className="flex">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Mật khẩu mới
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <div className="" style={{ flex: 1 }}>
              <input
                type={`${typePassword === "password" ? "password" : "text"}`}
                className="login-input w-[60%]"
              />
              <p className="mt-2 w-[60%]">
                Mật khẩu cần có ít nhất 08 ký tự (bao gồm cả chữ và số). Chỉ có
                thể sử dụng các ký tự đặc biệt này -_.@ Hiện mật khẩu
              </p>
            </div>
          </div>
          <div className="flex">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Xác nhận mật khẩu
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <div className="" style={{ flex: 1 }}>
              <input
                type={`${typePassword === "password" ? "password" : "text"}`}
                className="login-input w-[60%]"
              />
              <p className="mt-2 w-[60%]">
                Mật khẩu cần phải trùng khớp với mật khẩu mới
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              checked={typePassword === "text"}
              onChange={handleChangeTypePassword}
              type="checkbox"
              className="h-4 w-4"
            />
            <label htmlFor="">Hiển thị mật khẩu</label>
          </div>
          <div>
            <button class="w-[30%] h-[45px] bg-[#1b1b1b] text-white uppercase cursor-pointer text-[18px]">
              Thay đổi mật khẩu của tôi
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
