import React,{ useState,useEffect} from 'react';

const GiaoDien = ({selectedTheme,handleThemeChange}) => {
    const [currentThemeIcon, setcurrentThemeIcon] = useState('show_theme_icon_6'); 
    const [theme_icon, setTheme_icon] = useState({
        show_theme_icon_6: true,
        show_theme_icon_5: false,
        show_theme_icon_4: false,
        show_theme_icon_3: false,
        show_theme_icon_2: false,
        show_theme_icon_1: false,
    }); 
    const resetTheme_icon = () => {
        setTheme_icon({
            show_theme_icon_6: false,
            show_theme_icon_5: false,
            show_theme_icon_4: false,
            show_theme_icon_3: false,
            show_theme_icon_2: false,
            show_theme_icon_1: false,
        });
    }; 
    const handleTheme_icon = (icon_theme) => {
        resetTheme_icon(); 
        setTheme_icon((prevState) => ({
            ...prevState,
            [icon_theme]: true, 
        }));
        setcurrentThemeIcon(icon_theme); 
    };
  
    
    return (
        <>
            <button type="button" className="custom_text_color__400 px-3 mb-1 bg-transparent hover_close_modal rounded-tr-lg text-sm w-8 h-8 ml-auto flex justify-end  items-center" data-modal-hide="tuyChon_Modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className='m-4 text-left border-b border-gray-900 custom_text_color__100 '>
                <h1 className='text-lg py-1'>Giao diện</h1>
                <label htmlFor="theme" className="block mb-4 text-md custom_text_color__200 ">
                    Chủ đề
                </label>
                <select
                    id="theme"
                    className="w-full custom_bg_color__200 custom_text_color__100 border border-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
                    value={selectedTheme}
                    onChange={handleThemeChange}
                >
                    <option value="dark_theme">Tối</option>
                    <option value="light_theme">Sáng</option>
                </select>
            </div>
            <div className='m-4 text-left border-b border-gray-900 custom_text_color__100 '>
                <h1 className='text-lg py-1'>Màu sắc của biểu tượng cảm xúc</h1>
                <button className={`text-2xl p-2 mb-4 rounded-2xl ${currentThemeIcon === 'show_theme_icon_1' ? 'custom_bg_color__300' : ''}`} 
                onClick={() => handleTheme_icon('show_theme_icon_1')}>
                    👍🏿
                </button>
                <button className={`text-2xl p-2 mb-4 rounded-2xl ${currentThemeIcon === 'show_theme_icon_2' ? 'custom_bg_color__300' : ''}`} 
                onClick={() => handleTheme_icon('show_theme_icon_2')}>
                    👍🏾
                </button>
                <button className={`text-2xl p-2 mb-4 rounded-2xl ${currentThemeIcon === 'show_theme_icon_3' ? 'custom_bg_color__300' : ''}`} 
                onClick={() => handleTheme_icon('show_theme_icon_3')}>
                    👍🏽
                </button>
                <button className={`text-2xl p-2 mb-4 rounded-2xl ${currentThemeIcon === 'show_theme_icon_4' ? 'custom_bg_color__300' : ''}`} 
                onClick={() => handleTheme_icon('show_theme_icon_4')}>
                    👍🏼
                </button>
                <button className={`text-2xl p-2 mb-4 rounded-2xl ${currentThemeIcon === 'show_theme_icon_5' ? 'custom_bg_color__300' : ''}`} 
                onClick={() => handleTheme_icon('show_theme_icon_5')}>
                    👍🏻
                </button>
                <button className={`text-2xl p-2 mb-4 rounded-2xl ${currentThemeIcon === 'show_theme_icon_6' ? 'custom_bg_color__300' : ''}`} 
                onClick={() => handleTheme_icon('show_theme_icon_6')}>
                    👍
                </button>
                
            </div>
            <div className='m-4 text-left border-b border-gray-900 custom_text_color__100 '>
                <label htmlFor="theme_size" className="block mb-4 text-md custom_text_color__200 ">
                    Mực độ thu phóng
                </label>
                <select id="theme_size" className="w-full custom_bg_color__200 custom_text_color__100 border border-gray-900 text-sm rounded-lg  block w-full p-2.5 mb-4 ">
                    <option  value="theme_size_80">Nhỏ (80%)</option>
                    <option  value="theme_size_100" selected>Bình thường (100%)</option>
                    <option value="theme_size_115">Lớn (115%)</option>
                    <option value="theme_size_150">Cực lớn (150%)</option>
                </select>
                <p className='text-sm custom_text2_color__900 mb-4'>
                    Thu phóng mọi thứ trong Messenger
                </p>
            </div>
        </>
    );
};

export default GiaoDien;