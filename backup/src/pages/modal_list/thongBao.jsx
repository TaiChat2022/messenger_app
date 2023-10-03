import React from 'react';

const ThongBao = () => {
    return (
        <>
                <button type="button" className="custom_text_color__400 px-3 mb-1 bg-transparent hover_close_modal rounded-tr-lg text-sm w-8 h-8 ml-auto flex justify-end  items-center" data-modal-hide="tuyChon_Modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className='m-4 text-left border-b border-gray-900 custom_text_color__100'>
                    <h1 className='text-lg py-1'>Thông báo</h1>
                    <p className='text-sm mb-4'>
                        Tắt tất cả thông báo
                    </p>
                    <label className="switch mt-2 mb-2 cursor-pointer">
                        <input type="checkbox" id="switch" />
                        <span className="slider round" />
                    </label>
                </div>
                <div className='m-4 text-left border-b border-gray-900 custom_text_color__100'>
                    <h1 className='text-lg py-1 mb-4'>Hiển thị bản xem trước</h1>
                    
                    <label className="switch mt-2 mb-2 cursor-pointer">
                        <input type="checkbox" id="switch" />
                        <span className="slider round" />
                    </label>
                    <p className='text-xs custom_text2_color__500 mb-4'>
                        Hiển thị bản xem trước tin nhắn khi bạn không dùng ứng dụng.
                    </p>
                </div>
                <div className='m-4 text-left border-b border-gray-900 custom_text_color__100'>
                    <h1 className='text-md py-1'>Cho phép thông báo khi đóng ứng dụng</h1>
                    <label className="switch mt-2 mb-2 cursor-pointer">
                        <input type="checkbox" id="switch" />
                        <span className="slider round" />
                    </label>
                </div>

                <div className='m-4 text-left custom_text_color__100'>
                    <div className="relative flex w-auto flex-col rounded-xl border-2 border-gray-900 text-gray-700 shadow-md">
                        <div className="p-3">
                            <h5 className="mb-2 block text-lg custom_text_color__100">
                                Thông báo từ messenger
                            </h5>
                            <p className="block text-sm font-light custom_text_color__300">
                                Thay đổi nhiều lựa chọn thông báo hơn trong phần tùy chọn hệ thống.
                            </p>
                        </div>
                        <div className="p-3 pt-0 ">
                            <button className="rounded-sm custom_bg_color__400 custom_text_color__100 w-full py-3 px-6 text-center align-middle  text-sm" type="button" data-ripple-light="true">
                                Mở phần cài đặt Windows
                            </button>
                        </div>
                    </div>


                </div>
    
        </>
    );
};

export default ThongBao;