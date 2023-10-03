import React,{useState} from 'react';
import InBox from './ui/inBox'
const Chat_inbox = () => {
    const [currentInbox, setCurrentInbox] = useState('show_coTheBiet');
    const [Inbox_list, setInbox_list] = useState({
        show_coTheBiet: true,
        show_spam: false,
    });
    // Rest các modal khi chọn option left
    const resetInbox = () => {
        setInbox_list({
            show_coTheBiet: false,
            show_spam: false,
        });
    };
    const handleInbox = (select_inbox) => {
        resetInbox(); // Đặt lại tất cả các modal
        setInbox_list((prevState) => ({
            ...prevState,
            [select_inbox]: true, 
        }));
        setCurrentInbox(select_inbox); 
    };
    return (
        <>
            <InBox
                currentInbox ={currentInbox}
                handleInbox = {handleInbox}
            />
        </>
    );
};

export default Chat_inbox;