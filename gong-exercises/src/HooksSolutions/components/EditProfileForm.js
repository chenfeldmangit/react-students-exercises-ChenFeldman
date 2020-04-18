import React from 'react';


export default function EditProfileForm(props) {

    return (
        <div id="overlay" onclick="closeProfileForm(event)">
            <form id="editProfileForm" onsubmit="return false">
                <div>
                    <label>Name</label>
                    <input id="userName" type="text" value="test" onchange="checkLimit(10)" required />
                </div>
                <div>
                    <label>Description</label>
                    <textarea id="userDescription" required></textarea>
                </div>
                <div id="saveUserData" class="gongButton" onclick="saveUserData()">Save</div>
            </form>
        </div>
    )
}