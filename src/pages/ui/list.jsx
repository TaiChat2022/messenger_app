import React from 'react';

import "../../assets/css/custom_color.css";
const List = ({
    selectUser, handleUserClick,
    currentUser, userList,
    Link, auth, MobileList,

    windowWidth, formattedDate,
    handleSelected_List_Room, current_List_Room,

    Popover, Typography,
    anchorElGroupChat, handleClickOpenGroupChat, handleCloseGroupChat,
    openGroupChat, checkGroupChat,

    Checkbox, labelCheckBox, Button,
    groupName, setGroupName, selectedFriends, createGroupChat, handleFriendSelection,

    groupList
}) => {
    return (
        <>
            {windowWidth < 570 ? (
                <MobileList
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
            ) :
                (
                    <>
                        <div className="h-screen pt-2 overflow-auto col-span-3 custom_bg_color__100">
                            <div className="flex items-center pt-2 justify-between mb-4 px-3">
                                <p className='text-2xl font-medium custom_text_color__100 text-left px-1'>Chat</p>
                                <button
                                    aria-describedby={checkGroupChat}
                                    className="rounded-full custom_text_color__100 mb-1 px-2"
                                    variant="contained"
                                    onClick={handleClickOpenGroupChat}
                                >
                                    <i className="bi bi-pencil-square text-xl"></i>
                                </button>
                                <Popover
                                    id={checkGroupChat}
                                    open={openGroupChat}
                                    anchorEl={anchorElGroupChat}
                                    onClose={handleCloseGroupChat}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Typography
                                        className={`
                                            custom_bg_color__400 custom_text_color__100
                                            p-4
                                        `}
                                    >
                                        {userList ?
                                            (
                                                <>
                                                    <div className='grid grid-cols-2'>
                                                        <input type="text" id="first_name"
                                                            className={`
                                                                col-span-2 w-full md:w-1/2
                                                                custom_bg_color__300 custom_text_color__100
                                                                border border-gray-500 text-sm rounded-lg 
                                                                block w-full p-2.5 
                                                            `}
                                                            placeholder="Nhập tên nhóm..."
                                                            value={groupName}
                                                            onChange={(e) => setGroupName(e.target.value)}
                                                            required
                                                        />
                                                        {userList.map((user) =>
                                                            <>
                                                                <p className='flex items-center justify-end custom_text_color__100 text-sm xl:text-md'>
                                                                    {user.displayName}
                                                                    <Checkbox {...labelCheckBox}
                                                                        checked={selectedFriends.includes(user.uid)}
                                                                        onChange={() => handleFriendSelection(user.uid)}
                                                                    />
                                                                </p>
                                                            </>
                                                        )}
                                                        <Button
                                                            variant="contained"
                                                            className="col-span-2"
                                                            disableElevation
                                                            onClick={createGroupChat}
                                                        >
                                                            Tạo nhóm
                                                        </Button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <p>Không tìm thấy bạn bè trong danh sách bạn của bạn</p>
                                                </>
                                            )
                                        }
                                    </Typography>
                                </Popover>
                            </div>
                            {/* Thanh tìm kiếm */}
                            <div className="rounded overflow-hidden md:max-w-xl mx-3">
                                <div className="md:flex">
                                    <div className="w-full">
                                        <div className="relative">
                                            <i className="absolute bi bi-search custom_text_color__200 top-3 right-3 text-xs md:text-sm" />
                                            <input type="text"
                                                placeholder="Tìm kiếm"
                                                className="custom_bg_color__300 custom_text_color__100 text-xs md:text-sm h-12 w-full px-4 rounded focus:outline-none hover:cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!userList.map ?
                                (
                                    <>
                                        <div className='mt-4'>
                                            <h2 className='custom_text_color__100 text-xl text-left'>
                                                Không có tin nhắn nào
                                            </h2>
                                        </div>
                                    </>
                                ) :
                                (
                                    <>
                                        {/* Scroll bar người dùng */}
                                        <div className="overflow-x-auto flex mx-3">
                                            {userList.map((user) => {
                                                if (user.uid !== auth.currentUser?.uid) {
                                                    return (
                                                        <>
                                                            <Link to={`${user.uid}`}
                                                                onClick={() => handleUserClick(user.uid)}
                                                                className="flex-none py-2 px-1 md:px-2 first:pl-1 last:pr-1"
                                                                key={user.uid}
                                                            >
                                                                <div className='flex flex-col justify-center items-center max-w-xs min-w-xs w-24'>
                                                                    <div className='imgAndStatus relative'>
                                                                        <img className="w-14 h-14 rounded-full object-cover" src={user.photoURL} alt={user.displayName} />
                                                                        {user.isOnline ? (
                                                                            <div className="status absolute right-0 bottom-0">
                                                                                <div className="w-4 h-4 bg-green-600 border-black border-2 rounded-full border-solid"></div>
                                                                            </div>
                                                                        ) : (
                                                                            <div className="status absolute right-0 bottom-0">
                                                                                <div className="w-4 h-4 bg-red-600 border-black border-2 rounded-full border-solid"></div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <strong className="custom_text_color__100 text-xs font-medium mt-2">{user.displayName}</strong>
                                                                </div>
                                                            </Link>
                                                        </>
                                                    )
                                                }
                                                return null;
                                            })
                                            }

                                        </div>
                                        {/* Danh sách người dùng */}
                                        <ul className="mt-2 mb-0">
                                            {groupList ? (
                                                <>
                                                    {groupList.map((group) =>
                                                        <>
                                                            <Link to={`${group.uid}`} key={group.uid} className="flex flex-col"
                                                                onClick={() => handleUserClick(group.uid)}>
                                                                <li key={group.id} className={`flex items-center justify-center md:justify-start relative p-2 w-full overflow-hidden shadow hover:shadow-md mt-2
                                                                        ${selectUser === group.uid ? 'custom_bg_color__300' : 'custom_bg_color__100'}`}>
                                                                    <div className='imgAndStatus relative'>
                                                                        <img className='w-12 h-12 rounded-full object-contain'
                                                                            src={group.photoURL ?
                                                                                group.photoURL :
                                                                                `https://images.smiletemplates.com/uploads/screenshots/102/0000102793/powerpoint-template-icons-b.jpg`
                                                                            }
                                                                            alt={group.tenGroup}
                                                                        />
                                                                    </div>
                                                                    <div className="ml-3 hidden md:flex flex-col">
                                                                        <div className={`flex justify-start custom_text_color__100 `}>
                                                                            <p className='text-xs lg:text-sm text-left w-max-32 overflow-hidden'>{group.tenGroup}</p>
                                                                        </div>
                                                                        <div className="flex justify-start  custom_text_color__200">
                                                                            {group.lastMessageTime ? (
                                                                                <>
                                                                                    <time className='text-xs'>
                                                                                        {group.lastMessageTime && typeof group.lastMessageTime.toDate === "function"
                                                                                            ? group.lastMessageTime.toDate().toLocaleTimeString('VI', { hour: '2-digit', minute: '2-digit' })
                                                                                            :
                                                                                            ""}
                                                                                    </time>
                                                                                    <time className='text-xs ml-2'>
                                                                                        {group.lastMessageTime && typeof group.lastMessageTime.toDate === "function"
                                                                                            ? formattedDate(group.lastMessageTime.toDate())
                                                                                            : ""}
                                                                                    </time>
                                                                                </>
                                                                            ) : (
                                                                                <time className='text-xs'>N/A</time>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </Link>
                                                        </>
                                                    )}
                                                </>
                                            ) : (<></>)}

                                            {userList.map((user) => {
                                                if (user.uid !== auth.currentUser?.uid) {
                                                    return (
                                                        <>
                                                            <Link to={`${user.uid}`} key={user.uid} className="flex flex-col"
                                                                onClick={() => handleUserClick(user.uid)}>
                                                                <li key={user.id} className={`flex items-center justify-center md:justify-start relative p-2 w-full overflow-hidden shadow hover:shadow-md mt-2
                                                                        ${selectUser === user.uid ? 'custom_bg_color__300' : 'custom_bg_color__100'}`}>
                                                                    <div className='imgAndStatus relative'>
                                                                        <img className='w-12 h-12 rounded-full object-contain' src={user.photoURL} alt={user.displayName} />
                                                                        {user.isOnline ? (
                                                                            <div className="status absolute right-0 bottom-0">
                                                                                <div className="w-4 h-4 bg-green-600 border-black border-2 rounded-full border-solid"></div>
                                                                            </div>
                                                                        ) : (
                                                                            <div className="status absolute right-0 bottom-0">
                                                                                <div className="w-4 h-4 bg-red-600 border-black border-2 rounded-full border-solid"></div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div className="ml-3 hidden md:flex flex-col">
                                                                        <div className={`flex justify-start custom_text_color__100 `}>
                                                                            <p className='text-xs lg:text-sm text-left w-max-32 overflow-hidden'>{user.displayName}</p>
                                                                        </div>
                                                                        <div className="flex justify-start  custom_text_color__200">
                                                                            {user.lastMessageTime ? (
                                                                                <>
                                                                                    <time className='text-xs'>
                                                                                        {user.lastMessageTime && typeof user.lastMessageTime.toDate === "function"
                                                                                            ? user.lastMessageTime.toDate().toLocaleTimeString('VI', { hour: '2-digit', minute: '2-digit' })
                                                                                            :
                                                                                            ""}
                                                                                    </time>
                                                                                    <time className='text-xs ml-2'>

                                                                                        {user.lastMessageTime && typeof user.lastMessageTime.toDate === "function"
                                                                                            ? formattedDate(user.lastMessageTime.toDate())
                                                                                            : ""}
                                                                                    </time>
                                                                                </>
                                                                            ) : (
                                                                                <time className='text-xs'>N/A</time>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </Link>
                                                        </>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </ul>
                                    </>
                                )
                            }
                        </div>
                    </>
                )
            }
        </>
    );
};

export default List;