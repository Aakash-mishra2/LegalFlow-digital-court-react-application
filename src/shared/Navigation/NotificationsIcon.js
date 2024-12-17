import React, { useContext, useState } from 'react';
import { NotificationsContext } from '../contexts/NotificationsContext';
import { AiOutlineBell } from 'react-icons/ai';

const NotificationsIcon = () => {
    const { unreadCount, markAsRead, notifications } = useContext(NotificationsContext);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => {
        setShowDropdown((prev) => !prev); // Toggle dropdown visibility
        if (!showDropdown) {
            markAsRead(); // Mark notifications as read when opening dropdown
        }
    };

    return (
        <div className='relative cursor-pointer' onClick={handleClick}>
            <AiOutlineBell className="text-white text-2xl hover:text-[#5889d8]" />
            {unreadCount > 0 && (
                <span
                    className={`absolute -top-2 -right-2 font-bold bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs transition-transform ${showDropdown ? '' : 'animate-bounce'
                        }`}
                >
                    {unreadCount}
                </span>
            )}
            {/* Simple dropdown to display notifications */}
            {showDropdown && notifications.length > 0 && (
                <div className="absolute rounded-sm top-8 right-0 bg-white shadow-md w-64 z-10">
                    {notifications.map((notif, index) => (
                        <div key={index} className="p-3 border-b border-gray-200">
                            <p className="text-xs font-semibold text-gray-700">{notif.message}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NotificationsIcon;