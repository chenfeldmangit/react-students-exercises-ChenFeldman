import React from 'react';
import NewsFeedItem from './NewsFeedItem';
import PropTypes from 'prop-types';

const NewsFeedComponent = (props) => {
    return (
        <div id="newsFeed">
            {props.tweets.map((item, index) => {
                return <NewsFeedItem id={index} name={item.userName} description={item.description} />
            })}
        </div>
    )
}

NewsFeedComponent.propTypes = {
    tweets: PropTypes.array.isRequired
}

NewsFeedComponent.defaultProps = {
    tweets:[]
}

export default NewsFeedComponent;