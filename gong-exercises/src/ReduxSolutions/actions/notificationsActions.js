import { NotificationsActions } from "../common/Actions";
import TweetAPI from "../common/TweetAPI";

export function addNotification(dispatch, notification) {
    dispatch(addNotificationRequest());
    TweetAPI.addNotification(notification)
        .then(() => {
            dispatch(addNotificationSuccess(notification));
        })
        .catch(err => {
            dispatch(addNotificationFailed());
        });
}

 function addNotificationRequest() {
    return {
        type: NotificationsActions.ADD_NOTIFICATION
    }
}

 function addNotificationSuccess(notification) {
    return {
        type: NotificationsActions.ADD_NOTIFICATION_SUCCESS,
        notification
    }
}

 function addNotificationFailed() {
    return {
        type: NotificationsActions.SET_NOTIFICATIONS_FAILED,
    }
}



export function setNotifications(dispatch, notifications) {
    dispatch(setNotificationsRequest());
    TweetAPI.setNotifications(notifications)
        .then(() => {
            dispatch(setNotificationsSuccess(notifications));
        })
        .catch(err => {
            dispatch(setNotificationsFailed());
        });
}

 function setNotificationsRequest() {
    return {
        type: NotificationsActions.SET_NOTIFICATIONS
    }
}

 function setNotificationsSuccess(notifications) {
    return {
        type: NotificationsActions.SET_NOTIFICATIONS_SUCCESS,
        notifications
    }
}

 function setNotificationsFailed() {
    return {
        type: NotificationsActions.SET_NOTIFICATIONS_FAILED,
    }
}
