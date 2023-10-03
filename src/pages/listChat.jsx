import React , { useState, useEffect }from 'react';
import List from './ui/list';
import { auth, db } from '../server/firebase';
import { collection, onSnapshot, query } from "firebase/firestore";
const ListChat = () => {
    // LIST 
        //List select user và handler
            // chọn user
            const [selectUser, setSelectUser] = useState(null); 
            // handle
            const handleUserClick = (selected_user) => {
                setSelectUser(selected_user);
            }
        // END List select user và handler
        const [userList, setUserList] = useState([]);
        useEffect(() => {
            const u = query(collection(db, "users"));
            const unsubscribe = onSnapshot(u, (snapshot) => {
                const list = [];
                snapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setUserList(list);
            });
            return () => unsubscribe();
        }, []);
        const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Lưu trữ kích thước màn hình
        // Xác định kích thước màn hình và cập nhật state windowWidth
        useEffect(() => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        const currentUser = auth.currentUser;
        const displayName = currentUser ? currentUser.displayName : "";
        const photoURL = currentUser ? currentUser.photoURL : "";
        const date = currentUser ? currentUser.date : "";
        const text = currentUser ? currentUser.text : "";
        const formattedDate = (dateObj) => {
            const now = new Date();
            const options = { day: '2-digit', month: 'short' };
            if (dateObj.getFullYear() !== now.getFullYear()) {
                options.year = 'numeric';
            }
            return new Intl.DateTimeFormat('default', options).format(dateObj);
        };
    // END LIST
    return (
        <>
            <List
                selectUser = {selectUser}
                handleUserClick = {handleUserClick}
                currentUser = {currentUser}
                auth={auth}
                userList =  {userList}
                windowWidth ={windowWidth}
                formattedDate= {formattedDate}
            />
        </>
    );
};

export default ListChat;