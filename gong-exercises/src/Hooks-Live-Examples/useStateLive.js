import React, {useState} from 'react';

export default function TweetItemUseState(props){
    debugger;
    const [userData, setUserData] = useState({name:'No Name', email:'No Email', password: 'No Password'});

    const sayHello = () => {
        alert(`Hello ${userData.name}`);
    }

    return (
        <>
            <button onClick={() => setUserData({name: 'Chen', email:'chen@vamos-tech.com',password:123})}>Fill Data</button>
            <button onClick={() => setUserData({...userData, name:'Johnas'})}>Fill Name</button>
            <button onClick={sayHello}>Hello</button>
            <div>{userData.name}</div>
            <div>{userData.email}</div>
            <div>{userData.password}</div>
        </>
    )
}