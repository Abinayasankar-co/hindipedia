import React from "react";
import "../video/video.css";

const Video = () =>{
    return(
        <div className="container2">
            <video id="videoPlayer" width="50%" controls muted="muted" autoplay>
                    <source src="/video" type="video/mp4" />
            </video>
        </div>
    );
}

export default Video;