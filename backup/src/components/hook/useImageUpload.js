import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db, storage  } from "../../server/firebase";

const useImageUpload = (userId) => {
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    if (!file) return;

    const MAX_SIZE = 5 * 1024 * 1024; // 1MB
    if (file.size > MAX_SIZE) {
      alert('Dung lượng tệp quá lớn, tệp tối đa 5MB')
      console.log("Dung lượng tệp quá lớn, tệp tiêu chuẩn 5MB");
      setUploading(false);
      return;
    }

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // You can add a progress bar here to show upload progress
      },
      (error) => {
        console.log("Upload error", error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const { uid, photoURL } = auth.currentUser;
          const messageTimestamp = serverTimestamp();

          await addDoc(collection(db, "messages"), {
            imageUrl: downloadURL,  // Add imageUrl field to your message
            createdAt: messageTimestamp,
            uid,
            photoURL,
            participants: [auth.currentUser.uid, userId],
          });

          // Update last message time
          const senderDoc = doc(db, "users", uid);
          const receiverDoc = doc(db, "users", userId);
          await setDoc(senderDoc, { lastMessageTime: messageTimestamp }, { merge: true });
          await setDoc(receiverDoc, { lastMessageTime: messageTimestamp }, { merge: true });

          setUploading(false);
        });
      }
    );
  };

  return { handleImageUpload, uploading };
};

export default useImageUpload;
