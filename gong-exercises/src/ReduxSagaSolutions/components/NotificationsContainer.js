import React from 'react';
import {connect} from 'react-redux';
import NotificationsComponent from './NotificationsComponent';

function NotificationsContainer(props) {

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

export default connect(
    mapStateToProps
)(NotificationsContainer);
