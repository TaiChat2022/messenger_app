import React from 'react';

const TrangThai = ({
    handleCloseModal
}) => {
    return (
        <>
            <button type="button" className="custom_text_color__400 px-3 mb-1 bg-transparent hover_close_modal rounded-tr-lg text-sm w-8 h-8 ml-auto flex justify-end items-center" onClick={handleCloseModal}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className='m-4 text-left border-b border-gray-900 custom_text_color__100'>
                <h1 className='text-lg py-1'>Trạng thái</h1>
                <p className='text-sm mb-4'>
                    Hiển thị trạng thái hoạt động
                </p>
                <label className="switch mt-2 mb-2 cursor-pointer">
                    <input type="checkbox" id="switch" />
                    <span className="slider round" />
                </label>
                <p className='text-md mb-4'>
                    Trạng thái hoạt động: Đang bật
                </p>
            </div>
            <div className='m-4 text-left custom_text_color__100'>
                <p className='text-sm custom_text2_color__500 mb-4'>
                    Bạn bè và người liên hệ của bạn sẽ biết khi nào bạn đang hoạt động hoặc
                    hoạt động gần đây.
                </p>
                <a href="#" className='btn link_timHieuThem font-semibold'>Tìm hiểu thêm</a>
            </div>
        </>
    );
};

export default TrangThai;