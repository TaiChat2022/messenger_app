import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {useState} from "react";
import {auth, db} from "../../server/firebase";

const useSendGroupMessage = (groupId, groupMembers) => {
  // You have to know group id and members
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    const {uid, photoURL} = auth.currentUser;
    const messageTimestamp = serverTimestamp();

    // Save the message in a group-specific collection
    await addDoc(collection(db, "groupMessages", groupId), {
      // you might need to adjust this depending on how you want to structure your data
      text: newMessage,
      createdAt: messageTimestamp,
      uid,
      photoURL,
      participants: groupMembers, // assuming this is an array of all member UIDs in the group
    });

    // update lastMessageTime for each group member
    for (let i = 0; i < groupMembers.length; i++) {
      const userDoc = doc(db, "users", groupMembers[i]);
      await setDoc(userDoc, {lastMessageTime: messageTimestamp}, {merge: true});
    }

    setNewMessage("");
  };

  return {sendMessage, newMessage, setNewMessage};
};

export default useSendGroupMessage;
