import React, { useState } from "react";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { useParams,useNavigate } from "react-router-dom";



const RoomPage = () =>{
    const [roomCode,setRoomCode] = useState('');
    const[roomUser,setRoomUser] = useState('');
    const navigate = useNavigate();
   
    const handleCodeSubmit = (ev) =>{
        navigate(`/room/${roomCode}/${roomUser}`);
    };


    return(
        <div className="home-page">
            <form className="form" onSubmit={handleCodeSubmit}>
                <div>
                    <label>Enter Room code</label>
                    <input  value={roomCode} onChange={(e)=>setRoomCode(e.target.value)} type="text" required placeholder="Enter Room code"/>
                    <label>Username</label>
                    <input value={roomUser} onChange={(e)=>setRoomUser(e.target.value)} type="text" required placeholder="Enter UserName"/>
                </div>
                <button type="submit">Enter Room</button>
            </form>
        </div>
    )
    
    
}
 // generate Kit Token
 //const appID = 1027761161;
 //const serverSecret = "1061c88223fe06bb19995a9cf72e4824";
 
 export default RoomPage;