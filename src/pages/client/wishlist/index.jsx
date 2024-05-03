import { Breadcrumb } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Wishlist() {
  const [isTym, setIsTym] = useState(false);
  return (
    <>
      <div className="mx-[124px] mb-[88px]">
        <Breadcrumb
          className="mt-[15px] mb-[52px] text-[12px]"
          items={[
            {
              title: (
                <Link to="/" className="uppercase">
                  Uniqlo
                </Link>
              ),
            },
            {
              title: <p className="uppercase">Ưu thích</p>,
            },
          ]}
        />
        <h3 className="font-semibold uppercase text-[34px] mb-[52px]">
          Yêu thích
        </h3>
        <main className="px-5 py-7 border shadow">
          <p className="mb-7">1 sản phẩm</p>
          <div className="flex gap-5">
            <div className="w-[219px] h-[219px] relative">
              <img
                className="object-cover w-full h-full"
                src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465760/item/vngoods_52_465760.jpg?width=250"
                alt=""
              />
              {isTym ? (
                <>
                  <FavoriteIcon
                    onClick={() => setIsTym(false)}
                    className="absolute top-3 right-3 cursor-pointer text-[#f00]"
                  />
                </>
              ) : (
                <>
                  <FavoriteBorderIcon
                    onClick={() => setIsTym(true)}
                    className="absolute top-3 right-3 cursor-pointer text-[#f00]"
                  />
                </>
              )}
            </div>
            <div>
              <Link
                to="/product-detail/1"
                className="text-[18px] uppercase font-semibold"
              >
                Áo thun dáng Mini ngắn tay
              </Link>
              <div className="text-[16px] flex flex-col gap-2 my-5">
                <p className="text-[#7d7d7d]">Mã sản phẩm: 465760</p>
                <p>Màu sắc: 52 GREEN</p>
                <p>Kích cỡ: Nữ</p>
              </div>
              <strong className="text-[22px] font-semibold uppercase">
                293.000 VND
              </strong>
            </div>
          </div>
          <div className="border-b my-[28px]"></div>
          <div className="flex gap-5">
            <div className="w-[219px] h-[219px] relative">
              <img
                className="object-cover w-full h-full"
                src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465760/item/vngoods_52_465760.jpg?width=250"
                alt=""
              />
              {isTym ? (
                <>
                  <FavoriteIcon
                    onClick={() => setIsTym(false)}
                    className="absolute top-3 right-3 cursor-pointer text-[#f00]"
                  />
                </>
              ) : (
                <>
                  <FavoriteBorderIcon
                    onClick={() => setIsTym(true)}
                    className="absolute top-3 right-3 cursor-pointer text-[#f00]"
                  />
                </>
              )}
            </div>
            <div>
              <Link
                to="/product-detail/1"
                className="text-[18px] uppercase font-semibold"
              >
                Áo thun dáng Mini ngắn tay
              </Link>
              <div className="text-[16px] flex flex-col gap-2 my-5">
                <p className="text-[#7d7d7d]">Mã sản phẩm: 465760</p>
                <p>Màu sắc: 52 GREEN</p>
                <p>Kích cỡ: Nữ</p>
              </div>
              <strong className="text-[22px] font-semibold uppercase">
                293.000 VND
              </strong>
            </div>
          </div>
          <div className="border-b my-[28px]"></div>
          <div className="flex gap-5">
            <div className="w-[219px] h-[219px] relative">
              <img
                className="object-cover w-full h-full"
                src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465760/item/vngoods_52_465760.jpg?width=250"
                alt=""
              />
              {isTym ? (
                <>
                  <FavoriteIcon
                    onClick={() => setIsTym(false)}
                    className="absolute top-3 right-3 cursor-pointer text-[#f00]"
                  />
                </>
              ) : (
                <>
                  <FavoriteBorderIcon
                    onClick={() => setIsTym(true)}
                    className="absolute top-3 right-3 cursor-pointer text-[#f00]"
                  />
                </>
              )}
            </div>
            <div>
              <Link
                to="/product-detail/1"
                className="text-[18px] uppercase font-semibold"
              >
                Áo thun dáng Mini ngắn tay
              </Link>
              <div className="text-[16px] flex flex-col gap-2 my-5">
                <p className="text-[#7d7d7d]">Mã sản phẩm: 465760</p>
                <p>Màu sắc: 52 GREEN</p>
                <p>Kích cỡ: Nữ</p>
              </div>
              <strong className="text-[22px] font-semibold uppercase">
                293.000 VND
              </strong>
            </div>
          </div>
          <div className="border-b my-[28px]"></div>
        </main>
      </div>
    </>
  );
}
