import {
    collection,
    doc,
    getDoc,
    onSnapshot,
    orderBy,
    query,
    where
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";

import { Link, useParams } from "react-router-dom";
import useImageUpload from "../components/hook/useImageUpload";
import useSendGroupMessage from "../components/hook/useSendGroup";
import { useDocQuery } from "../hooks/firestore";
import { auth, db } from "../server/firebase";
import ChatGroupUI from './ui/chatGroup';
const ChatGroup = ({
    windowWidth
}) => {
    const { groupId } = useParams();
    const { chatGroup, } = useDocQuery('groupChat', groupId);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((group) => {
            if (group) {
                const q = query(
                    collection(db, "messages"),
                    where("participants", "array-contains", group.uid),
                    orderBy("createdAt")
                );
                const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
                    const messageList = [];
                    snapshot.forEach((doc) => {
                        const messageObject = doc.data();
                        if (
                            messageObject &&
                            messageObject.participants &&
                            messageObject.participants.includes(groupId)
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
    }, [groupId]);
    const [messages, setMessages] = useState([]);
    const chatHistoryRef = useRef(null);
    const imageInputRef = useRef(null);
    const [group, setGroup] = useState(null);
    const [groupMembers, setGroupMembers] = useState([]);  // Thêm trạng thái mới để lưu các thành viên trong nhóm
    const sendGroupMessage = useSendGroupMessage(groupId, groupMembers);

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
                            messageObject.participants.includes(groupId)
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
    }, [groupId]);

    // Các useEffect tương tự
    // useEffect(() => {

    //     const fetchGroupMembers = async () => {
    //         const groupRef = doc(db, 'groups', groupId);
    //         const groupSnap = await getDocs(groupRef);

    //         const members = groupSnap.data().members;
    //         setGroupMembers(members);
    //     };

    //     if (groupId) {
    //         fetchGroupMembers();
    //     }
    // }, [groupId]);

    useEffect(() => {
        const fetchUser = async () => {
            if (groupId) {
                const userDocument = await getDoc(doc(db, "groupChat", groupId));
                if (userDocument.exists()) {
                    setGroupMembers(userDocument.data());
                } else {
                    console.log("function undefined!");
                }
            } else {
                console.log("userId is undefined");
            }
        };

        fetchUser();
    }, [groupId]);

    const scrollToBottom = () => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    //gửi hình
    const { handleImageUpload } = useImageUpload(groupId);
    //gửi tin nhắn
    const { sendMessage, newMessage, setNewMessage } = useSendGroupMessage(groupId, messages);

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
            <ChatGroupUI
                chatGroup={chatGroup}
                messages={messages}
                group={group}
                sendMessage={sendMessage}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                windowWidth={windowWidth}

                sendGroupMessage={sendGroupMessage}
                useImageUpload={useImageUpload}
                Link={Link}

                formattedDate={formattedDate}
                chatHistoryRef={chatHistoryRef}
                imageInputRef={imageInputRef}
                scrollToBottom={scrollToBottom}
                handleImageUpload={handleImageUpload}
            />
        </>
    );
};

export default ChatGroup;