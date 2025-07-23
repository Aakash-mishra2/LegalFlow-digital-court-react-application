import React, { createContext, useState, useEffect } from 'react';
import api from '../../api/ccmsBase';
import { useSelector } from 'react-redux';

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const userId = useSelector((state) => state.userAccount.userId);
    // Fetch notifications from the backend
    const fetchNotifications = async () => {
        try {
            const response = await api.get(`/notifications/${userId}`); // Replace with your API endpoint
            setNotifications(response.data);
            setUnreadCount(response.data.filter((notif) => !notif.read).length);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    // Mark notifications as read
    const markAsRead = () => {
        setNotifications((prev) =>
            prev.map((notif) => ({ ...notif, read: true }))
        );
        setUnreadCount(0);
    };

    useEffect(() => {
        fetchNotifications();
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    return (
        <NotificationsContext.Provider value={{ notifications, unreadCount, markAsRead, fetchNotifications }}>
            {children}
        </NotificationsContext.Provider>
    );
};
