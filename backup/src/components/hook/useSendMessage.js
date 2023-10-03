import { useState } from "react";
import {serverTimestamp, addDoc, collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { auth, db  } from "../../server/firebase";

const useSendMessage = (userId, messages) => {
  const [newMessage, setNewMessage] = useState("");
  const deleteMessage = async () => {
    if (messages.length > 0) {
      const lastMessageId = messages[messages.length - 1].id;
      await deleteDoc(doc(db, "messages", lastMessageId));
    }
  };

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    if (newMessage.trim() === "/delete") {
      deleteMessage();
      setNewMessage("");
      return;
    }
    if (!auth.currentUser) {
      console.error('User not authenticated!');
      return;
    }
    const { uid, photoURL } = auth.currentUser;
    const messageTimestamp = serverTimestamp();

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      createdAt: messageTimestamp,
      uid,
      photoURL,
      participants: [auth.currentUser.uid, userId],
    });

    const senderDoc = doc(db, "users", uid);
    const receiverDoc = doc(db, "users", userId);
    await setDoc(senderDoc, { lastMessageTime: messageTimestamp }, { merge: true });
    await setDoc(receiverDoc, { lastMessageTime: messageTimestamp }, { merge: true });

    setNewMessage("");
  };

  return { sendMessage, newMessage, setNewMessage };
};

export default useSendMessage;
