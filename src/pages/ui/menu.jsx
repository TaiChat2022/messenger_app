import React from 'react';
import "../../assets/css/menu.css";
export default function MenuUI({
    currentMenu, Link, handleMenuClick, currentModal, user, signOut, handleModalList,
    Chung, GiaoDien, ThongBao, TrangThai,

    selectedTheme, handleThemeChange, windowWidth, handleSelected_List_Room,

    Button, Fade, Popper, Modal,
    anchorEl, open, handleClick, placement,

    openModal, handleOpenModal, handleCloseModal,
}) {
    return (
        <>
            {windowWidth < 500 ? (
                <>
                    <div className='flex relative w-16'>
                        <div className="h-screen grid grid-cols-1 content-between px-2 pb-2 backdrop-blur-md custom_bg_color__400 dark:bg-gray-800 w-full rounded-l-lg ">
                            <ul className="space-y-2 font-medium">
                                <div className='Logo pt-2 pl-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-messenger w-4 h-4 custom_text_color__100" viewBox="0 0 16 16">
                                        <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                                    </svg>
                                </div>
                                <li className={`rounded-lg ${currentMenu === 'messenger' ? 'custom_bg_color__500' : ''}`}>
                                    <Link to="#"
                                        onClick={() => handleMenuClick('messenger') &
                                            handleSelected_List_Room('chatlist')}
                                        className="flex justify-center items-center p-1 pb-2  rounded-lg dark:custom_text_color__100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <i className={`bi bi-chat-fill text-sm ${currentMenu === 'messenger' ? 'custom_text_color__100' : 'custom_text_color__300'}`}></i>
                                    </Link>
                                </li>
                                <li className={`rounded-lg ${currentMenu === 'messenger__shop' ? 'custom_bg_color__500' : ''}`}>
                                    <Link to="#"
                                        onClick={() => handleMenuClick('messenger__shop')}
                                        className="flex justify-center items-center p-1 pb-2 text-gray-900 rounded-lg dark:custom_text_color__100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <i className={`bi bi-shop-window text-sm ${currentMenu === 'messenger__shop' ? 'custom_text_color__100' : 'custom_text_color__300'}`}></i>
                                    </Link>

                                </li>
                                <li className={`rounded-lg ${currentMenu === 'messenger__inbox' ? 'custom_bg_color__500' : ''}`}>
                                    <Link to="#"
                                        onClick={() => handleMenuClick('messenger__inbox')}
                                        className="flex justify-center items-center p-1 pb-2 text-gray-900 rounded-lg dark:custom_text_color__100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <i className={`bi bi-mailbox text-sm relative ${currentMenu === 'messenger__inbox' ? 'custom_text_color__100 ' : 'custom_text_color__300'}`}>
                                            <span className="absolute -right-1 top-0 flex items-center justify-center w-1 h-1 p-1 font-medium custom_text2_color__100 bg-white rounded-full"></span>
                                        </i>
                                    </Link>

                                </li>
                                <li className={`rounded-lg ${currentMenu === 'messenger__savemessage' ? 'custom_bg_color__500' : ''}`}>
                                    <Link to="#"
                                        onClick={() => handleMenuClick('messenger__savemessage')}
                                        className="flex justify-center items-center p-1 pb-2 text-gray-900 rounded-lg dark:custom_text_color__100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <i className={`bi bi-archive-fill text-sm ${currentMenu === 'messenger__savemessage' ? 'custom_text_color__100' : 'custom_text_color__300'}`}></i>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                {/* Avatar người dùng  */}
                                <div className='container flex items-center justify-center'>
                                    <Button onClick={handleClick('right')}
                                        className="flex items-center justify-center w-full px-0">
                                        {
                                            user &&
                                            (
                                                <>
                                                    <img className="w-8 h-8 rounded-full border-solid border-2 border-black" src={user.photoURL} alt="user photo" />
                                                </>
                                            )
                                        }
                                    </Button>
                                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                                        {({ TransitionProps }) => (
                                            <Fade {...TransitionProps} timeout={350}>
                                                <div className="z-50 ml-2 mb-4  custom_bg_color__400 rounded-lg shadow w-44 dark:bg-gray-700">
                                                    <ul className="py-1 text-sm shadow-lg custom_text_color__300 divide-y divide-gray-500" aria-labelledby="doubleDropdownButton">
                                                        <li>
                                                            <a onClick={handleOpenModal} className="flex items-center justify-around cursor-pointer px-4 py-3">
                                                                <i className="bi bi-gear pb-1"></i>
                                                                <span className='text-left'>Tùy chọn</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a onClick={signOut} className="flex items-center justify-around cursor-pointer px-4 py-3 ">
                                                                <i className="bi bi-box-arrow-in-right pb-1"></i>
                                                                <span >Đăng xuất</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Fade>
                                        )}
                                    </Popper>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Popup tùy chọn và đăng xuất của người dùng */}
                    <Modal
                        open={openModal}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className="absolute inset-y-4 inset-x-auto z-50 w-full p-4 h-[calc(100%-2rem)] max-h-full">
                            <div className="relative w-full max-w-2xl max-h-full h-screen rounded-lg">
                                <div className="relative custom_bg_color__100 rounded-lg shadow border">
                                    <div className='modal_height'>
                                        <div className="grid grid-cols-4 h-full mb-4">
                                            {/* option left */}
                                            <div className="flex items-start col-span-1 justify-start border-r border-gray-900 overflow-x-hidden overflow-y-auto rounded-lg">
                                                <div className="flex flex-col gap-2 h-full relative w-full custom_bg_color__100 custom_text_color__100 overflow-auto mr-1 ">
                                                    {/* List tùy chọn */}
                                                    <h3 className="text-xs custom_text2_color__900 p-2 text-left ml-2">
                                                        Tùy chọn
                                                    </h3>
                                                    <div className={`flex items-center justify-center gap-4 py-2 p-2 cursor-pointer ${currentModal === 'show_chung' ? 'custom_bg_color__200' : ''} `}
                                                        onClick={() => handleModalList('show_chung')}>
                                                        <div className='custom_bg2_color__100 custom_text2_color__100 w-8 h-8 p-2 rounded-full '>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gear-wide rounded-full " viewBox="0 0 16 16">
                                                                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className={`flex items-center justify-center gap-4 p-2 cursor-pointer ${currentModal === 'show_trangThai' ? 'custom_bg_color__200' : ''} `}
                                                        onClick={() => handleModalList('show_trangThai')}>
                                                        <div className='bg-green-400 text-white w-8 h-8 p-2 rounded-full '>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-incognito" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className={`flex items-center justify-center gap-4 p-2 cursor-pointer ${currentModal === 'show_thongBao' ? 'custom_bg_color__200' : ''} `}
                                                        onClick={() => handleModalList('show_thongBao')}>
                                                        <div className='bg-purple-400 text-white w-8 h-8 p-2 rounded-full '>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                                            </svg>
                                                        </div>

                                                    </div>
                                                    <div className={`flex items-center justify-center gap-4 p-2 cursor-pointer ${currentModal === 'show_giaoDien' ? 'custom_bg_color__200' : ''} `}
                                                        onClick={() => handleModalList('show_giaoDien')}>
                                                        <div className='custom_bg2_color__100 custom_text2_color__100 w-8 h-8 p-2 rounded-full '>
                                                            {selectedTheme === "dark_theme" ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                                                </svg>
                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Tài khoản và hỗ trợ */}
                                                    <h3 className="text-xs custom_text2_color__900 p-2 text-left ml-2">
                                                        Tài khoản & hỗ trợ
                                                    </h3>
                                                    <a className="flex items-center justify-center gap-4 py-2 pl-2 pr-0 cursor-pointer"
                                                        href="https://www.facebook.com/settings/?tab=your_facebook_information" target="_">
                                                        <div className='bg-blue-500 text-white w-8 h-8 p-2 rounded-full flex item-center'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gear-wide rounded-full" viewBox="0 0 16 16">
                                                                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                                                            </svg>
                                                        </div>
                                                    </a>

                                                    <a className="flex items-center justify-center gap-4 py-2 pl-2 pr-0 cursor-pointer"
                                                        href="https://www.facebook.com/help/messenger-app/?helpref=about_content" target="_">
                                                        <div className='bg-cyan-500 text-white w-8 h-8 p-2 rounded-full flex item-center'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-question-circle-fill rounded-full" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* option right */}
                                            <div className="flex-auto items-start justify-start col-span-3 h-24 custom_text_color__100 overflow-x-hidden overflow-y-auto h-full rounded-lg">
                                                <div className={currentModal === 'show_chung' ? '' : 'hidden'}>
                                                    <Chung
                                                        handleCloseModal={handleCloseModal}
                                                    />
                                                </div>
                                                <div className={currentModal === 'show_giaoDien' ? '' : 'hidden'}>
                                                    <GiaoDien
                                                        handleCloseModal={handleCloseModal}
                                                        selectedTheme={selectedTheme}
                                                        handleThemeChange={handleThemeChange}
                                                    />
                                                </div>
                                                <div className={currentModal === 'show_thongBao' ? '' : 'hidden'}>
                                                    <ThongBao
                                                        handleCloseModal={handleCloseModal}
                                                    />
                                                </div>
                                                <div className={currentModal === 'show_trangThai' ? '' : 'hidden'}>
                                                    <TrangThai
                                                        handleCloseModal={handleCloseModal}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </>
            ) :
                (
                    <>
                        <div className='flex relative w-20'>
                            <div className="h-screen grid grid-cols-1 content-between px-2 pb-2 backdrop-blur-md custom_bg_color__400 dark:bg-gray-800 w-full rounded-l-lg ">
                                <ul className="space-y-2 font-medium">
                                    <div className='Logo pt-2 pl-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-messenger w-5 h-5 custom_text_color__100" viewBox="0 0 16 16">
                                            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                                        </svg>
                                    </div>
                                    <li data-popover-target="popover-right_chat" data-popover-placement="right" className={`rounded-lg ${currentMenu === 'messenger' ? 'custom_bg_color__500' : ''}`}>
                                        <Link to="#"
                                            onClick={() => handleMenuClick('messenger')}
                                            className="flex justify-center items-center p-1 pb-2 text-gray-900 rounded-lg dark:custom_text_color__100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <i className={`bi bi-chat-fill  text-lg ${currentMenu === 'messenger' ? 'custom_text_color__100' : 'custom_text_color__300'}`}></i>
                                        </Link>
                                        <div data-popover id="popover-right_chat" role="tooltip" className="absolute z-10 invisible inline-block w-32 text-sm  transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
                                            <div className="px-3 py-2 custom_bg_color__400 custom_text_color__300  rounded-lg">
                                                <h3 className="font-semibold">Chat</h3>
                                            </div>
                                            <div data-popper-arrow></div>
                                        </div>
                                    </li>
                                    <li data-popover-target="popover-right_maket" data-popover-placement="right" className={`rounded-lg ${currentMenu === 'messenger__shop' ? 'custom_bg_color__500' : ''}`}>
                                        <Link to="#"
                                            onClick={() => handleMenuClick('messenger__shop')}
                                            className="flex justify-center items-center p-1 pb-2 text-gray-900 rounded-lg dark:custom_text_color__100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <i className={`bi bi-shop-window text-lg ${currentMenu === 'messenger__shop' ? 'custom_text_color__100' : 'custom_text_color__300'}`}></i>
                                        </Link>
                                        <div data-popover id="popover-right_maket" role="tooltip" className="absolute z-10 invisible inline-block w-32 text-sm  transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
                                            <div className="px-3 py-2 custom_bg_color__400 custom_text_color__300 rounded-lg">
                                                <h3 className="font-semibold">Maket place</h3>
                                            </div>
                                            <div data-popper-arrow></div>
                                        </div>
                                    </li>
                                    <li data-popover-target="popover-right_inbox" data-popover-placement="right" className={`rounded-lg ${currentMenu === 'messenger__inbox' ? 'custom_bg_color__500' : ''}`}>
                                        <Link to="#"
                                            onClick={() => handleMenuClick('messenger__inbox')}
                                            className="flex justify-center items-center p-1 pb-2 text-gray-900 rounded-lg dark:custom_text_color__100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <i className={`bi bi-mailbox text-lg relative ${currentMenu === 'messenger__inbox' ? 'custom_text_color__100 ' : 'custom_text_color__300'}`}>
                                                <span className="absolute -right-2 top-0 flex items-center justify-center w-2 h-2 p-2 text-sm font-medium custom_text2_color__100 bg-white rounded-full"></span>
                                            </i>
                                        </Link>
                                        <div data-popover id="popover-right_inbox" role="tooltip" className="absolute z-10 invisible inline-block w-32 text-sm  transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
                                            <div className="px-3 py-2 custom_bg_color__400 custom_text_color__300 rounded-lg">
                                                <h3 className="font-semibold">Tin chờ</h3>
                                            </div>
                                            <div data-popper-arrow></div>
                                        </div>
                                    </li>
                                    <li data-popover-target="popover-right_luutru" data-popover-placement="right" className={`rounded-lg ${currentMenu === 'messenger__savemessage' ? 'custom_bg_color__500' : ''}`}>
                                        <Link to="#"
                                            onClick={() => handleMenuClick('messenger__savemessage')}
                                            className="flex justify-center items-center p-1 pb-2 text-gray-900 rounded-lg dark:custom_text_color__100 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <i className={`bi bi-archive-fill text-lg ${currentMenu === 'messenger__savemessage' ? 'custom_text_color__100' : 'custom_text_color__300'}`}></i>
                                        </Link>
                                        <div data-popover id="popover-right_luutru" role="tooltip" className="absolute z-10 invisible inline-block w-32 text-sm  transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
                                            <div className="px-3 py-2 custom_bg_color__400 custom_text_color__300 rounded-lg">
                                                <h3 className="font-semibold">Tin lưu trữ</h3>
                                            </div>
                                            <div data-popper-arrow></div>
                                        </div>
                                    </li>
                                </ul>
                                <div>
                                    {/* Avatar người dùng  */}
                                    <div className='container flex items-center justify-center'>
                                        <Button onClick={handleClick('right')}
                                            className="flex items-center justify-center w-full px-0">
                                            {
                                                user &&
                                                (
                                                    <>
                                                        <img className="w-8 h-8 rounded-full border-solid border-2 border-black" src={user.photoURL} alt="user photo" />
                                                    </>
                                                )
                                            }
                                        </Button>
                                        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                                            {({ TransitionProps }) => (
                                                <Fade {...TransitionProps} timeout={350}>
                                                    <div className="z-50 ml-2 mb-4 custom_bg_color__400 rounded-lg shadow w-44 dark:bg-gray-700">
                                                        <ul className="py-1 text-sm shadow-lg custom_text_color__300 divide-y divide-gray-500" aria-labelledby="doubleDropdownButton">
                                                            <li>
                                                                <a onClick={handleOpenModal} className="flex items-center justify-around cursor-pointer px-4 py-3">
                                                                    <i className="bi bi-gear pb-1"></i>
                                                                    <span className='text-left'>Tùy chọn</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a onClick={signOut} className="flex items-center justify-around cursor-pointer px-4 py-3 ">
                                                                    <i className="bi bi-box-arrow-in-right pb-1"></i>
                                                                    <span >Đăng xuất</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Fade>
                                            )}
                                        </Popper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Popup tùy chọn và đăng xuất của người dùng */}
                        <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <div className="absolute inset-y-4 inset-x-8 z-50 w-full p-4 h-[calc(100%-2rem)] max-h-full">
                                <div className="relative w-full max-w-2xl max-h-full h-screen rounded-lg">
                                    <div className="relative custom_bg_color__100 rounded-lg shadow border">
                                        <div className='modal_height'>
                                            <div className="grid grid-cols-2 h-full mb-4">
                                                {/* option left */}
                                                <div className="flex items-start col-span-1 justify-start border-r border-gray-900 overflow-x-hidden overflow-y-auto rounded-lg">
                                                    <div className="flex flex-col h-full relative w-full custom_bg_color__100 custom_text_color__100 overflow-auto mr-1 ">
                                                        {/* List tùy chọn */}
                                                        <h3 className="text-sm custom_text2_color__900 p-2 text-left ml-2">
                                                            Tùy chọn
                                                        </h3>
                                                        <div className={`flex items-center gap-4 py-4 pl-4 pr-0 cursor-pointer ${currentModal === 'show_chung' ? 'custom_bg_color__200' : ''} `}
                                                            onClick={() => handleModalList('show_chung')}>

                                                            <div className='custom_bg2_color__100 custom_text2_color__100 w-10 h-10 p-2 rounded-full '>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gear-wide rounded-full " viewBox="0 0 16 16">
                                                                    <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col text-left items-center">
                                                                <strong className=" text-lg font-medium">Chung</strong>
                                                            </div>
                                                        </div>
                                                        <div className={`flex items-center gap-4 p-4 cursor-pointer ${currentModal === 'show_trangThai' ? 'custom_bg_color__200' : ''} `}
                                                            onClick={() => handleModalList('show_trangThai')}>
                                                            <div className='bg-green-400 text-white w-10 h-10 p-2 rounded-full '>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-incognito" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z" />
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col text-left">
                                                                <strong className=" text-lg font-medium dark:text-slate-200">Trang thái hoạt động</strong>
                                                                <span className=" text-sm font-light custom_text2_color__900 ">Bật</span>
                                                            </div>
                                                        </div>
                                                        <div className={`flex items-center gap-4 p-4 cursor-pointer ${currentModal === 'show_thongBao' ? 'custom_bg_color__200' : ''} `}
                                                            onClick={() => handleModalList('show_thongBao')}>
                                                            <div className='bg-purple-400 text-white w-10 h-10 p-2 rounded-full '>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col text-left">
                                                                <strong className=" text-lg font-medium dark:text-slate-200">Thông báo</strong>
                                                                <span className=" text-sm font-light custom_text2_color__900 ">Bật</span>
                                                            </div>
                                                        </div>
                                                        <div className={`flex items-center gap-4 p-4 cursor-pointer ${currentModal === 'show_giaoDien' ? 'custom_bg_color__200' : ''} `}
                                                            onClick={() => handleModalList('show_giaoDien')}>
                                                            <div className='custom_bg2_color__100 custom_text2_color__100 w-10 h-10 p-2 rounded-full '>
                                                                {selectedTheme === "dark_theme" ? (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                                                                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                                                    </svg>
                                                                )}

                                                            </div>
                                                            <div className="flex flex-col text-left">
                                                                <strong className=" text-lg font-medium dark:text-slate-200">Giao diện</strong>
                                                                <span className=" text-sm font-light custom_text2_color__900 ">
                                                                    {selectedTheme === "dark_theme" ? 'Tối' : 'Sáng'}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Tài khoản và hỗ trợ */}
                                                        <h3 className="text-sm custom_text2_color__900 p-2 text-left ml-2">
                                                            Tài khoản & hỗ trợ
                                                        </h3>
                                                        <a className="flex items-center gap-4 py-4 pl-4 pr-0 cursor-pointer"
                                                            href="https://www.facebook.com/settings/?tab=your_facebook_information" target="_">
                                                            <div className='bg-blue-500 text-white w-10 h-10 p-2 rounded-full flex item-center'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gear-wide rounded-full" viewBox="0 0 16 16">
                                                                    <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                                                                </svg>
                                                            </div>

                                                            <div className="flex text-left items-center w-full justify-between">
                                                                <p className="text-lg font-medium">
                                                                    Cài đặt tài khoản
                                                                </p>
                                                                <i className="bi bi-arrow-up-right-square pb-1 mr-2 custom_text2_color__900"></i>
                                                            </div>
                                                        </a>

                                                        <a className="flex items-center gap-4 py-4 pl-4 pr-0 cursor-pointer"
                                                            href="https://www.facebook.com/help/messenger-app/?helpref=about_content" target="_">
                                                            <div className='bg-cyan-500 text-white w-10 h-10 p-2 rounded-full flex item-center'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-question-circle-fill rounded-full" viewBox="0 0 16 16">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                                                </svg>
                                                            </div>
                                                            <div className="flex text-left items-center  w-full justify-between">
                                                                <p className="text-lg font-medium">
                                                                    Trợ giúp
                                                                </p>
                                                                <i className="bi bi-arrow-up-right-square pb-1 mr-2 custom_text2_color__900"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* option right */}
                                                <div className="flex-auto items-start col-span-1 justify-start h-24 custom_text_color__100 overflow-x-hidden overflow-y-auto h-full rounded-lg">
                                                    <div className={currentModal === 'show_chung' ? '' : 'hidden'}>
                                                        <Chung
                                                            handleCloseModal={handleCloseModal}
                                                        />
                                                    </div>
                                                    <div className={currentModal === 'show_giaoDien' ? '' : 'hidden'}>
                                                        <GiaoDien
                                                            handleCloseModal={handleCloseModal}
                                                            selectedTheme={selectedTheme}
                                                            handleThemeChange={handleThemeChange}
                                                        />
                                                    </div>
                                                    <div className={currentModal === 'show_thongBao' ? '' : 'hidden'}>
                                                        <ThongBao
                                                            handleCloseModal={handleCloseModal}
                                                        />
                                                    </div>
                                                    <div className={currentModal === 'show_trangThai' ? '' : 'hidden'}>
                                                        <TrangThai
                                                            handleCloseModal={handleCloseModal}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </>
                )
            }
        </>
    );
};

