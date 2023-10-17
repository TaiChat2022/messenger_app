import "../../assets/css/custom_color.css";

import React from 'react';
const Shop = () => {

    return (
        <>
            <div className="col-lg-12 h-screen pt-2 overflow-auto col-span-3  custom_bg_color__100">
                <h1 className='text-xs sm:text-2xl font-medium custom_text_color__100 px-3 text-left mb-4 pt-2'>Maketplace</h1>
                {/* Thanh tìm kiếm */}
                <div className="rounded overflow-hidden md:max-w-xl mx-3">
                    <div className="md:flex">
                        <div className="w-full">
                            <div className="relative">
                                <i className="absolute bi bi-search custom_text_color__200 top-3 right-3 text-xs md:text-sm" />
                                <input type="text"
                                    placeholder="Tìm kiếm"
                                    className="custom_bg_color__300 custom_text_color__100 text-xs md:text-sm h-12 w-full px-4 rounded focus:outline-none hover:cursor-pointer" name />
                                {/* <span className="absolute top-4 right-5 border-l  pl-4"><i className="bi bi-microphone hover:cursor-pointer" /></span> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chức năng shop */}
                <div className='mt-4 px-3 '>
                    <h2 className='custom_text_color__100 text-md sm:text-2xl text-left'>
                        Không có tin nhắn nào
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Shop;