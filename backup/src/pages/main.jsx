import { Route, Routes } from "react-router-dom";
import ChatRoom from './chatRoom';
import React, { useState, useEffect} from "react";
import { auth } from "../server/firebase";

import ChatMenu from './chatMenu';
import ListChat from "./listChat";
import Xinchao from './xinchao';
import Shop from './ui/shop';
import Chat_inbox from './chat_inbox';
import Save_mess from './ui/save_mess';

const Main = () => {
    // MENU 
        const [currentMenu, setCurrentMenu] = useState('messenger');
        const [selectedMenu, setSelectedMenu] = useState({
            messenger: true,
            messenger__shop: false,
            messenger__inbox: false,
            messenger__savemessage: false,
        });
        // Rest các menu khi được chọn
        const resetMenus = () => {
            setSelectedMenu({
                messenger: false,
                messenger__shop: false,
                messenger__inbox: false,
                messenger__savemessage: false,
            });
        };
        const handleMenuClick = (menu) => {
            resetMenus();
            setSelectedMenu((prevState) => ({
                ...prevState,
                [menu]: true, // Hiển thị menu tương ứng
            }));
            setCurrentMenu(menu); // Cập nhật menu hiện tại
        };
    // END MENU

    // Get current user
    const [user, setUser] = useState(null); 
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);
    // Đổi màu giao diện 
        const [selectedTheme, setSelectedTheme] = useState('dark_theme'); // Mặc định chọn dark_theme
        const themes = {
            dark_theme: {
                '--bg-color__100': '#000000',
                '--bg-color__200': '#111111',
                '--bg-color__300': '#222222',
                '--bg-color__400': '#333333',
                '--bg-color__500': '#444444',
                '--bg-color__900': '#999999',
            
                '--text-color__100': '#ffffff',
                '--text-color__200': '#f1f1f1',
                '--text-color__300': '#e0dede',
                '--text-color__400': '#d6d5d5',
            
            },
            light_theme: {
                '--bg-color__100': '#ffffff',
                '--bg-color__200': '#f1f1f1',
                '--bg-color__300': '#e0dede',
                '--bg-color__400': '#d6d5d5',
                '--bg-color__500': '#c4c3c3',
                '--bg-color__900': '#7e7e7e',
            
                '--text-color__100': '#000000',
                '--text-color__200': '#111111',
                '--text-color__300': '#222222',
                '--text-color__400': '#333333',
            },
        };
        useEffect(() => {
        // Khi selectedTheme thay đổi, cập nhật biến màu cho toàn bộ ứng dụng
        const selectedThemeColors = themes[selectedTheme];
            for (const [key, value] of Object.entries(selectedThemeColors)) {
                document.documentElement.style.setProperty(key, value);
            }
        }, [selectedTheme]);
        const handleThemeChange = (event) => {
            setSelectedTheme(event.target.value);
        };
    // END Đổi màu giao diện 
    return (
        <>
            <div >
                <div className="sm:ml-64">
                    <div className="flex h-full rounded-lg dark:border-gray-700">
                        {/* Chat menu*/}
                        <ChatMenu
                            currentMenu={currentMenu}
                            selectedMenu={selectedMenu}
                            resetMenus={resetMenus}
                            handleMenuClick={handleMenuClick}

                            selectedTheme ={selectedTheme}
                            handleThemeChange={handleThemeChange}
                        />
                        <div className={`flex-auto w-full ${currentMenu === 'messenger' ? '' : 'hidden'}`}>
                            <div className="grid grid-cols-12">
                                {/* Chat list */}
                                <ListChat />
                                {/* Chat room */}
                                <Routes>
                                    <Route path="/" element={<Xinchao />} />
                                    <Route path=":userId" element={<ChatRoom/>}/>
                                </Routes>
                            </div>
                        </div>
                        <div className={`flex-auto w-full ${currentMenu === 'messenger__shop' ? '' : 'hidden'}`}>
                            <div className="grid grid-cols-12">
                                {/* Chat maketing */}
                                <Shop />
                                {/* Chat room */}
                                {/* Chat room */}
                                <Routes>
                                    <Route path="/" element={<Xinchao />} />
                                    <Route path=":userId" element={<ChatRoom/>}/>
                                </Routes>
                            </div>
                        </div>
                        <div className={`flex-auto w-full ${currentMenu === 'messenger__inbox' ? '' : 'hidden'}`}>
                            <div className="grid grid-cols-12">
                                {/* Chat inBox */}
                                <Chat_inbox />
                                {/* Chat room */}
                                <Routes>
                                    <Route path="/" element={<Xinchao />} />
                                    <Route path=":userId" element={<ChatRoom/>}/>
                                </Routes>
                            </div>
                        </div>
                        <div className={`flex-auto w-full ${currentMenu === 'messenger__savemessage' ? '' : 'hidden'}`}>
                            <div className="grid grid-cols-12">
                                {/* Chat lưu trữ */}
                                <Save_mess />
                                {/* Chat room */}
                                <Routes>
                                    <Route path="/" element={<Xinchao />} />
                                    <Route path=":userId" element={<ChatRoom/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;