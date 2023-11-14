import React, { useEffect, useState } from 'react';
import { auth } from '../server/firebase';
const Xinchao = ({
    windowWidth,
    current_List_Room
}) => {
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
    return (
        <>
            {windowWidth < 570 ?
                (
                    <>
                        <div className={`flex col-span-12 items-center justify-center h-auto rounded-r-lg custom_bg_color__100 border-l-4 border-gray-900 ${current_List_Room === 'chatroom' ? '' : 'hidden'}`}>
                            <div className="text-4xl custom_text_color__100 dark:text-gray-500">
                                {user && (
                                    <>
                                        <h1>👋Xin chào bạn {user.displayName}</h1>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )
                : (
                    <>
                        <div className={`flex col-span-9 items-center justify-center h-auto rounded-r-lg custom_bg_color__100 border-l-4 border-gray-900`}>
                            <div className="text-4xl custom_text_color__100 dark:text-gray-500">
                                {user && (
                                    <>
                                        <h1>👋Xin chào bạn {user.displayName}</h1>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default Xinchao;