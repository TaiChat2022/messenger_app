import React, { useEffect, useState } from 'react';
import Menu from './ui/menu';
import { Link } from 'react-router-dom';
import { auth, firestore } from '../server/firebase';
import Chung from './modal_list/chung';
import GiaoDien from './modal_list/giaoDien';
import ThongBao from './modal_list/thongBao';
import TrangThai from './modal_list/trangThai';

const ChatMenu = ({
    currentMenu,
    selectedMenu,
    resetMenus,
    handleMenuClick,
    selectedTheme,
    handleThemeChange
}) => {
    const [user, setUser] = useState(null);
    const [currentModal, setCurrentModal] = useState('show_chung'); // Thêm state cho modal hiện tại
    const [modal_list, setModal_list] = useState({
        show_chung: true,
        show_giaoDien: false,
        show_thongBao: false,
        show_trangThai: false,
    });
    // Rest các modal khi chọn option left
    const resetModals = () => {
        setModal_list({
            show_chung: false,
            show_giaoDien: false,
            show_thongBao: false,
            show_trangThai: false,
        });
    };
    const handleModalList = (list_modal) => {
        resetModals(); // Đặt lại tất cả các modal
        setModal_list((prevState) => ({
            ...prevState,
            [list_modal]: true, // Hiển thị modal tương ứng
        }));
        setCurrentModal(list_modal); // Cập nhật modal hiện tại
    };
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);
    const signOut = async () => {
        try {
            // Update the user's Firestore document to set isOnline to false
            if (user) {
                await firestore.collection('users').doc(user.uid).update({ isOnline: false });
            }
            // Sign out the user
            await auth.signOut();

            alert('Đăng xuất thành công!');
            // Thực hiện chuyển trang sau khi đăng xuất
            window.location.href = '/';
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    return (
        <>
            <Menu
                currentMenu = {currentMenu}
                selectedMenu = {selectedMenu}
                resetMenus = {resetMenus}
                handleMenuClick = {handleMenuClick}
                Link = {Link}
                currentModal = {currentModal}
                user = {user}
                modal_list = {modal_list}
                signOut = {signOut}
                handleModalList = {handleModalList}
                Chung ={Chung}
                GiaoDien= {GiaoDien}
                ThongBao={ThongBao}
                TrangThai ={TrangThai}

                selectedTheme = {selectedTheme}
                handleThemeChange = {handleThemeChange}
            />
        </>
    );
};

export default ChatMenu;