import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Rate } from "antd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ProductDetail() {

    const product = JSON.parse(localStorage.getItem("choose_product")) || {};

    const [showOverview, setShowOverview] = useState(false);
    const [showMaterial, setShowMaterial] = useState(false);
    const [showQuantity, setShowQuantity] = useState(false);

    const images = [
        `${product.defaultImage}`,
        ...product.images.map((item) => item.image_path),
        ...product.variations.map((item => item.image)),
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleClickColor = (variation) => {
        const imageVariation = variation.image
        const index = images.indexOf(imageVariation);
        if (index !== -1) {
            setCurrentIndex(index);
        }
    }

    const handleAddToCart = () => {
        const userLogin = JSON.parse(localStorage.getItem("user_login")) || null;
        if (!userLogin) {

        }
    }

    return (
        <>
            <main className="mx-[124px] mb-[88px]">
                <div className="mt-[15px] mb-[52px] flex gap-2 font-normal text-[12px] uppercase">
                    <Link className="underline">Uniqlo</Link>
                    <span>/</span>
                    <Link className="underline">{product.category.name}</Link>
                    <span>/</span>
                    <span className="underline">{product.brand.name}</span>
                    <span>/</span>
                    <Link>{product.name}</Link>
                </div>
                <section className="flex gap-10 mb-[40px]">
                    <div className="flex flex-1 flex-col gap-[88px]">
                        <article className=" flex w-full gap-6">
                            <div className="w-[20%]">
                                <div className="grid grid-cols-2 gap-4">
                                    {images.map((img, index) => (
                                        <img
                                            key={index}
                                            className={`object-cover w-full min-h-[50px] max-h-[50px] rounded ${index === currentIndex ? "img-active" : ""
                                                }`}
                                            src={img}
                                            alt=""
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="w-[70%]">
                                <div className="w-full h-[520px] relative flex flex-col gap-2">
                                    <div
                                        className="w-full h-full image-main rounded-lg"
                                        style={{
                                            backgroundImage: `url(${images[currentIndex]})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "100% 100%",
                                        }}
                                    >
                                        <button
                                            className="carousel-button carousel-button-prev"
                                            onClick={handlePrevImage}
                                        >
                                            <ArrowBackIosIcon />
                                        </button>
                                        <button
                                            className="carousel-button carousel-button-next"
                                            onClick={handleNextImage}
                                        >
                                            <ArrowForwardIosIcon />
                                        </button>
                                    </div>
                                    <div>
                                        {currentIndex + 1} / {images.length}
                                    </div>
                                </div>
                                <div className="mt-5 flex flex-col gap-4">
                                    <div className="flex justify-between">
                                        <h1 className="text-[20px]">Describe</h1>
                                        <div className="flex flex-col text-[#7d7d7d]">
                                            <span>SKU:</span>
                                            <span>459793</span>
                                        </div>
                                    </div>
                                    <div className="border-b"></div>
                                    <div className="flex justify-between">
                                        <h1 className="text-[20px]">Description</h1>
                                        <div className="flex flex-col text-[#7d7d7d]">
                                            {showOverview ? (
                                                <>
                                                    <ExpandMoreIcon
                                                        onClick={() => setShowOverview(!showOverview)}
                                                        className="cursor-pointer transition-all"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <KeyboardArrowUpIcon
                                                        onClick={() => setShowOverview(!showOverview)}
                                                        className="cursor-pointer transition-all"
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {showOverview && (
                                        <div>
                                            <pre style={{ whiteSpace: "pre-wrap" }}>
                                                {product.description}
                                            </pre>
                                        </div>
                                    )}
                                    <div className="border-b"></div>
                                    <div className="flex justify-between">
                                        <h1 className="text-[20px]">Specifications</h1>
                                        <div className="flex flex-col text-[#7d7d7d]">
                                            {showMaterial ? (
                                                <>
                                                    <ExpandMoreIcon
                                                        onClick={() => setShowMaterial(!showMaterial)}
                                                        className="cursor-pointer transition-all"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <KeyboardArrowUpIcon
                                                        onClick={() => setShowMaterial(!showMaterial)}
                                                        className="cursor-pointer transition-all"
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {showMaterial && (
                                        <div>
                                            <pre style={{ whiteSpace: "pre-wrap" }}>
                                                {product.specifications}
                                            </pre>
                                        </div>
                                    )}
                                    <div className="border-b"></div>
                                    <div className="flex justify-between">
                                        <h1 className="text-[20px]">Return policy</h1>
                                        <div className="flex flex-col text-[#7d7d7d]">
                                            <Link>
                                                <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="">
                            <div className="flex items-center gap-[20px]">
                                <h1 className="text-[20px] uppercase text-[#1b1b1b] font-bold">
                                    Reviews
                                </h1>
                                <Rate allowHalf defaultValue={2.5} /> (12)
                            </div>
                            <div className="border-b mt-5 mb-9"></div>
                            <div className="flex justify-between">
                                <div className="w-[30%]">
                                    <h1 className="text-[20px] mb-4 uppercase font-bold break-words">
                                        CUSTOMER REVIEWS
                                    </h1>
                                    <ul className="flex flex-col gap-5">
                                        <li className="flex items-center gap-2">
                                            <Rate allowHalf defaultValue={5} />
                                            <span>(12)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Rate allowHalf defaultValue={4} />
                                            <span>(10)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Rate allowHalf defaultValue={3} />
                                            <span>(5)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Rate allowHalf defaultValue={2} />
                                            <span>(1)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Rate allowHalf defaultValue={0} />
                                            <span>(0)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-[60%]">
                                    <h1 className="text-[20px] uppercase font-bold break-words mb-4">
                                        Is clothes tight?
                                    </h1>
                                    <ul className="w-full flex mb-7 justify-between">
                                        <li className="text-[15px] font-bold uppercase">Tight</li>
                                        <li className="text-[15px] font-bold uppercase w-[70px] text-center">
                                            True to size
                                        </li>
                                        <li className="text-[15px] font-bold uppercase">Wide</li>
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
                            </div>
                            <div className="mt-[20px] mb-[20px]">
                                <Link to="/reviews/new">
                                    <button className="h-[45px] text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                                        Write reviews
                                    </button>
                                </Link>
                            </div>
                            <div className="border-b"></div>
                            <div className="my-[20px] font-semibold">13 reviews</div>
                            <div className="border-b mb-10"></div>
                            <ul>
                                <li>
                                    <div className="flex justify-between items-center mt-7 mb-4">
                                        <h3 className="uppercase text-[20px] font-bold">
                                            BEST FIT
                                        </h3>
                                        <time className="text-[#7d7d7d] text-[14px]">
                                            23/03/2023
                                        </time>
                                    </div>
                                    <div className="mb-5">
                                        <Rate allowHalf defaultValue={5} />
                                    </div>
                                    <div className="text-[16px] leading-[24px]">
                                        <dl className="flex gap-2">
                                            <dt>Buy size:</dt>
                                            <dd>M</dd>
                                        </dl>
                                        <dl className="flex gap-2">
                                            <dt>Do the clothes fit:</dt>
                                            <dd>True to size</dd>
                                        </dl>
                                        <dl>
                                            <dd>
                                                True to size top.please restock with more colours.
                                            </dd>
                                        </dl>
                                    </div>
                                    {/* <div className="mt-4 flex gap-4 items-center mb-7">
                                        <strong className="uppercase text-[14px] font-semibold">
                                            broccoli
                                        </strong>
                                        <span className="text-[14px] text-[#7d7d7d]">Nữ</span>
                                        <span className="text-[14px] text-[#7d7d7d]">
                                            Singapore
                                        </span>
                                    </div> */}
                                </li>
                                <div className="border-b"></div>

                                <div className="mt-[40px] mb-[20px]">
                                    <Link to="/reviews">
                                        <button className="h-[45px] text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                                            See more
                                        </button>
                                    </Link>
                                </div>
                            </ul>
                        </article>
                    </div>
                    <article className="flex-1">
                        <h1 className="text-[45px] text-[#1b1b1b] font-bold">
                            {product.name}
                        </h1>
                        <div className="pb-[50px] text-[42px] font-bold">$ {product.price}</div>
                        <p>
                            A combination of comfort and warmth in neck design.
                        </p>
                        <div className="my-5 border-b"></div>
                        <aside className="mb-5">
                            <div className="uppercase text-[14px] font-semibold">
                                <strong className="mr-1">Colors:</strong>
                                <span>{product.variations.length}</span>
                            </div>
                            <div className="flex gap-2 mt-[11px]">
                                {product.variations.map((variation) => (
                                    <div
                                        key={variation.id}
                                        className={`size-[45px] border`}
                                        style={{ backgroundColor: `${variation.color}`, cursor: "pointer" }}
                                        onClick={() => handleClickColor(variation)}
                                    ></div>
                                ))}
                            </div>
                        </aside>
                        <aside>
                            {/* <div className="uppercase text-[14px] font-semibold flex items-center justify-between">
                                <div>
                                    <strong className="mr-1">Kích thước:</strong>
                                    <span>Nữ S</span>
                                </div>
                                <div className="flex items-center uppercase text-[14px] font-bold">
                                    <strong className="mr-1">
                                        <img
                                            height={24}
                                            width={24}
                                            src="https://tse4.mm.bing.net/th?id=OIP.BofAAsdNRyN-d3ikDZMsEQAAAA&pid=Api&P=0&h=180"
                                            alt=""
                                        />
                                    </strong>
                                    <Link className="underline">Chọn kích thước</Link>
                                </div>
                            </div> */}
                            {/* <div className="flex gap-2 mt-[11px] mb-5">
                                <div
                                    className={`size-[45px] border bg-white text-center leading-[45px]`}
                                >
                                    XS
                                </div>
                                <div
                                    className={`size-[45px] border bg-white text-center leading-[45px]`}
                                >
                                    S
                                </div>
                                <div
                                    className={`size-[45px] border bg-white text-center leading-[45px]`}
                                >
                                    M
                                </div>
                                <div
                                    className={`size-[45px] border bg-white text-center leading-[45px]`}
                                >
                                    L
                                </div>
                                <div
                                    className={`size-[45px] border bg-white text-center leading-[45px]`}
                                >
                                    XL
                                </div>
                                <div
                                    className={`size-[45px] border bg-white text-center leading-[45px]`}
                                >
                                    XXL
                                </div>
                            </div> */}
                            {/* <div>
                                <button className="h-[45px] text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-full py-2 px-1">
                                    Kích thước theo chiều cao
                                </button>
                            </div> */}
                            <div className="mt-4">
                                <label htmlFor="" className="uppercase font-semibold">
                                    Quantity
                                </label>
                                <div className="w-[134px] mt-4 relative">
                                    <div className="border px-3 h-[45px] flex items-center justify-between">
                                        <span>1</span>
                                        <KeyboardArrowDownIcon
                                            id="icon-dropdown"
                                            onClick={() => setShowQuantity(!showQuantity)}
                                            className={`cursor-pointer hover:opacity-70 ${!showQuantity ? "dropdown-rote" : ""
                                                }`}
                                        />
                                    </div>
                                    {showQuantity && (
                                        <ul className="w-full border absolute bg-white z-20">
                                            <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                                                1
                                            </li>
                                            <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                                                2
                                            </li>
                                            <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                                                3
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <p className="text-[14px] text-[#7d7d7d] mt-1">Stocking</p>
                            </div>
                            <div className="mt-[28px] mb-[20px]">
                                <button
                                    className="h-[45px] text-[16px] bg-[#ff0000] text-white uppercase font-bold hover:opacity-85 w-full py-2 px-1"
                                    onClick={handleAddToCart}
                                >
                                    Add to cart
                                </button>
                            </div>
                            {/* <div className="flex gap-6">
                                <button className="flex-1 text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                                Add the desired list
                                </button>
                                <button className="flex-1 text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                                    Tìm sản phẩm còn hàng trong giỏ hàng
                                </button>
                            </div> */}
                            <div className="border-b my-5"></div>
                            <div className="text-[16px] uppercase font-bold">Chia sẻ</div>
                            <div className="flex items-center gap-6 mt-3">
                                <img
                                    height={45}
                                    width={45}
                                    src="https://tse4.mm.bing.net/th?id=OIP.H836RvDYYgQZcZn0TC8qBAHaHa&pid=Api&P=0&h=180"
                                    alt=""
                                />
                                <img
                                    height={45}
                                    width={45}
                                    src="https://cdn.freebiesupply.com/logos/large/2x/facebook-4-logo-png-transparent.png"
                                    alt=""
                                />
                            </div>
                        </aside>
                    </article>
                </section>
            </main>
        </>
    );
}