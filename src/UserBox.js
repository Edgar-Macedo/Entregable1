import React, { useState } from 'react';
import users from './users.json';
import './App.css';

const UserBox = () => {

    let randNumb = Math.floor(Math.random() * users.length);
    const[index, setIndex] = useState(randNumb)
    let arrayLength = users.length 


    const changeUSer = () => {
        let randNumb = Math.floor(Math.random() * users.length);
        let indexNumber = parseInt(randNumb);
        setIndex(indexNumber)
    }

    return (
        <div className='userContainer'> 
            <h1> {users[index].name.title} {users[index].name.first} {users[index].name.last} </h1>
            <img src={users[index].picture.large} alt="Picture-large" />
            <div className="info">
                <div><i className='<i class="fa-solid fa-envelope"></i>'></i> {users[index].email} </div>
            </div>
            <button onClick={changeUSer} className = "changeUser">
                Change User
            </button>
        </div>
    );
};

export default UserBox;