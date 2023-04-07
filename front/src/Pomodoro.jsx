import React, { useState, useEffect } from "react";
import soundBell from './sound/bell.mp3';
import { Icon } from '@iconify/react';

export default function Pomodoro(){
    const [minutes,setMinutes] = useState(25);
    const [seconds,setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const bellAudio = new Audio(soundBell);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            
            if(seconds === 0) {
                if(minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }else {
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59;

                    setMinutes(minutes);
                    setSeconds(seconds);
                    setDisplayMessage(!displayMessage);
                    bellAudio.play();
                }
            }else {
                setSeconds(seconds - 1);
            }
        },1000)
    },[seconds])

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return (
        <div className="pomodoro">
            {displayMessage &&<div className="message">
                <div>Break! New session starts in :</div>
            </div>}
            <div className="timer">{timerMinutes}:{timerSeconds}</div>
            <Icon icon="bx:volume-mute" />
        </div>
    )
}