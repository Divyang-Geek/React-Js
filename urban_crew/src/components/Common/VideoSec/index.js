import { useState, useRef } from "react";
import videoSrc from "../../../assets/videos/consulting-video.mp4";

const VideoSec = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const toggleBtn = () => {
        setIsPlaying(!isPlaying);

        if(!isPlaying){
            videoRef.current.play();
        } else {
            videoRef.current.pause()
        }
    };

    return (
        <>
            <div className="main-video-sec">
                <div className="sec-wp marginX-100">
                    <div className={`video-box overflow-hidden${isPlaying ? " activeVideo" : ""}`}>
                        <video muted loop className="w-100 d-flex" id="video" ref={videoRef} onClick={toggleBtn}>
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                        {
                            !isPlaying && <div className="video-box-btn" onClick={toggleBtn}>
                            <div className="video-box-btn-inr">
                                <span className="video-box-btn--text">Play</span>
                                <span className="video-box-btn--svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.5 201.5">
                                        <path d="M100.500,0.499 C155.728,0.499 200.500,45.270 200.500,100.498 C200.500,155.726 155.728,200.498 100.500,200.498 C45.271,200.498 0.500,155.726 0.500,100.498 C0.500,45.270 45.271,0.499 100.500,0.499 Z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoSec;
