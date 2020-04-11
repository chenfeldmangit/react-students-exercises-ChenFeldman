import React, {useState} from 'react';

export default function TweetItemUseState(props){
    const [userData, setUserData] = useState({name:'No Name', email:'No Email', password: 'No Password'});

    return (
        <>
            <button onClick={() => setUserData({name: 'Chen', email:'chen@vamos-tech.com',password:123})}>Fill Data</button>
            <button onClick={() => setUserData({...userData, name:'Johnas'})}>Fill Name</button>
            <div>{userData.name}</div>
            <div>{userData.email}</div>
            <div>{userData.password}</div>
        </>
    )
}