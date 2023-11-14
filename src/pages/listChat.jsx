import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDocsQuery } from '../hooks/firestore';
import { auth, db } from '../server/firebase';
import MobileList from './mobile/list';
import List from './ui/list';
const ListChat = ({
    windowWidth,
    handleSelected_List_Room,
    current_List_Room
}) => {
    //List select user và handler
    // chọn user
    const [selectUser, setSelectUser] = useState(null);
    // handle
    const handleUserClick = (selected_user) => {
        setSelectUser(selected_user);
    }
    // END List select user và handler
    const { data: userList } = useDocsQuery('users');
    const { data: groupList } = useDocsQuery('groupChat');

    const currentUser = auth.currentUser;

    const formattedDate = (dateObj) => {
        const now = new Date();
        const options = { day: '2-digit', month: 'short' };
        if (dateObj.getFullYear() !== now.getFullYear()) {
            options.year = 'numeric';
        }
        return new Intl.DateTimeFormat('default', options).format(dateObj);
    };

    const [anchorElGroupChat, setAnchorElGroupChat] = React.useState(null);

    const handleClickOpenGroupChat = (event) => {
        setAnchorElGroupChat(event.currentTarget);
    };

    const handleCloseGroupChat = () => {
        setAnchorElGroupChat(null);
    };

    const openGroupChat = Boolean(anchorElGroupChat);
    const checkGroupChat = openGroupChat ? 'simple-popover' : undefined;
    const labelCheckBox = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [groupName, setGroupName] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);

    const groupChatRef = collection(db, 'groupChat');

    const createGroupChat = () => {
        // Check if the group name already exists
        const groupChatQuery = query(
            groupChatRef,
            where('tenGroup', '==', groupName)
        );

        getDocs(groupChatQuery)
            .then((querySnapshot) => {
                // If the group name already exists, update the existing group chat
                const selectedFriendsData = userList
                    .filter(user => selectedFriends.includes(user.uid))
                    .map(user => ({
                        name: user.displayName,
                        photoURL: user.photoURL,
                        isOnline: user.isOnline
                    }));
                if (!querySnapshot.empty) {
                    const existingGroupChatDoc = querySnapshot.docs[0];
                    const groupId = existingGroupChatDoc.id;

                    // Update the existing group chat with the new members or any other data you want to update
                    updateDoc(doc(groupChatRef, groupId), {
                        members: selectedFriendsData, // Update members as needed
                    })
                        .then(() => {
                            alert('Nhóm chat đã được cập nhật!', groupId);
                            console.log('Nhóm chat đã được cập nhật với ID: ', groupId);
                        })
                        .catch((error) => {
                            alert('Lỗi khi cập nhật nhóm chat', error);
                            console.error('Lỗi khi cập nhật nhóm chat: ', error);
                        });
                } else {

                    // The group name doesn't exist, create a new group chat
                    addDoc(groupChatRef, {
                        tenGroup: groupName,
                        members: selectedFriendsData,
                    })
                        .then((docRef) => {
                            // Lấy ID của tài liệu mới được thêm
                            const newGroupId = docRef.id;
                            // Cập nhật trường "uid" của tài liệu mới với ID
                            updateDoc(doc(groupChatRef, newGroupId), {
                                uid: newGroupId,
                            })
                            alert('Nhóm chat đã được tạo!', docRef.id);
                            console.log('Nhóm chat đã được tạo với ID: ', docRef.id);
                        })
                        .catch((error) => {
                            alert('Lỗi khi tạo nhóm chat', error);
                            console.error('Lỗi khi tạo nhóm chat: ', error);
                        });
                }
            })
            .catch((error) => {
                alert('Lỗi khi kiểm tra tên nhóm!', error);
                console.error('Lỗi khi kiểm tra tên nhóm: ', error);
            });
    };

    // Thêm bạn bè vào danh sách đã chọn khi người dùng kiểm tra ô checkbox
    const handleFriendSelection = (userId) => {
        if (selectedFriends.includes(userId)) {
            setSelectedFriends(selectedFriends.filter(id => id !== userId));
        } else {
            setSelectedFriends([...selectedFriends, userId]);
        }
    };

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

                Popover={Popover}
                Typography={Typography}

                anchorElGroupChat={anchorElGroupChat}
                handleClickOpenGroupChat={handleClickOpenGroupChat}
                handleCloseGroupChat={handleCloseGroupChat}
                openGroupChat={openGroupChat}
                checkGroupChat={checkGroupChat}

                Checkbox={Checkbox}
                labelCheckBox={labelCheckBox}
                Button={Button}

                groupName={groupName}
                setGroupName={setGroupName}
                selectedFriends={selectedFriends}
                createGroupChat={createGroupChat}
                handleFriendSelection={handleFriendSelection}

                groupList={groupList}
            />
        </>
    );
};

export default ListChat;