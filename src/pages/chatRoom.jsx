import Modal from "@mui/material/Modal";
import {
    arrayUnion,
    collection,
    doc,
    getDoc,
    onSnapshot,
    orderBy,
    query,
    updateDoc,
    where
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useImageUpload from "../components/hook/useImageUpload";
import useSendMessage from "../components/hook/useSendMessage";
import { auth, db } from "../server/firebase";
import MobileRoom from './mobile/room';
import Room from "./ui/room";
const ChatRoom = ({
    windowWidth,
    handleSelected_List_Room,
    current_List_Room
}) => {
    const { userId } = useParams();
    const [messages, setMessages] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const chatHistoryRef = useRef(null);
    const imageInputRef = useRef(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const q = query(
                    collection(db, "messages"),
                    where("participants", "array-contains", user.uid),
                    orderBy("createdAt")
                );

                const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
                    const messageList = [];
                    snapshot.forEach((doc) => {
                        const messageObject = doc.data();
                        if (
                            messageObject &&
                            messageObject.participants &&
                            messageObject.participants.includes(userId)
                        ) {
                            messageList.push({ id: doc.id, ...messageObject });
                        }
                    });
                    setMessages(messageList);
                });

                return () => unsubscribeSnapshot();
            }
        });

        return () => unsubscribe();
    }, [userId]);

    useEffect(() => {
        const fetchUser = async () => {
            if (userId) {
                const userDocument = await getDoc(doc(db, "users", userId));
                if (userDocument.exists()) {
                    setCurrentUser(userDocument.data());
                } else {
                    console.log("function undefined!");
                }
            } else {
                console.log("userId is undefined");
            }
        };

        fetchUser();
    }, [userId]);

    const scrollToBottom = () => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    //gửi hình
    const { handleImageUpload } = useImageUpload(userId);
    //gửi tin nhắn
    const { sendMessage, newMessage, setNewMessage } = useSendMessage(userId, messages);

    const formattedDate = (dateObj) => {
        const now = new Date();
        const options = { day: 'numeric', month: 'short' };
        if (dateObj.getFullYear() !== now.getFullYear()) {
            options.year = 'numeric';
        }
        return new Intl.DateTimeFormat('default', options).format(dateObj);
    };

    // Modal
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    // Trạng thái cho việc hiển thị tất cả hình ảnh
    const [showAllImages, setShowAllImages] = useState(false);

    // Lọc danh sách tin nhắn để chỉ lấy các tin nhắn có hình ảnh
    const imageMessages = messages.filter(message => message.imageUrl);

    // Lấy danh sách hình ảnh dựa trên trạng thái hiển thị
    const displayImages = showAllImages ? imageMessages : imageMessages.slice(0, 3);

    const handleSaveMessage = (e) => {
        const userId = currentUser.uid; // ví dụ: currentUser có thể là state hoặc context chứa thông tin người dùng
        // Reference đến document người dùng trong Firestore
        const userDocRef = doc(db, "users", userId);
        updateDoc(userDocRef, {
            saveMessage: arrayUnion(messages.id) // Add the messageId to saveMessage field
        }).then(() => {
            console.log("Message saved successfully");
        }).catch((error) => {
            console.error("Error saving message: ", error);
        });


    };
    // Search bar
    const [anchorSearchBar, setAnchorSearchBar] = React.useState(null);
    const openSearchBar = Boolean(anchorSearchBar);
    const handleClickSearchBar = (event) => {
        setAnchorSearchBar(event.currentTarget);
    };
    const handleCloseSearchBar = () => {
        setAnchorSearchBar(null);
    };

    // calling
    const [anchorCall, setAnchorCall] = React.useState(null);
    const openCall = Boolean(anchorCall);
    const handleClickCall = (event) => {
        setAnchorCall(event.currentTarget);
    };
    const handleCloseCall = () => {
        setAnchorCall(null);
    };

    return (
        <>
            <Room
                currentUser={currentUser}
                messages={messages}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                sendMessage={sendMessage}
                auth={auth}
                chatHistoryRef={chatHistoryRef}
                handleImageUpload={handleImageUpload}
                imageInputRef={imageInputRef}
                formattedDate={formattedDate}
                windowWidth={windowWidth}
                handleSelected_List_Room={handleSelected_List_Room}
                current_List_Room={current_List_Room}
                Link={Link}

                Modal={Modal}
                openModal={openModal}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}

                showAllImages={showAllImages}
                setShowAllImages={setShowAllImages}
                imageMessages={imageMessages}
                displayImages={displayImages}

                MobileRoom={MobileRoom}
                scrollToBottom={scrollToBottom}

                handleSaveMessage={handleSaveMessage}

                anchorSearchBar={anchorSearchBar}
                openSearchBar={openSearchBar}
                handleClickSearchBar={handleClickSearchBar}
                handleCloseSearchBar={handleCloseSearchBar}

                anchorCall={anchorCall}
                openCall={openCall}
                handleClickCall={handleClickCall}
                handleCloseCall={handleCloseCall}
            />
        </>
    );

};

export default ChatRoom;