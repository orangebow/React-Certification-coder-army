import {useRef} from 'react';

function Video(){
    const videoRef = useRef("");

    function handleStart(){
        videoRef.current.play();
    }
    
    function handleStop(){
        videoRef.current.pause();
    }
    function handleReset(){
        videoRef.current.currentTime = 0;
    }

    return(
        <>
        <video ref={videoRef} src="/dance.mp4" width = "600" height = "400" ></video>
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </>
    )
}

export default Video;