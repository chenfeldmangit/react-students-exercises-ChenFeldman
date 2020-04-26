import { NotificationsActions } from "../common/Actions";

export function setNotifications(dispatch) {
    dispatch(setNotificationsRequest());
}

function setNotificationsRequest() {
    return {
        type: NotificationsActions.SET_NOTIFICATIONS
    }
}