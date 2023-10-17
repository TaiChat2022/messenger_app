import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDocsQuery } from '../hooks/firestore';
import { auth } from '../server/firebase';
import MobileList from './mobile/list';
import List from './ui/list';
const ListChat = ({
    windowWidth,
    handleSelected_List_Room,
    current_List_Room
}) => {
    // LIST 
    //List select user và handler
    // chọn user
    const [selectUser, setSelectUser] = useState(null);
    // handle
    const handleUserClick = (selected_user) => {
        setSelectUser(selected_user);
    }
    // END List select user và handler
    const { data: userList } = useDocsQuery('users')


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
                selectUser={selectUser}
                handleUserClick={handleUserClick}
                currentUser={currentUser}
                Link={Link}
                auth={auth}
                userList={userList}
                windowWidth={windowWidth}
                formattedDate={formattedDate}
                handleSelected_List_Room={handleSelected_List_Room}
                current_List_Room={current_List_Room}

                MobileList={MobileList}
            />
        </>
    );
};

export default ListChat;