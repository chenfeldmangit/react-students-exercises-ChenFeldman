import { NotificationsActions } from "../common/Actions";

const initialState = [];

export default function notificationsReducer(state = initialState, action) {
    switch (action.type) {
        case NotificationsActions.SET_NOTIFICATIONS_SUCCESS:
            return [...action.notifications];
        case NotificationsActions.ADD_NOTIFICATION_SUCCESS:
            debugger;
            return [...state,action.notification];
        default:
            return state;
    }
}