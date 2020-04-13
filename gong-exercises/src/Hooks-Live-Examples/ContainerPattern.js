import React, {useState, useEffect} from 'react';

export function UserDataContainer(props){
    const [userData, setUserData] = useState({
                                                name:'No Name', 
                                                email:'No Email', 
                                                password: 'No Password'});

    useEffect(() => {
        console.log('Component did mount/update');
        
        return (() => {
            console.log('Component will unmount');
        })
    },[userData.email]);

    return (
        <>
            <button onClick={() => setUserData({name: 'Chen', email:'chen@vamos-tech.com',password:123})}>Fill Data</button>
            <button onClick={() => setUserData({...userData, name:'Johnas'})}>Fill Name</button>
            <UserDataComponent userData={userData}/>
        </>
    )
}

export function UserDataComponent(props) {
    return (
        <>
            <div>{props.userData.name}</div>
            <div>{props.userData.email}</div>
            <div>{props.userData.password}</div>
        </>
    )
}