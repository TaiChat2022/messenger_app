import React, {useState, useEffect} from 'react';
import {auth } from '../server/firebase'
const Xinchao = () => {
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
            <div className="flex col-span-9 items-center justify-center h-auto rounded-r-lg custom_bg_color__100 border-l-4 border-gray-900">
                <p className="text-4xl custom_text_color__100 dark:text-gray-500">
                    {user&&(
                        <>
                            <h1>👋Xin chào bạn {user.displayName}</h1>
                        </>
                    )}
                </p>
            </div>
        </>
    );
};

export default Xinchao;