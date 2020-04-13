import React, {useState, useEffect} from 'react';

export default function TweetItemUseEffect(props){
    const [userData, setUserData] = useState({
                                                name:'No Name', 
                                                details: {test: 'alon'},
                                                email:'No Email', 
                                                password: 'No Password'});
    
    useEffect(() => {
        console.log('Component did mount/update nested');
    },[userData.details.test,userData.name]);

    useEffect(() => {
        console.log('Component did mount/update name2')

    },[userData.name]);

    return (
        <>
            <button onClick={() => setUserData({...userData, details:{test:'new test'}})}>Fill Data</button>
            <button onClick={() => setUserData({...userData, name:'Johnas'})}>Fill Name</button>
            <div>{userData.name}</div>
            <div>{userData.email}</div>
            <div>{userData.password}</div>
        </>
    )
}