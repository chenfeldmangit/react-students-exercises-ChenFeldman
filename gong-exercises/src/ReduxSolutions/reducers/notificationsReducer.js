import { NotificationsActions } from "../common/Actions";

const initialState = [];

export default function notificationsReducer(state = initialState, action) {
    switch (action.type) {
        case NotificationsActions.SET_NOTIFICATIONS:
            return [...action.notifications];
        default:
            return state;
    }
}