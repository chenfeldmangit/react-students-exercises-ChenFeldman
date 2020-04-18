const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';

export function setNotifications(notifications) {
    return {
        type: SET_NOTIFICATIONS,
        notifications
    }
}
