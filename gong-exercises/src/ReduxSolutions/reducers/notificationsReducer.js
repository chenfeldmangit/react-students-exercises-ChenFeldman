
const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';

const initialState = [];

export default function notificationsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NOTIFICATIONS:
            return [...action.notifications];
        default:
            return state;
    }
}