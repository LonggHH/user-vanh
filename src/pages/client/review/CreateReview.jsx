import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateReview() {
  const [size, setSize] = useState(3);

  return (
    <>
      <main className="mx-[124px] mb-[88px]">
        <div className="mt-[15px] mb-[52px] flex gap-2 font-normal text-[12px] uppercase">
          <Link className="underline">Uniqlo</Link>
          <span>/</span>
          <Link className="underline">Nữ</Link>
          <span>/</span>
          <span>Áo</span>
          <span>/</span>
          <Link className="underline">Áo thun</Link>
          <span>/</span>
          <span>HEATTECH Áo Giả Lông Cừu Cổ Lọ Dài Tay</span>
        </div>
        <Link className="text-[16px] uppercase font-bold underline">
          Quay lại chi tiết sản phẩm
        </Link>
        <h1 className="mb-[88px] text-[34px] font-bold w-[60%]">
          AIRism Áo Hoodie Chống UV Vải Mắt Lưới (Chống Nắng)
        </h1>
        <div className="flex gap-[30px]">
          <section style={{ flex: 3 }} className="border px-[20px] py-[28px]">
            <div className="flex justify-between items-center mb-[40px]">
              <h3 className="text-[31px] uppercase font-bold">
                Viết bài đánh giá
              </h3>
              <p className="text-[#378694]">Bắt buộc *</p>
            </div>
            <div className="flex items-center mb-[28px]">
              <label
                className="min-w-[200px] text-[17px] uppercase font-semibold"
                htmlFor=""
              >
                Đánh giá *
              </label>
              <Rating defaultValue={0} />
            </div>
            <div className="flex items-center mb-[28px]">
              <label
                className="min-w-[200px] text-[17px] uppercase font-semibold"
                htmlFor=""
              >
                Dáng *
              </label>
              <div className="w-full">
                <ul className="w-full flex mb-7 justify-between">
                  <li className="text-[15px] font-bold uppercase">Chật</li>
                  <li className="text-[15px] font-bold uppercase">Hơi chật</li>
                  <li className="text-[15px] font-bold uppercase  text-center">
                    Đúng với kích thước
                  </li>
                  <li className="text-[15px] font-bold uppercase">Hơi rộng</li>
                  <li className="text-[15px] font-bold uppercase">Rộng</li>
                </ul>
                <div className="w-full flex items-center">
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 1 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(1)}
                  ></div>
                  <div className="border-b flex-1"></div>
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 2 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(2)}
                  ></div>
                  <div className="border-b flex-1"></div>
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 3 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(3)}
                  ></div>
                  <div className="border-b flex-1"></div>
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 4 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(4)}
                  ></div>
                  <div className="border-b flex-1"></div>
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 5 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(5)}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-[28px]">
              <label
                className="min-w-[200px] text-[17px] uppercase font-semibold"
                htmlFor=""
              >
                Tiêu đề *
              </label>
              <div className="w-full">
                <input
                  type="text"
                  className="login-input w-full"
                  placeholder="Tóm tắt đánh giá của bạn"
                />
                <p>Tiêu đề của bạn phải ít hơn 100 ký tự.</p>
              </div>
            </div>
            <div className="flex items-center mb-[28px]">
              <label
                className="min-w-[200px] text-[17px] uppercase font-semibold"
                htmlFor=""
              >
                Bình luận *
              </label>
              <div className="w-full">
                <textarea className="login-input" cols="30" rows="3"></textarea>
                <p>Bạn phải viết ít nhất 50 ký tự tại đây.</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-[28px]">
              <label
                className="min-w-[200px] text-[17px] uppercase font-semibold"
                htmlFor=""
              >
                Kích cỡ đã mưa *
              </label>
              <div className="w-full">
                <select className="login-input">
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>
            </div>
            <div className="flex items-center mb-[28px]">
              <label
                className="min-w-[200px] text-[17px] uppercase font-semibold"
                htmlFor=""
              >
                Biệt danh *
              </label>
              <div className="w-full">
                <input
                  type="text"
                  className="login-input"
                  placeholder="Vui lòng nhập tên đăng nhập"
                />
                <p>Vui lòng nhập tên đăng nhập.</p>
              </div>
            </div>
            <h3 className="uppercase font-bold text-[20px] my-[20px]">
              Thông tin người mặc
            </h3>
            <div className="grid grid-cols-2 gap-[50px] mb-[28px]">
              <div className="flex flex-col gap-2">
                <label className="font-semibold uppercase">Giới tính *</label>
                <select className="login-input">
                  <option value="">Chọn</option>
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                  <option value="">Khác</option>
                  <option value="">Câu trả lời khác</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold uppercase">Vị trí *</label>
                <select className="login-input">
                  <option value="">Chọn</option>
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                  <option value="">Khác</option>
                  <option value="">Câu trả lời khác</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[50px] mb-[28px]">
              <div className="flex flex-col gap-2">
                <label className="font-semibold uppercase">Độ tuổi</label>
                <select className="login-input">
                  <option value="">Chọn</option>
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                  <option value="">Khác</option>
                  <option value="">Câu trả lời khác</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold uppercase">Chiều cao</label>
                <select className="login-input">
                  <option value="">Chọn</option>
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                  <option value="">Khác</option>
                  <option value="">Câu trả lời khác</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[50px] mb-[28px]">
              <div className="flex flex-col gap-2">
                <label className="font-semibold uppercase">Cân nặng</label>
                <select className="login-input">
                  <option value="">Chọn</option>
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                  <option value="">Khác</option>
                  <option value="">Câu trả lời khác</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold uppercase">Cỡ giày</label>
                <select className="login-input">
                  <option value="">Chọn</option>
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                  <option value="">Khác</option>
                  <option value="">Câu trả lời khác</option>
                </select>
              </div>
            </div>
            <div className="border-b my-[20px]"></div>
            <h3 className="uppercase font-bold text-[20px]">
              ĐĂNG BÀI ĐÁNH GIÁ CỦA BẠN:
            </h3>
            <ul className="ml-[28px]">
              <li className="list-disc">
                Bình luận đã đăng của bạn có thể được sử dụng cho mục đích quảng
                cáo.
              </li>
              <li className="list-disc">
                Chúng tôi không chấp nhận các yêu cầu đăng quảng cáo cho các
                thương hiệu, cá nhân, tổ chức khác. Ngoài ra, chúng tôi không
                thể đăng tình trạng còn hàng và kích cỡ sản phẩm.{" "}
              </li>
            </ul>
            <div className="my-[20px] flex items-center gap-2">
              <input className="h-5 w-5" type="checkbox" />
              <span>Tôi đồng ý với ĐIỀU KHOẢN SỬ DỤNG CỦA UNIQLO</span>
            </div>
            <div className="flex items-center gap-4 my-[20px]">
              <button class="h-[45px] text-[16px] uppercase font-bold hover:opacity-70 bg-[#000000] text-white w-[288px] py-2 px-1">
                Gửi
              </button>
              <button class="h-[45px] text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                Quay lại chi tiết sản phấm
              </button>
            </div>
          </section>
          <article className="flex-1 h-[365px] w-[365px]">
            <img
              className="object-cover w-full h-full"
              src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465161/item/vngoods_70_465161.jpg?width=215"
              alt=""
            />
          </article>
        </div>
      </main>
    </>
  );
}
