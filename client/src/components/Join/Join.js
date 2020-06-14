import React,{useState} from 'react'

import {Link} from 'react-router-dom'

import './Join.css';


const Join = () =>{

    const [name,setName]=useState('');
    const [room,setRoom]=useState('');

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <label htmlFor="username" className="label">User Name :-</label>
                    <input id="username" placeholder="username" className="joinInput" type="text" onChange={(event)=>setName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="roomname" className="label">Room ID:-</label>
                    <input id="roomName"placeholder="room id" className="joinInput mt-20" type="text" onChange={(event)=>setRoom(event.target.value)} />
                </div>
                <Link onClick={event =>(!name || !room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20">Sign In</button>
                </Link>
                <a href="https://github.com/KUSHAD" className="link mt-20">developed by Kushad</a>
            </div>
        </div>
    )
}

export default Join

{

    /**
     *   ><br><br>

     */
}