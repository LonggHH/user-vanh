import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function MemberMenu() {
  return (
    <>
      <menu className="flex flex-col flex-1">
        <ul className="flex flex-col gap-3 mb-3" id="list-option-info">
          <h2 className="mb-0 font-bold text-[15px]">Tư cách thành viên</h2>
          <NavLink end to="/member" className="pl-3">
            Hồ sơ
          </NavLink>
          <NavLink to="/member/coupon-wallet" className="pl-3">
            Phiếu giảm giá
          </NavLink>
          <NavLink to="/member/purchase/history" className="pl-3">
            Lịch sử mua hàng
          </NavLink>
          <NavLink to="/member/orders" className="pl-3">
            Lịch sử đơn hàng
          </NavLink>
        </ul>
        <ul className="flex flex-col gap-2" id="list-option-info">
          <h2 className="mb-0 font-bold text-[15px]">Cài đặt hồ sơ</h2>
          <NavLink to="/member/edit" className="pl-3">
            Chỉnh sửa hồ sơ
          </NavLink>
          <NavLink to="/member/address" className="pl-3">
            Sổ địa chỉ
          </NavLink>
          <NavLink to="/member/change-password" className="pl-3">
            Thay đổi mật khẩu của tôi
          </NavLink>
        </ul>
      </menu>
    </>
  );
}
