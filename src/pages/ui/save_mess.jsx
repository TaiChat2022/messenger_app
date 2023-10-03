import "../../assets/css/custom_color.css";

import React from 'react';
const Save_mess = () => {
    return (
        <>
            <div className="col-lg-12 h-screen pt-2 overflow-auto col-span-3 custom_bg_color__100">
                <h1 className='text-2xl font-medium custom_text_color__100 text-left px-3  mb-4 pt-2'>Tin nhắn lưu trữ</h1>
                {/* Thanh tìm kiếm */}
                <div className="rounded overflow-hidden md:max-w-xl mx-3">
                    <div className="md:flex">
                        <div className="w-full">
                            <div className="relative">
                                <i className="absolute bi bi-search custom_text_color__200 top-3 right-3 text-sm" />
                                <input type="text"
                                    placeholder="Tìm kiếm"
                                    className="custom_bg_color__300 custom_text_color__100 text-sm h-12 w-full px-4 rounded focus:outline-none hover:cursor-pointer" name />
                                {/* <span className="absolute top-4 right-5 border-l  pl-4"><i className="bi bi-microphone hover:cursor-pointer" /></span> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chức năng lưu trữ tin nhắn */}
                <div className='mt-4 px-3'>
                    <h2 className='custom_text_color__100 text-xl text-left'>
                        Không có tin nhắn nào
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Save_mess;