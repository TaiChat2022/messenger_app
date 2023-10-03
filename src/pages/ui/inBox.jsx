import "../../assets/css/custom_color.css";
import React from 'react';
const InBox = ({
    currentInbox,
    handleInbox
}) => {
    
    return (
        <>
            <div className="col-lg-12 h-screen pt-2 overflow-auto  col-span-3  custom_bg_color__100">
                <h1 className='text-2xl font-medium custom_text_color__100 text-left px-3  px-1 mb-4 pt-2 '>Tin nhắn đang chờ</h1>
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

                {/* Loại tin có thể bạn biết & spam */}
                <div className='mt-4 px-3 py-1 flex justify-between'>
                    <button onClick={() => handleInbox('show_coTheBiet')} type="button"
                        className={`rounded-l-md py-1 custom_text_color__100 text-xl flex-auto
                        ${currentInbox === 'show_coTheBiet' ? 'custom_bg_color__300' : 'custom_bg_color__200'}
                    `}>
                        Có thể bạn biết
                    </button>
                    <button onClick={() => handleInbox('show_spam')} type="button"
                        className={`rounded-r-md py-1 custom_text_color__100 text-xl flex-auto
                        ${currentInbox === 'show_spam' ? 'custom_bg_color__300' : 'custom_bg_color__200'}
                    `}>
                        Spam
                    </button>
                </div>
                {/* Chức năng tin nhắn chờ */}
                <div className='mt-4 px-3'>
                    <div className={currentInbox === 'show_coTheBiet' ? '' : 'hidden'}>
                        <h2 className='custom_text_color__100 text-xl text-left'>
                            Không có tin nhắn nào
                        </h2>
                    </div>
                    
                    <div className={currentInbox === 'show_spam' ? '' : 'hidden'}>
                        <h2 className='custom_text_color__100 text-xl text-left'>
                            Không có tin spam nào
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InBox;