import React, {useState, useEffect} from 'react';

export default function TweetItemUseEffect(props){
    const [userData, setUserData] = useState({
                                                name:'No Name', 
                                                email:'No Email', 
                                                password: 'No Password'});

    if (userData){
    useEffect(() => {
        console.log('Component did mount/update')

        return (() => {
            console.log('Component will unmount');
        })
    },[userData.email]);
    }
    
    useEffect(() => {
        console.log('Component did mount/update name')

        return (() => {
            console.log('Component will unmount name');
        })
    },[userData.name]);

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