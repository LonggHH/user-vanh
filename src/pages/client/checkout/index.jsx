import { Breadcrumb, Radio } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import DiscountIcon from "@mui/icons-material/Discount";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ErrorIcon from "@mui/icons-material/Error";

export default function Checkout() {
  return (
    <>
      <main className="mx-[124px] my-0 px-[20px] py-0 h-auto flex flex-col z-20">
        <div className="mt-[15px] mb-[50px] z-20">
          <Breadcrumb
            items={[
              {
                title: (
                  <Link className="uppercase underline" to="/">
                    Uniqlo
                  </Link>
                ),
              },
              {
                title: (
                  <Link className="uppercase underline" to="/">
                    Giỏ hàng
                  </Link>
                ),
              },
              {
                title: <p className="uppercase">Giao hàng</p>,
              },
            ]}
          />
        </div>
        <section className="flex mb-[50px] flex-col">
          <h1 className="text-[34px] font-bold uppercase mb-[40px]">
            Thanh toán
          </h1>
          <div className="flex gap-14">
            <main style={{ flex: 2 }} className="max-h-[100%] overflow-y-auto">
              <div className="border">
                <div className="px-[20px] py-7 border-b">
                  <h1 className="text-[31px] text-[#757575] uppercase font-semibold">
                    1. Tùy chọn giao hàng
                  </h1>
                </div>
                <div className="px-[20px] py-7 ">
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Radio
                        id="address"
                        type="radio"
                        className="h-[20px] w-[20px]"
                      />
                      <label
                        htmlFor="address"
                        className="text-[16px] text-[#757575]"
                      >
                        Click & Collect
                      </label>
                    </div>
                    <div className="text-[16px] flex gap-2">
                      <p>Phí vận chuyến: </p>
                      <span className="uppercase text-[#378694]">Miễn phí</span>
                    </div>
                    <div className="w-[60%] text-[15px] font-bold text-[#757575]">
                      Khách hàng sẽ nhận được email thông báo khi đơn hàng có
                      tại cửa hàng. Cửa hàng có thể trực tiếp chuẩn bị đơn hàng
                      nếu có số lượng sản phẩm phù hợp. TP. Hồ Chí Minh: 1 - 4
                      ngày, Hà Nội & Hải Phòng: 1 - 7 ngày.
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Radio
                        id="address"
                        type="radio"
                        className="h-[20px] w-[20px]"
                      />
                      <label
                        htmlFor="address"
                        className="text-[16px] text-[#757575]"
                      >
                        Giao Đến địa chỉ
                      </label>
                    </div>
                    <div className="text-[16px] flex gap-2">
                      <p>Phí vận chuyến: </p>
                      <span className="uppercase text-[#378694]">Miễn phí</span>
                    </div>
                    <div className="w-[60%] text-[15px] font-bold text-[#757575]">
                      [Thời gian giao hàng dự kiến] TP. Hồ Chí Minh: 2 ngày, các
                      tỉnh miền Nam khác: 3 ngày, Hà Nội: 3 ngày, các tỉnh miền
                      Bắc khác: 4 ngày, các tỉnh miền Trung: 4 ngày.
                    </div>
                  </div>
                  <div className="border-b my-7"></div>
                  <form className="flex flex-col gap-7">
                    <h1 className="text-[34px] uppercase text-[#757575] font-bold mb-5">
                      ĐĂNG KÝ MỘT ĐỊA CHỈ MỚI
                    </h1>
                    <div className="flex items-center">
                      <label
                        className="min-w-[200px] text-[17px] uppercase font-bold"
                        htmlFor=""
                      >
                        Họ *
                      </label>
                      <div className="w-full">
                        <input
                          id="password"
                          type="password"
                          className="login-input border-2 w-full"
                        />
                        <p className="tex-[14px] text-[#f00] mt-2">
                          Vui lòng nhập tên của bạn
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="min-w-[200px] text-[17px] uppercase font-bold"
                        htmlFor=""
                      >
                        Tên *
                      </label>
                      <div className="w-full">
                        <input
                          id="password"
                          type="password"
                          className="login-input border-2 w-full"
                        />
                        <p className="tex-[14px] text-[#f00] mt-2">
                          Vui lòng nhập tên của bạn
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="min-w-[200px] text-[17px] uppercase font-bold"
                        htmlFor=""
                      >
                        Tỉnh *
                      </label>
                      <div className="w-full">
                        <select
                          defaultValue="Vui lòng chọn một tỉnh"
                          className="border w-[50%] text-[#8f8f8f] h-[47px] p-2 pr-[15px] outline-none"
                        >
                          <option value="">Vui lòng chọn một tỉnh</option>
                          <option value="">Hà Nội</option>
                          <option value="">Hà Nam</option>
                          <option value="">Hà Tĩnh</option>
                          <option value="">Ninh Bình</option>
                        </select>
                        <p className="tex-[14px] text-[#f00] mt-2">
                          Vui lòng nhập tên của bạn
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="min-w-[200px] text-[17px] uppercase font-bold"
                        htmlFor=""
                      >
                        Quận *
                      </label>
                      <div className="w-full">
                        <select
                          defaultValue="Vui lòng chọn một tỉnh"
                          className="border w-[50%] text-[#8f8f8f] h-[47px] p-2 pr-[15px] outline-none"
                        >
                          <option value="">Vui lòng chọn một tỉnh</option>
                          <option value="">Hà Nội</option>
                          <option value="">Hà Nam</option>
                          <option value="">Hà Tĩnh</option>
                          <option value="">Ninh Bình</option>
                        </select>
                        <p className="tex-[14px] text-[#f00] mt-2">
                          Vui lòng nhập tên của bạn
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="min-w-[200px] text-[17px] uppercase font-bold"
                        htmlFor=""
                      >
                        Phường *
                      </label>
                      <div className="w-full">
                        <select
                          defaultValue="Vui lòng chọn một tỉnh"
                          className="border w-[50%] text-[#8f8f8f] h-[47px] p-2 pr-[15px] outline-none"
                        >
                          <option value="">Vui lòng chọn một tỉnh</option>
                          <option value="">Hà Nội</option>
                          <option value="">Hà Nam</option>
                          <option value="">Hà Tĩnh</option>
                          <option value="">Ninh Bình</option>
                        </select>
                        <p className="tex-[14px] text-[#f00] mt-2">
                          Vui lòng nhập tên của bạn
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="min-w-[200px] text-[17px] uppercase font-bold"
                        htmlFor=""
                      >
                        Chi tiết địa chỉ *
                      </label>
                      <div className="w-full">
                        <input
                          id="password"
                          type="password"
                          className="login-input border-2 w-full"
                        />
                        <p className="tex-[14px] text-[#f00] mt-2">
                          Để hóa đơn hợp lệ, yêu cầu điền chính xác thông tin
                          bằng tiếng Việt có dấu
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="min-w-[200px] text-[17px] uppercase font-bold"
                        htmlFor=""
                      >
                        Điện thoại
                      </label>
                      <div className="w-full">
                        <input
                          id="password"
                          type="password"
                          className="login-input border-2 w-[50%]"
                          placeholder="Nhập 10_11 số bắt đầu bằng số 0"
                        />
                        <p className="tex-[14px] text-[#f00] mt-2">
                          Vui lòng nhập 10-11 số bắt đầu bằng 0
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="min-w-[200px] text-[17px] uppercase font-bold"
                        htmlFor=""
                      >
                        Điện thoại di động *
                      </label>
                      <div className="w-full">
                        <input
                          id="password"
                          type="password"
                          className="login-input border-2 w-[50%]"
                          placeholder="Nhập 10_11 số bắt đầu bằng số 0"
                        />
                        <p className="tex-[14px] text-[#f00] mt-2">
                          Vui lòng nhập 10-11 số bắt đầu bằng 0
                        </p>
                      </div>
                    </div>
                    <p>
                      Chúng tôi có thể liên hệ với bạn qua điện thoại hoặc email
                      nếu chúng tôi có thắc mắc về đơn đặt hàng và tùy chọn giao
                      hàng của bạn.
                    </p>
                    <div className="text-right text-[#378694]">Bắt buộc *</div>
                    <div className="flex items-center gap-2">
                      <input id="confirm" type="checkbox" className="h-5 w-5" />
                      <label htmlFor="confirm">
                        Dùng làm địa chỉ thanh toán
                      </label>
                      <ErrorIcon className="text-[#ababab]" />
                    </div>
                    <button className="uppercase bg-[#1b1b1b] text-white py-2 px-1 w-[40%]">
                      Tiếp tục thanh toán
                    </button>
                  </form>
                </div>
              </div>
            </main>
            <article className="flex-1 flex flex-col gap-5">
              <div className=" px-5 py-7 border">
                <h1 className="uppercase font-bold text-[19px] flex gap-2 mb-7">
                  TỔNG ĐƠN HÀNG| <span>5</span> <span>SẢN PHẨM</span>
                  <Link to="/cart" className="underline">
                    Sửa
                  </Link>
                </h1>
                <div className="flex justify-between items-center text-[16px] text-[#1b1b1b] mb-7">
                  <span>Tổng cộng</span>
                  <span>1.416.000 VND</span>
                </div>
                <div className="flex justify-between items-center text-[19px] uppercase font-bold mb-[10px]">
                  <h1>Tổng</h1>
                  <h1>1.416.000 VND</h1>
                </div>
                <div className="flex justify-between text-[16px text-[#1b1b1b]">
                  <p>Đã bao gồm thuế giá trị gia tăng</p>
                  <p>104.889 VND</p>
                </div>
                <div className="flex justify-between font-bold mt-7 text-[19px] uppercase">
                  <h1 className="">TỔNG ĐƠN ĐẶT HÀNG</h1>
                  <span>1.416.000 VND</span>
                </div>
              </div>
              <div className="border py-7 px-5">
                <h1 className="text-[20px] uppercase font-bold mb-4">
                  Sản phẩm đặt hàng
                </h1>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <img
                      className="h-[120px] object-cover w-full"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/424873/item/vngoods_12_424873.jpg"
                      alt=""
                    />
                    <p className="text-[16px] text-right">&#8569; 4</p>
                  </div>
                  <div>
                    <img
                      className="h-[120px] object-cover w-full"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/424873/item/vngoods_12_424873.jpg"
                      alt=""
                    />
                    <p className="text-[16px] text-right">&#8569; 4</p>
                  </div>
                  <div>
                    <img
                      className="h-[120px] object-cover w-full"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/424873/item/vngoods_12_424873.jpg"
                      alt=""
                    />
                    <p className="text-[16px] text-right">&#8569; 4</p>
                  </div>
                  <div>
                    <img
                      className="h-[120px] object-cover w-full"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/424873/item/vngoods_12_424873.jpg"
                      alt=""
                    />
                    <p className="text-[16px] text-right">&#8569; 4</p>
                  </div>
                </div>
              </div>
              <Link className="border-b border-t my-[10px] py-[14px] flex gap-2 justify-between items-center">
                <div className="flex gap-2 items-center">
                  <DiscountIcon
                    style={{ fontSize: 18 }}
                    className="text-[#757575]"
                  />
                  <p>Phiếu giảm giá</p>
                </div>
                <ArrowForwardIosIcon
                  className="text-[#757575]"
                  style={{ fontSize: 18 }}
                />
              </Link>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
