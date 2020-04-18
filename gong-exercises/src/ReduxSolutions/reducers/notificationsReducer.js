
const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';

const initialState = [];

export default function notificationsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NOTIFICATIONS:
            let notifications = [...state];
            notifications = notifications.concat(action.notifications);
            return notifications;
        default:
            return state;
    }
}