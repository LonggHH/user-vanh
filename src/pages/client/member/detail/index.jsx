import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default function MemberDetail() {
  return (
    <>
      <main className="border px-5 py-7">
        <h3 className="text-[31px] uppercase font-bold mb-7">Hồ sơ</h3>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2">
            <div>
              <label className="font-bold uppercase text-[20px]">
                Địa chỉ emaill
              </label>
              <p>ngoq753429@gmail.com</p>
            </div>
            <div>
              <label className="font-bold uppercase text-[20px]">
                ĐIỆN THOẠI
              </label>
              <p>09887747374</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <label className="font-bold uppercase text-[20px]">Tên</label>
              <p>Ngọ Văn Quý</p>
            </div>
            <div>
              <label className="font-bold uppercase text-[20px]">
                ĐIỆN THOẠI di động
              </label>
              <p>09887747374</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div></div>
            <div>
              <label className="font-bold uppercase text-[20px]">Tên</label>
              <p>Ngọ Văn Quý</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
