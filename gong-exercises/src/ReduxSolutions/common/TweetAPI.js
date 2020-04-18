
export default class TweetAPI {
    static getTweets = () => {
        return new Promise((resolve, reject) => {
            try {
                let tweetsData = localStorage.getItem('tweets');
                resolve(tweetsData ? JSON.parse(tweetsData).reverse() : []);
            }
            catch (err) {
                reject(err);
            }
        })
    }

    static getNotifications = () => {
        return new Promise((resolve, reject) => {
            try {
                let notificationsData = localStorage.getItem('notifications');
                resolve(notificationsData ? JSON.parse(notificationsData).reverse() : []);
            }
            catch (err) {
                reject(err);
            }
        })
    }

    static addNotification = (notificationData) => {
        return new Promise((resolve, reject) => {
            try {
                let notificationsData = JSON.parse(localStorage.getItem('tweets'));
                localStorage.setItem('notifications',JSON.stringify(notificationsData !== null ? 
                                                [...notificationsData,{id: notificationsData.length, ...notificationData}] : [{id: 0, ...notificationData}]));
                resolve('success');
            }
            catch (err) {
                reject(err);
            }
        })
    }

    static addTweet = (tweetData) => {
        return new Promise((resolve, reject) => {
            try {
                let tweetsData = JSON.parse(localStorage.getItem('tweets'));
                localStorage.setItem('tweets',JSON.stringify(tweetsData !== null ? 
                                                [...tweetsData,{id: tweetsData.length, ...tweetData}] : [{id: 0, ...tweetData}]));
                resolve('success');
            }
            catch (err) {
                reject(err);
            }
        })
    }

    static likeTweet = (tweetId) => {
        return new Promise((resolve, reject) => {
            try {
                let tweetsData = JSON.parse(localStorage.getItem('tweets'));
                tweetsData.map(item =>{
                    if (item.id === parseInt(tweetId)){
                        item.like = true;
                    }
                })
                localStorage.setItem('tweets',JSON.stringify(tweetsData));
                resolve('success');
            }
            catch (err) {
                reject(err);
            }
        })
    }
}