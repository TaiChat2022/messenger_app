import React from 'react';
import '../../assets/css/menu.css';

const Chung = ({
    handleCloseModal
}) => {
    return (
        <>
            <button type="button" className="custom_text_color__400 px-3 mb-1 bg-transparent hover_close_modal rounded-tr-lg text-sm w-8 h-8 ml-auto flex justify-end  items-center" onClick={handleCloseModal}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className='m-4 text-left border-b border-gray-900 custom_text_color__100'>
                <h1 className='text-lg py-1'>Chung</h1>
                <p className='text-sm mb-4'>
                    Hiển thị ứng dụng Messenger dành cho máy tính
                    trong Khay hệ thống trên Windows
                </p>
                <label className="switch mt-2 mb-2 cursor-pointer">
                    <input type="checkbox" id="switch" />
                    <span className="slider round" />
                </label>
            </div>
            <div className='m-4 text-left border-b border-gray-900 custom_text_color__100'>
                <p className='text-sm mb-4'>
                    Mở ứng dụng Messenger dành cho máy tính khi bạn khởi động máy tính
                </p>
                <label className="switch mt-2 mb-2 cursor-pointer">
                    <input type="checkbox" id="switch" />
                    <span className="slider round" />
                </label>
            </div>
            <div className='m-4 text-left border-b border-gray-900 custom_text_color__100'>
                <p className='text-sm mb-4'>
                    Mở ứng dụng Messenger dành cho máy tính khi bạn dùng Messenger trong trình duyệt
                </p>
                <label className="switch mt-2 mb-2 cursor-pointer">
                    <input type="checkbox" id="switch" />
                    <span className="slider round" />
                </label>
                <p className='text-xs custom_text2_color__500 mb-4'>
                    Ứng dụng Messenger dành cho máy tính sẽ tự động mở khi bạn dùng Messenger trên messenger.com.
                </p>
            </div>
        </>
    );
};

export default Chung;