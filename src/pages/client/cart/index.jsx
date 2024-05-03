import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Rate } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DiscountIcon from "@mui/icons-material/Discount";
import RedeemIcon from "@mui/icons-material/Redeem";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Cart() {
  const [showResult, setShowResult] = useState(false);
  const [isTym, setIsTym] = useState(false);

  useEffect(() => {
    document.title = "Uniqlo | Giỏ hàng";
  }, []);
  return (
    <>
      <main className="mx-[124px] my-0 px-[20px] py-0 h-auto flex flex-col z-20">
        <div className="mt-[15px] mb-[50px] z-20">
          <Breadcrumb
            items={[
              {
                title: <Link to="/">Uniqlo</Link>,
              },
              {
                title: <p>Giỏ hàng</p>,
              },
            ]}
          />
        </div>
        <section className="flex mb-[50px] flex-col">
          <h1 className="text-[34px] font-bold uppercase mb-[88px]">
            Giỏ hàng
          </h1>
          <div className="flex gap-[88px]">
            <section style={{ flex: 2 }}>
              <div className="flex gap-[20px]">
                <div className="min-w-[216px] max-w-[216px] min-h-[216px] max-h-[216px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465761/item/vngoods_01_465761.jpg?width=250"
                    alt=""
                  />
                </div>
                <div className="flex w-full gap-6">
                  <div className="flex flex-col gap-2 flex-1">
                    <h1 className="text-[20px] text-[#1b1b1b] font-bold">
                      Áo Thun Vải Linen Cổ Tròn Ngắn Tay
                    </h1>
                    <span className="text-[16px] text-[#7d7d7d]">
                      Mã sản phẩm: 465761
                    </span>
                    <span>Màu sắc: 01 OFF WHITE</span>
                    <span>Kích cỡ: Nữ S</span>
                    <span className="text-[#7d7d7d]">New</span>
                    <span className="mt-4 mb-2">588.000 VND</span>
                    <h3 className="uppercase text-[13px] font-semibold mb-[14px]">
                      Số lượng
                    </h3>
                    <div className="flex justify-between w-full items-center">
                      <div className="relative">
                        <div className=" bottom-0 border w-[134px] h-[45px] flex items-center justify-between pr-2 pl-[15px]">
                          <span>1</span>
                          {showResult ? (
                            <>
                              <ExpandMoreIcon
                                onClick={() => setShowResult(false)}
                                className="cursor-pointer"
                              />
                            </>
                          ) : (
                            <>
                              <ExpandLessIcon
                                onClick={() => setShowResult(true)}
                                className="cursor-pointer"
                              />
                            </>
                          )}
                        </div>
                        {showResult && (
                          <>
                            <div className="absolute border w-[134px] h-[45px] z-20 bg-white text-[#378694] pl-[15px] flex items-center cursor-pointer hover:bg-[#f6f6f6]">
                              1
                            </div>
                          </>
                        )}
                      </div>
                      <div className="text-[20px] uppercase">
                        Tổng: <span className="font-semibold">588.000 VND</span>
                      </div>
                    </div>
                  </div>
                  <CloseIcon
                    className="cursor-pointer"
                    style={{ fontSize: 30 }}
                  />
                </div>
              </div>
              <div className="border-b my-7"></div>
              <div className="flex gap-[20px]">
                <div className="min-w-[216px] max-w-[216px] min-h-[216px] max-h-[216px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465761/item/vngoods_01_465761.jpg?width=250"
                    alt=""
                  />
                </div>
                <div className="flex w-full gap-6">
                  <div className="flex flex-col gap-2 flex-1">
                    <h1 className="text-[20px] text-[#1b1b1b] font-bold">
                      Áo Thun Vải Linen Cổ Tròn Ngắn Tay
                    </h1>
                    <span className="text-[16px] text-[#7d7d7d]">
                      Mã sản phẩm: 465761
                    </span>
                    <span>Màu sắc: 01 OFF WHITE</span>
                    <span>Kích cỡ: Nữ S</span>
                    <span className="text-[#7d7d7d]">New</span>
                    <span className="mt-4 mb-2">588.000 VND</span>
                    <h3 className="uppercase text-[13px] font-semibold mb-[14px]">
                      Số lượng
                    </h3>
                    <div className="flex justify-between w-full items-center">
                      <div className="relative">
                        <div className=" bottom-0 border w-[134px] h-[45px] flex items-center justify-between pr-2 pl-[15px]">
                          <span>1</span>
                          {showResult ? (
                            <>
                              <ExpandMoreIcon
                                onClick={() => setShowResult(false)}
                                className="cursor-pointer"
                              />
                            </>
                          ) : (
                            <>
                              <ExpandLessIcon
                                onClick={() => setShowResult(true)}
                                className="cursor-pointer"
                              />
                            </>
                          )}
                        </div>
                        {showResult && (
                          <>
                            <div className="absolute border w-[134px] h-[45px] z-20 bg-white text-[#378694] pl-[15px] flex items-center cursor-pointer hover:bg-[#f6f6f6]">
                              1
                            </div>
                          </>
                        )}
                      </div>
                      <div className="text-[20px] uppercase">
                        Tổng: <span className="font-semibold">588.000 VND</span>
                      </div>
                    </div>
                  </div>
                  <CloseIcon
                    className="cursor-pointer"
                    style={{ fontSize: 30 }}
                  />
                </div>
              </div>
              <div className="border-b my-7"></div>
              <div className="flex gap-[20px]">
                <div className="min-w-[216px] max-w-[216px] min-h-[216px] max-h-[216px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465761/item/vngoods_01_465761.jpg?width=250"
                    alt=""
                  />
                </div>
                <div className="flex w-full gap-6">
                  <div className="flex flex-col gap-2 flex-1">
                    <h1 className="text-[20px] text-[#1b1b1b] font-bold">
                      Áo Thun Vải Linen Cổ Tròn Ngắn Tay
                    </h1>
                    <span className="text-[16px] text-[#7d7d7d]">
                      Mã sản phẩm: 465761
                    </span>
                    <span>Màu sắc: 01 OFF WHITE</span>
                    <span>Kích cỡ: Nữ S</span>
                    <span className="text-[#7d7d7d]">New</span>
                    <span className="mt-4 mb-2">588.000 VND</span>
                    <h3 className="uppercase text-[13px] font-semibold mb-[14px]">
                      Số lượng
                    </h3>
                    <div className="flex justify-between w-full items-center">
                      <div className="relative">
                        <div className=" bottom-0 border w-[134px] h-[45px] flex items-center justify-between pr-2 pl-[15px]">
                          <span>1</span>
                          {showResult ? (
                            <>
                              <ExpandMoreIcon
                                onClick={() => setShowResult(false)}
                                className="cursor-pointer"
                              />
                            </>
                          ) : (
                            <>
                              <ExpandLessIcon
                                onClick={() => setShowResult(true)}
                                className="cursor-pointer"
                              />
                            </>
                          )}
                        </div>
                        {showResult && (
                          <>
                            <div className="absolute border w-[134px] h-[45px] z-20 bg-white text-[#378694] pl-[15px] flex items-center cursor-pointer hover:bg-[#f6f6f6]">
                              1
                            </div>
                          </>
                        )}
                      </div>
                      <div className="text-[20px] uppercase">
                        Tổng: <span className="font-semibold">588.000 VND</span>
                      </div>
                    </div>
                  </div>
                  <CloseIcon
                    className="cursor-pointer"
                    style={{ fontSize: 30 }}
                  />
                </div>
              </div>
              <div className="border-b my-7"></div>
              <div className="flex gap-[20px]">
                <div className="min-w-[216px] max-w-[216px] min-h-[216px] max-h-[216px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465761/item/vngoods_01_465761.jpg?width=250"
                    alt=""
                  />
                </div>
                <div className="flex w-full gap-6">
                  <div className="flex flex-col gap-2 flex-1">
                    <h1 className="text-[20px] text-[#1b1b1b] font-bold">
                      Áo Thun Vải Linen Cổ Tròn Ngắn Tay
                    </h1>
                    <span className="text-[16px] text-[#7d7d7d]">
                      Mã sản phẩm: 465761
                    </span>
                    <span>Màu sắc: 01 OFF WHITE</span>
                    <span>Kích cỡ: Nữ S</span>
                    <span className="text-[#7d7d7d]">New</span>
                    <span className="mt-4 mb-2">588.000 VND</span>
                    <h3 className="uppercase text-[13px] font-semibold mb-[14px]">
                      Số lượng
                    </h3>
                    <div className="flex justify-between w-full items-center">
                      <div className="relative">
                        <div className=" bottom-0 border w-[134px] h-[45px] flex items-center justify-between pr-2 pl-[15px]">
                          <span>1</span>
                          {showResult ? (
                            <>
                              <ExpandMoreIcon
                                onClick={() => setShowResult(false)}
                                className="cursor-pointer"
                              />
                            </>
                          ) : (
                            <>
                              <ExpandLessIcon
                                onClick={() => setShowResult(true)}
                                className="cursor-pointer"
                              />
                            </>
                          )}
                        </div>
                        {showResult && (
                          <>
                            <div className="absolute border w-[134px] h-[45px] z-20 bg-white text-[#378694] pl-[15px] flex items-center cursor-pointer hover:bg-[#f6f6f6]">
                              1
                            </div>
                          </>
                        )}
                      </div>
                      <div className="text-[20px] uppercase">
                        Tổng: <span className="font-semibold">588.000 VND</span>
                      </div>
                    </div>
                  </div>
                  <CloseIcon
                    className="cursor-pointer"
                    style={{ fontSize: 30 }}
                  />
                </div>
              </div>
              <div className="border-b my-7"></div>
            </section>
            <div className="flex-1">
              <section className="border">
                <div className="px-5 py-7">
                  <h1 className="text-[19px] font-bold uppercase mb-[28px]">
                    Tổng đơn hàng&#124; 2 sản phẩm
                  </h1>
                  <div className="flex justify-between items-center text-[16px] mb-[28px]">
                    <p>Tổng cộng</p>
                    <span>881.000 VND</span>
                  </div>
                  <div className="flex flex-col gap-[8px] mb-[18px]">
                    <div className="flex justify-between items-center text-[20px] font-bold uppercase">
                      <p>Tổng</p>
                      <span>881.000 VND</span>
                    </div>
                    <div className="flex justify-between items-center text-[16px]">
                      <p>Đã bao gồm thuế giá trị gia tăng</p>
                      <span>65.259 VND</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-[28px]">
                    <h1 className="text-[20px] font-bold uppercase ">
                      Tổng đơn đặt hàng
                    </h1>
                    <span className="uppercase font-bold text-[16px]">
                      881.000 VND
                    </span>
                  </div>
                </div>
              </section>
              <div className="border-b border-t cursor-pointer mt-[30px] py-[14px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DiscountIcon
                    className="text-[#5a5a5a]"
                    style={{ fontSize: 18 }}
                  />
                  <span>Phiếu giảm giá</span>
                </div>
                <ArrowForwardIosIcon
                  className="text-[#5a5a5a]"
                  style={{ fontSize: 18 }}
                />
              </div>
              <div className="cursor-pointer my-[12px] py-[14px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RedeemIcon
                    className="text-[#5a5a5a]"
                    style={{ fontSize: 18 }}
                  />
                  <span>Tùy chọn quà tặng</span>
                </div>
                <ArrowForwardIosIcon
                  className="text-[#5a5a5a]"
                  style={{ fontSize: 18 }}
                />
              </div>
              <div className="flex items-center gap-[30px]">
                <p className="break-words">
                  Miễn phí giao hàng áp dụng cho đơn hàng giao tận nơi từ
                  999.000VND và tất cả các đơn nhận tại cửa hàng (Click &
                  Collect)
                </p>
                <ErrorIcon className="text-[#ababab]" />
              </div>
              <div className="w-full mt-4">
                <button className="bg-[red] px-1 py-3 tex-[16px] font-semibold text-white uppercase w-full">
                  Thanh toán
                </button>
              </div>
              <div className="w-full mt-4">
                <button className="bg-white border border-black px-1 py-3 tex-[16px] font-semibold hover:text-[#5a5a5a] uppercase w-full">
                  Tiếp tục mua sắm
                </button>
              </div>
              <p className="w-full mt-4 text-[#7d7d7d] text-[13px]">
                Đặt mua thêm 118.000 VND (bao gồm VAT), hoặc chọn hình thức
                Click & Collect, để được miễn phí giao hàng.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-[50px]">
          <h1 className="font-semibold text-[34px] uppercase">
            Sản phẩm gợi ý
          </h1>
          <main className="mt-6 mb-[88px]">
            <div className="w-full">
              <Swiper
                slidesPerView={4}
                navigation={true}
                spaceBetween={30}
                modules={[Navigation]}
                className="w-full mySwiper"
              >
                <SwiperSlide>
                  <div className="relative">
                    {isTym ? (
                      <>
                        <FavoriteIcon
                          onClick={() => setIsTym(false)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    ) : (
                      <>
                        <FavoriteBorderIcon
                          onClick={() => setIsTym(true)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    )}
                    <img
                      className="min-w-full max-w-full min-h-[293px] max-h-[293px] object-cover"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465763/item/vngoods_03_465763.jpg?width=320"
                      alt=""
                    />
                    <div className="mt-[10px] flex gap-2 items-center mb-[10px]">
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                    </div>
                    <div className="flex justify-between items-center text-[13px] text-[#ababab] uppercase font-semibold my-4">
                      <span>Nữ</span>
                      <span>XS-XXL</span>
                    </div>
                    <h1 className="text-[20px] uppercase font-bold text-left mb-[10px]">
                      Áo ba lỗ vải gân mềm
                    </h1>
                    <p className="uppercase text-[16px] text-left font-bold mb-[10px]">
                      244.000 VND
                    </p>
                    <p className="text-left flex items-center gap-3">
                      <Rate allowHalf defaultValue={5} />{" "}
                      <span className="text-[14px]">(100 đánh giá)</span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    {isTym ? (
                      <>
                        <FavoriteIcon
                          onClick={() => setIsTym(false)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    ) : (
                      <>
                        <FavoriteBorderIcon
                          onClick={() => setIsTym(true)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    )}
                    <img
                      className="min-w-full max-w-full min-h-[293px] max-h-[293px] object-cover"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465763/item/vngoods_03_465763.jpg?width=320"
                      alt=""
                    />
                    <div className="mt-[10px] flex gap-2 items-center mb-[10px]">
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                    </div>
                    <div className="flex justify-between items-center text-[13px] text-[#ababab] uppercase font-semibold my-4">
                      <span>Nữ</span>
                      <span>XS-XXL</span>
                    </div>
                    <h1 className="text-[20px] uppercase font-bold text-left mb-[10px]">
                      Áo ba lỗ vải gân mềm
                    </h1>
                    <p className="uppercase text-[16px] text-left font-bold mb-[10px]">
                      244.000 VND
                    </p>
                    <p className="text-left flex items-center gap-3">
                      <Rate allowHalf defaultValue={5} />{" "}
                      <span className="text-[14px]">(100 đánh giá)</span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    {isTym ? (
                      <>
                        <FavoriteIcon
                          onClick={() => setIsTym(false)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    ) : (
                      <>
                        <FavoriteBorderIcon
                          onClick={() => setIsTym(true)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    )}
                    <img
                      className="min-w-full max-w-full min-h-[293px] max-h-[293px] object-cover"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465763/item/vngoods_03_465763.jpg?width=320"
                      alt=""
                    />
                    <div className="mt-[10px] flex gap-2 items-center mb-[10px]">
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                    </div>
                    <div className="flex justify-between items-center text-[13px] text-[#ababab] uppercase font-semibold my-4">
                      <span>Nữ</span>
                      <span>XS-XXL</span>
                    </div>
                    <h1 className="text-[20px] uppercase font-bold text-left mb-[10px]">
                      Áo ba lỗ vải gân mềm
                    </h1>
                    <p className="uppercase text-[16px] text-left font-bold mb-[10px]">
                      244.000 VND
                    </p>
                    <p className="text-left flex items-center gap-3">
                      <Rate allowHalf defaultValue={5} />{" "}
                      <span className="text-[14px]">(100 đánh giá)</span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    {isTym ? (
                      <>
                        <FavoriteIcon
                          onClick={() => setIsTym(false)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    ) : (
                      <>
                        <FavoriteBorderIcon
                          onClick={() => setIsTym(true)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    )}
                    <img
                      className="min-w-full max-w-full min-h-[293px] max-h-[293px] object-cover"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465763/item/vngoods_03_465763.jpg?width=320"
                      alt=""
                    />
                    <div className="mt-[10px] flex gap-2 items-center mb-[10px]">
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                    </div>
                    <div className="flex justify-between items-center text-[13px] text-[#ababab] uppercase font-semibold my-4">
                      <span>Nữ</span>
                      <span>XS-XXL</span>
                    </div>
                    <h1 className="text-[20px] uppercase font-bold text-left mb-[10px]">
                      Áo ba lỗ vải gân mềm
                    </h1>
                    <p className="uppercase text-[16px] text-left font-bold mb-[10px]">
                      244.000 VND
                    </p>
                    <p className="text-left flex items-center gap-3">
                      <Rate allowHalf defaultValue={5} />{" "}
                      <span className="text-[14px]">(100 đánh giá)</span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    {isTym ? (
                      <>
                        <FavoriteIcon
                          onClick={() => setIsTym(false)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    ) : (
                      <>
                        <FavoriteBorderIcon
                          onClick={() => setIsTym(true)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    )}
                    <img
                      className="min-w-full max-w-full min-h-[293px] max-h-[293px] object-cover"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465763/item/vngoods_03_465763.jpg?width=320"
                      alt=""
                    />
                    <div className="mt-[10px] flex gap-2 items-center mb-[10px]">
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                    </div>
                    <div className="flex justify-between items-center text-[13px] text-[#ababab] uppercase font-semibold my-4">
                      <span>Nữ</span>
                      <span>XS-XXL</span>
                    </div>
                    <h1 className="text-[20px] uppercase font-bold text-left mb-[10px]">
                      Áo ba lỗ vải gân mềm
                    </h1>
                    <p className="uppercase text-[16px] text-left font-bold mb-[10px]">
                      244.000 VND
                    </p>
                    <p className="text-left flex items-center gap-3">
                      <Rate allowHalf defaultValue={5} />{" "}
                      <span className="text-[14px]">(100 đánh giá)</span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    {isTym ? (
                      <>
                        <FavoriteIcon
                          onClick={() => setIsTym(false)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    ) : (
                      <>
                        <FavoriteBorderIcon
                          onClick={() => setIsTym(true)}
                          className="absolute right-[10px] top-[10px] cursor-pointer text-[#f00]"
                        />
                      </>
                    )}
                    <img
                      className="min-w-full max-w-full min-h-[293px] max-h-[293px] object-cover"
                      src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465763/item/vngoods_03_465763.jpg?width=320"
                      alt=""
                    />
                    <div className="mt-[10px] flex gap-2 items-center mb-[10px]">
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                    </div>
                    <div className="flex justify-between items-center text-[13px] text-[#ababab] uppercase font-semibold my-4">
                      <span>Nữ</span>
                      <span>XS-XXL</span>
                    </div>
                    <h1 className="text-[20px] uppercase font-bold text-left mb-[10px]">
                      Áo ba lỗ vải gân mềm
                    </h1>
                    <p className="uppercase text-[16px] text-left font-bold mb-[10px]">
                      244.000 VND
                    </p>
                    <p className="text-left flex items-center gap-3">
                      <Rate allowHalf defaultValue={5} />{" "}
                      <span className="text-[14px]">(100 đánh giá)</span>
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </main>
        </section>
        {/* <div className="mb-4 text-center cursor-pointer hover:underline hover:text-blue-600">
          Xem thêm
        </div> */}
      </main>
    </>
  );
}
