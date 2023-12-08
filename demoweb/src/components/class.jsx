import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const ClassRoom = () =>{
    const {roomId,userName} = useParams();

    const myMeeting = async(el) =>{
        const appID = 1027761161;
        const serverSecret = "1061c88223fe06bb19995a9cf72e4824";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),userName);

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container:el,
        scenario:{
            mode:ZegoUIKitPrebuilt.VideoConference,
        },
    });
};

    return (<div className="room-page"><div 
         ref={myMeeting}
         style={{ width: '100vw', height: '100vh' }}
    /></div>);
}

export default ClassRoom;