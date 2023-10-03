import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../server/firebase";
import Room from "./ui/room";
import useImageUpload from "../components/hook/useImageUpload";
import useSendMessage from "../components/hook/useSendMessage";
import {
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
    doc,
    getDoc,
} from "firebase/firestore";

const ChatRoom = () => {

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
                    console.log("Không tìm thấy user này!");
                }
            } else {
                console.log("ID người dùng không hợp lệ!");
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
                formattedDate= {formattedDate}
            />
        </>
    );

};

export default ChatRoom;