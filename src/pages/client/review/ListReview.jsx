import { Rating } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ListReview() {
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
          <section className="" style={{ flex: 3 }}>
            <div className="flex justify-between items-center mb-[40px]">
              <h3 className="text-[32px] uppercase font-bold">Đánh giá</h3>
              <div className="flex items-center gap-2">
                <Rating name="half-rating" defaultValue={5} />
                <span> (7)</span>
              </div>
            </div>
            <div className="border-b"></div>
            <p className="my-[20px] font-semibold">8 Đánh giá</p>
            <div className="border-b"></div>
            <ul>
              <li>
                <div className="flex justify-between items-center mt-7 mb-4">
                  <h3 className="uppercase text-[20px] font-bold">BEST FIT</h3>
                  <time className="text-[#7d7d7d] text-[14px]">23/03/2023</time>
                </div>
                <div className="mb-5">
                  <Rating name="half-rating" defaultValue={4} />
                </div>
                <div className="text-[16px] leading-[24px]">
                  <dl className="flex gap-2">
                    <dt>Kích cỡ đã mua:</dt>
                    <dd>M</dd>
                  </dl>
                  <dl className="flex gap-2">
                    <dt>Quần áo có vừa không:</dt>
                    <dd>Đúng với kích thước</dd>
                  </dl>
                  <dl>
                    <dd>True to size top.please restock with more colours.</dd>
                  </dl>
                </div>
                <div className="mt-4 flex gap-4 items-center mb-7">
                  <strong className="uppercase text-[14px] font-semibold">
                    broccoli
                  </strong>
                  <span className="text-[14px] text-[#7d7d7d]">Nữ</span>
                  <span className="text-[14px] text-[#7d7d7d]">Singapore</span>
                </div>
              </li>
              <div className="border-b"></div>
              <li>
                <div className="flex justify-between items-center mt-7 mb-4">
                  <h3 className="uppercase text-[20px] font-bold">BEST FIT</h3>
                  <time className="text-[#7d7d7d] text-[14px]">23/03/2023</time>
                </div>
                <div className="mb-5">
                  <Rating name="half-rating" defaultValue={4} />
                </div>
                <div className="text-[16px] leading-[24px]">
                  <dl className="flex gap-2">
                    <dt>Kích cỡ đã mua:</dt>
                    <dd>M</dd>
                  </dl>
                  <dl className="flex gap-2">
                    <dt>Quần áo có vừa không:</dt>
                    <dd>Đúng với kích thước</dd>
                  </dl>
                  <dl>
                    <dd>True to size top.please restock with more colours.</dd>
                  </dl>
                </div>
                <div className="mt-4 flex gap-4 items-center mb-7">
                  <strong className="uppercase text-[14px] font-semibold">
                    broccoli
                  </strong>
                  <span className="text-[14px] text-[#7d7d7d]">Nữ</span>
                  <span className="text-[14px] text-[#7d7d7d]">Singapore</span>
                </div>
              </li>
              <div className="border-b"></div>
              <li>
                <div className="flex justify-between items-center mt-7 mb-4">
                  <h3 className="uppercase text-[20px] font-bold">BEST FIT</h3>
                  <time className="text-[#7d7d7d] text-[14px]">23/03/2023</time>
                </div>
                <div className="mb-5">
                  <Rating name="half-rating" defaultValue={4} />
                </div>
                <div className="text-[16px] leading-[24px]">
                  <dl className="flex gap-2">
                    <dt>Kích cỡ đã mua:</dt>
                    <dd>M</dd>
                  </dl>
                  <dl className="flex gap-2">
                    <dt>Quần áo có vừa không:</dt>
                    <dd>Đúng với kích thước</dd>
                  </dl>
                  <dl>
                    <dd>True to size top.please restock with more colours.</dd>
                  </dl>
                </div>
                <div className="mt-4 flex gap-4 items-center mb-7">
                  <strong className="uppercase text-[14px] font-semibold">
                    broccoli
                  </strong>
                  <span className="text-[14px] text-[#7d7d7d]">Nữ</span>
                  <span className="text-[14px] text-[#7d7d7d]">Singapore</span>
                </div>
              </li>
              <div className="border-b"></div>
              <li>
                <div className="flex justify-between items-center mt-7 mb-4">
                  <h3 className="uppercase text-[20px] font-bold">BEST FIT</h3>
                  <time className="text-[#7d7d7d] text-[14px]">23/03/2023</time>
                </div>
                <div className="mb-5">
                  <Rating name="half-rating" defaultValue={4} />
                </div>
                <div className="text-[16px] leading-[24px]">
                  <dl className="flex gap-2">
                    <dt>Kích cỡ đã mua:</dt>
                    <dd>M</dd>
                  </dl>
                  <dl className="flex gap-2">
                    <dt>Quần áo có vừa không:</dt>
                    <dd>Đúng với kích thước</dd>
                  </dl>
                  <dl>
                    <dd>True to size top.please restock with more colours.</dd>
                  </dl>
                </div>
                <div className="mt-4 flex gap-4 items-center mb-7">
                  <strong className="uppercase text-[14px] font-semibold">
                    broccoli
                  </strong>
                  <span className="text-[14px] text-[#7d7d7d]">Nữ</span>
                  <span className="text-[14px] text-[#7d7d7d]">Singapore</span>
                </div>
              </li>
              <div className="border-b"></div>
              <div className="mt-[40px] mb-[20px] flex items-center justify-center cursor-pointer hover:text-gray-800">
                <span className="uppercase font-bold">Tải thêm</span>
                <KeyboardArrowDownIcon />
              </div>
            </ul>
          </section>
          <article className="flex-1 border px-[20px] py-[28px]">
            <h3 className="uppercase font-bold text-[31px] mb-[28px]">
              Xem thông tin tóm lược
            </h3>
            <h4 className="uppercase font-semibold text-[18px] mb-[28px]">
              Đánh giá của khách hàng
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Rating name="half-rating" defaultValue={5} />
                <span> (7)</span>
              </div>
              <div className="flex items-center gap-2">
                <Rating name="half-rating" defaultValue={4} />
                <span> (1)</span>
              </div>
              <div className="flex items-center gap-2">
                <Rating name="half-rating" defaultValue={3} />
                <span> (0)</span>
              </div>
              <div className="flex items-center gap-2">
                <Rating name="half-rating" defaultValue={2} />
                <span> (0)</span>
              </div>
              <div className="flex items-center gap-2">
                <Rating name="half-rating" defaultValue={1} />
                <span> (0)</span>
              </div>
            </div>
            <div className="my-[40px]">
              <h1 className="text-[20px] uppercase font-bold break-words mb-4">
                Quần áo có vừa không
              </h1>
              <ul className="w-full flex mb-7 justify-between">
                <li className="text-[15px] font-bold uppercase">Chật</li>
                <li className="text-[15px] font-bold uppercase w-[70px] text-center">
                  Đúng với kích thước
                </li>
                <li className="text-[15px] font-bold uppercase">Rộng</li>
              </ul>
              <div className="w-full flex items-center">
                <div className="size-[14px] rounded-full bg-[#dadada]"></div>
                <div className="border-b flex-1"></div>
                <div className="size-[14px] rounded-full bg-[#dadada]"></div>
                <div className="border-b flex-1"></div>
                <div className="size-[14px] rounded-full bg-[#dadada] dot-selected"></div>
                <div className="border-b flex-1"></div>
                <div className="size-[14px] rounded-full bg-[#dadada]"></div>
                <div className="border-b flex-1"></div>
                <div className="size-[14px] rounded-full bg-[#dadada]"></div>
              </div>
            </div>
            <div className="mt-[20px] mb-[20px]">
              <Link to="/reviews/new">
                <button className="h-[45px] text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                  Viết bài đánh giá
                </button>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
