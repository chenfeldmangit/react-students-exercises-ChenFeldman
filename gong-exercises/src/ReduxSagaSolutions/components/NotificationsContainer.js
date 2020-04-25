import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import TweetAPI from '../common/TweetAPI';
import NotificationsComponent from './NotificationsComponent';
import { setNotifications } from '../actions/notificationsActions';

function NotificationsContainer(props) {

    useEffect(() => {
        const getNotifications = async () => {
            const notifications = await TweetAPI.getNotifications();
            props.setNotifications(notifications);
        }
        getNotifications();
    }, [])
    return (
        <div id="newsFeedWrapper">
            <NotificationsComponent notifications={props.notifications} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNotifications: notifications => setNotifications(dispatch,notifications)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationsContainer);
