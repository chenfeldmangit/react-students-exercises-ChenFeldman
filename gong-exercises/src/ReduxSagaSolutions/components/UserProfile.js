import React from 'react';

export default function UserProfile(props){
    
    return (
        <div id="profileContainer" className="hidden">
                    <div className="cover-image"></div>
                    <div className="personal-data-main">
                        <div className="profile-image"></div>
                        <div className="gongButton" onclick="openProfileForm()">Edit Profile</div>
                    </div>
                    <div className="personal-data-bottom">
                        <span className="about-me">
                        </span>
                        <div className="more-about-me">
                            <div className="location">
                                <img src="assets/location.svg"/>
                                <span>Tel Aviv, Israel</span>
                            </div>
                            <div className="website">
                                <img src="assets/link.svg"/>
                                <a href="https://www.chenfeldman.com">www.chenfeldman.com</a>
                            </div>
                            <div className="date-joined">
                                <img src="assets/calendar.svg"/>
                                <span>Joined July 2018</span>
                            </div>
                        </div>
                    </div>
                </div>
    )
}