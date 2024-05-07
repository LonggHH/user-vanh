import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../../../public/images/logo-header.svg";
import { Link, useNavigate } from "react-router-dom";
import { Input, Dropdown } from "antd";
import { CloseSharp, SearchOutlined, Spa } from "@mui/icons-material";
import ModalMain from "../../../components/modal/ModalMain";
import { Tooltip, Badge } from "antd";
import Categories from "../../../components/categories";
import "./index.css";
import { useSelector } from "react-redux";

export default function Navbar() {
    const navigate = useNavigate();
    const [showInput, setShowInput] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);
    // console.log(showModalLogout);
    const isLogin = useSelector(state => state.account.data);

    const categories = useSelector(state => state.category.data);
    const cart = useSelector(state => state.cart.data);
    const wishlist = useSelector(state => state.wishlist.data)
    /**
     * Kiểm tra đăng nhập và chuyển hướng
     */
    const handleRedirect = () => {
        if (isLogin) {
            navigate("/wishlist");
        } else {
            setShowModalLogin(true);
        }
    };

    const handleOpenCategories = (id) => {
        setShowCategory(true);
    };

    const handleCloseModal = () => {
        setShowModalLogin(false);
    };

    const handleCloseCategories = (e) => {
        if (e.clientY > 80) {
            setShowCategory(true);
        } else {
            setShowCategory(false);
        }
    };

    const items = [
        {
            key: "1",
            label: <Link to="/member">Account</Link>,
        },
        // {
        //     key: "2",
        //     label: <Link to="/member/coupon-wallet">Phiếu giảm giá</Link>,
        // },
        // {
        //     key: "3",
        //     label: <Link to="/member/purchase/history">Lịch sử mua hàng</Link>,
        // },
        {
            key: "4",
            label: <Link to="/member/orders">Orders</Link>,
        },
        {
            key: "6",
            label: <Link to="/wishlist">Wishlist</Link>,
        },
        {
            key: "7",
            label: <span onClick={() => setShowModalLogout(true)}>Logout</span>,
        },
    ];

    return (
        <>
            {showModalLogin && <ModalMain close={handleCloseModal} />}
            {showModalLogout && (
                <ModalMain
                    title="Confirm Logout"
                    content="Are you sure you want to log out."
                    close={handleCloseModal}
                />
            )}
            <nav className="sticky top-0 z-40 w-full h-[72px] bg-white py-0 border-b border-solid border-b-[rgb(204, 204, 204)]">
                {showInput ? (
                    <>
                        <div className="absolute h-full w-full gap-3 flex items-center justify-center">
                            <div className="flex w-[50%] items-center">
                                <Input
                                    className="h-[40px] rounded-r-none"
                                    placeholder="Tìm kiếm theo từ khóa"
                                />
                                <Tooltip title="Tìm kiếm">
                                    <div className="h-10 flex items-center border px-2 bg-black rounded-r-[4px] text-white">
                                        <SearchOutlined className="cursor-pointer" />
                                    </div>
                                </Tooltip>
                            </div>
                            <Tooltip onClick={() => setShowInput(false)} title="Đóng">
                                <CloseSharp className="cursor-pointer hover:text-gray-800" />
                            </Tooltip>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="py-0 px-5 my-0 mx-[124px] h-full flex justify-between items-center">
                            <div className="flex items-center gap-5">
                                <Link to="/" className="mr-[28px]">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                                <ul className="flex gap-8" onMouseLeave={handleCloseCategories}>
                                    {categories.map((cat) => (
                                        <Link
                                            to="/collection"
                                            onMouseEnter={() => handleOpenCategories(cat.id)}
                                            key={cat.id}
                                            className="relative"
                                        >
                                            <span className="uppercase text-[#8c8b8b] font-semibold hover:text-[#424242] cursor-pointer">
                                                {cat.name}
                                            </span>
                                            {showCategory && <Categories />}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-8">
                                <Tooltip title="Search">
                                    <SearchIcon
                                        onClick={() => setShowInput(true)}
                                        className="cursor-pointer text-[24px]"
                                    />
                                </Tooltip>
                                {isLogin ? (
                                    <>
                                        <Dropdown
                                            placement="bottomRight"
                                            menu={{
                                                items,
                                            }}
                                        >

                                            <Badge dot>
                                                <a onClick={(e) => e.preventDefault()}>
                                                    <PersonIcon className="cursor-pointer text-[24px]" />
                                                </a>
                                            </Badge>
                                        </Dropdown>
                                    </>
                                ) : (
                                    <>
                                        <Tooltip title="Login">
                                            <Link to="/login">
                                                <PersonIcon className="cursor-pointer text-[24px]" />
                                            </Link>
                                        </Tooltip>
                                    </>
                                )}
                                <Tooltip title="Wishlist">
                                    <div onClick={handleRedirect} className="relative">
                                        <FavoriteBorderIcon className="cursor-pointer text-[24px]" />
                                        <span className="absolute px-2 py-0 rounded-full top-[-3px] right-[-18px] text-[10px] bg-[#EB3333] text-white font-semibold">
                                            {wishlist.length}
                                        </span>
                                    </div>
                                </Tooltip>
                                <Tooltip title="Cart">
                                    <Link to="/cart" className="relative">
                                        <ShoppingCartIcon className="cursor-pointer text-[24px]" />
                                        <span className="absolute px-2 py-0 rounded-full top-[-3px] right-[-18px] text-[10px] bg-[#EB3333] text-white font-semibold">
                                            {cart.length}
                                        </span>
                                    </Link>
                                </Tooltip>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </>
    );
}
