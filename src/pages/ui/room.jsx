import "../../assets/css/custom_color.css";
import React from 'react';

const Room = ({
    currentUser, messages, 
    newMessage, setNewMessage, sendMessage,  
    auth, chatHistoryRef,
    handleImageUpload, imageInputRef,
    formattedDate
}) => {
    // console.log(messages); 
    return (
        <>
            {/* chat box */}
            <div className="w-auto border-l border-gray-800 h-screen col-span-9 flex flex-col rounded-r-lg shadow-md custom_bg_color__100">
                <div className="flex items-center justify-between border-b border-gray-800 p-2">
                    {/* user info */}
                    <div className="flex items-center">
                        <img className="rounded-full w-10 h-10 object-cover" src={currentUser? currentUser.photoURL: ''} />
                        <div className="pl-2">
                            <div className="font-semibold custom_text_color__100">
                                <a className="hover:underline" href="#">{currentUser? currentUser.displayName: ''}</a>
                            </div>
                            <div className="text-xs custom_text_color__300 flex items-center">
                                {currentUser?.isOnline ?
                                    (
                                        <>
                                            <div className="w-4 h-4 bg-green-600 border-black border-2 rounded-full border-solid"></div>
                                            <p className="ml-2">Online</p>
                                        </>
                                    ):(
                                        <>
                                            <div className="w-4 h-4 bg-red-600 border-black border-2 rounded-full border-solid"></div>
                                            <p className="ml-2">Offline</p>
                                        </>
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                    {/* end user info */}
                    {/* chat box action */}
                    <div className="custom_text_color__100">
                        <a className="inline-flex hover:bg-indigo-50 rounded-full p-2 cursor-pointer" type="button">
                            <i className="bi bi-telephone-fill text-2xl"></i>
                        </a>
                        <a className="inline-flex hover:bg-indigo-50 rounded-full p-2 cursor-pointer" type="button">
                            <i className="bi bi-camera-video-fill text-2xl"></i>
                        </a>
                        <a className="inline-flex hover:bg-indigo-50 rounded-full p-2 cursor-pointer" type="button">
                            <i className="bi bi-search text-2xl"></i>
                        </a>
                        <a className="inline-flex hover:bg-indigo-50 rounded-full p-2 cursor-pointer" type="button">
                            <i className="bi bi-three-dots text-2xl"></i>
                        </a>
                    </div>
                    {/* end chat box action */}
                </div>
                <div className="flex-1  py-4 overflow-y-auto">
                    {/* chat message */}
                    <div className="flex-none flex-col items-center flex-row-reverse justify-between mb-4 custom_text_color__200" ref={chatHistoryRef}>
                        {messages.map((message, index)=>{
                            const currentDate = message.createdAt && typeof message.createdAt.toDate === "function"
                            ? formattedDate(message.createdAt.toDate())
                            : null;

                            const prevMessage = index > 0 ? messages[index - 1] : null;
                            const prevDate = prevMessage && typeof prevMessage.createdAt.toDate === "function"
                            ? formattedDate(prevMessage.createdAt.toDate())
                            : null;
                            return (
                                <div key={index}>
                                    {(index === 0 || currentDate !== prevDate) && (
                                        <div className="flex flex-col items-center py-3">
                                            {currentDate}
                                        </div>
                                    )}
                                    {message.uid === auth.currentUser?.uid ?(
                                        <>                                       
                                            <div className='flex flex-col items-end mr-4 ml-16'>
                                                <div className={`
                                                    bg-blue-700 p-4 rounded-lg mb-1 relative text-left text-white
                                                `}>
                                                    <div>
                                                        {message.text}
                                                        {message.imageUrl && <img width={300} height={300} src={message.imageUrl} alt="Message" />}
                                                    </div>
                                                </div>
                                                <div className="flex items-center mr-1">
                                                    {message.createdAt && typeof message.createdAt.toDate === "function"
                                                        ? message.createdAt.toDate().toLocaleTimeString('VI', { hour: '2-digit', minute: '2-digit' })
                                                        : 
                                                    ""}
                                                </div>
                                            </div>
                                        </>
                                    )
                                    :(
                                        <>
                                            <div className='flex flex-col items-start ml-4 mr-16'>
                                            
                                                <div className={`
                                                    custom_bg_color__300 p-4 rounded-lg 
                                                    mb-1 relative max-w-lg text-left
                                                `}>
                                                    <div>
                                                        {message.text}
                                                        {message.imageUrl && <img width={300} height={300} src={message.imageUrl} alt="Message" />}
                                                    </div>                  
                                                </div>
                                                <div className="flex items-center ml-1">
                                                    {message.createdAt && typeof message.createdAt.toDate === "function"
                                                        ? message.createdAt.toDate().toLocaleTimeString('VI', { hour: '2-digit', minute: '2-digit' })
                                                        : 
                                                    ""}
                                                </div>
                                            </div>
                                        </>      
                                    )} 
                                </div>
                            )
                        })}
                    </div>
                    {/* end chat message */}
                </div>

                <div className="flex items-center border-t border-gray-800 p-2">
                    {/* chat input img action */}
                    <div className="custom_text_color__100">
                        <button className="inline-flex hover:bg-indigo-50 rounded-full p-2" type="button">
                            <input type="file" onChange={handleImageUpload} style={{ display: 'none' }} ref={imageInputRef} />
                            <span className="icon-chat" onClick={() => imageInputRef.current.click()}>
                                <i className="bi bi-image text-2xl"></i>
                            </span>
                        </button>
                    </div>
                    {/* end chat input action */}
                    <div className="w-full mx-2">
                        <input className="w-full px-4 h-10 custom_bg_color__200 custom_text_color__100 rounded-lg border border-gray-800" 
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    sendMessage();
                                }
                            }}
                            type="text"
                            placeholder={`Aa Tổ hợp Windows kết hợp " ; " để sử dụng icon `}
                            autofocus 
                        />
                    </div>
                    {/* chat send action */}
                    <div className="custom_text_color__100">
                        <button className="inline-flex hover:bg-indigo-50 rounded-full p-2" type="button" onClick={sendMessage}>
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-send-fill  w-6 h-6" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                            </svg>
                        </button>
                    </div>
                    {/* end chat send action */}
                </div>
            </div>
            {/* end chat box */}
        </>
    );
};

export default Room;