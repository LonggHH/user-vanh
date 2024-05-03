import React from "react";
import { Input } from "antd";

export default function EditProfile() {
  return (
    <>
      <main className="border px-5 py-7">
        <div className="flex justify-between items-center mb-7">
          <h3 className="text-[31px] uppercase font-bold">
            Chỉnh sửa thông tin
          </h3>
          <span className="text-[#378694]">Bắt buộc &#8277;</span>
        </div>
        <form className="flex flex-col gap-7">
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Địa chỉ email{" "}
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <input className="login-input" style={{ flex: 1 }} />
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Mật khẩu{" "}
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <input
              type="password"
              className="login-input"
              style={{ flex: 1 }}
            />
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Tên
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <input
              type="password"
              className="login-input"
              style={{ flex: 1 }}
            />
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Họ
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <input
              type="password"
              className="login-input"
              style={{ flex: 1 }}
            />
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Tỉnh
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <select className="login-input w-[40%]">
              <option value="">Vui lòng nhập một tỉnh</option>
              <option value="">Thanh Hóa</option>
              <option value="">Nghệ An</option>
              <option value="">Hà Tĩnh</option>
              <option value="">Quảng Bình</option>
              <option value="">Quảng Trị</option>
            </select>
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Quận
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <select className="login-input w-[40%]">
              <option value="">Vui lòng nhập một tỉnh</option>
              <option value="">Thanh Hóa</option>
              <option value="">Nghệ An</option>
              <option value="">Hà Tĩnh</option>
              <option value="">Quảng Bình</option>
              <option value="">Quảng Trị</option>
            </select>
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Phường
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <select className="login-input w-[40%]">
              <option value="">Vui lòng nhập một tỉnh</option>
              <option value="">Thanh Hóa</option>
              <option value="">Nghệ An</option>
              <option value="">Hà Tĩnh</option>
              <option value="">Quảng Bình</option>
              <option value="">Quảng Trị</option>
            </select>
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Chi tiết địa chỉ
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <input
              type="password"
              className="login-input"
              style={{ flex: 1 }}
            />
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Điện thoại
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <input
              type="password"
              className="login-input"
              style={{ flex: 1 }}
            />
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Điện thoại di động
              <span className="text-[#378694] text-[16px]"> &#8277;</span>
            </label>
            <input
              type="password"
              className="login-input"
              style={{ flex: 1 }}
            />
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Sinh nhật
            </label>
            <input
              type="password"
              className="login-input"
              style={{ flex: 1 }}
            />
          </div>
          <div className="flex items-center">
            <label
              className="min-w-[250px] text-[18px] uppercase font-semibold"
              htmlFor=""
            >
              Giới Tính
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
                  Nam
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
                  Nữ
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
                  Bỏ chọn
                </label>
              </div>
            </div>
          </div>
          <p className="w-[70%]">
            Chúng tôi có thể liên hệ với bạn qua điện thoại hoặc email nếu chúng
            tôi có thắc mắc về đơn đặt hàng và tùy chọn giao hàng của bạn.
          </p>
          <div>
            <button class="w-[40%] h-[45px] bg-[#1b1b1b] text-white uppercase cursor-pointer text-[18px]">
              Lưu thay đổi
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
