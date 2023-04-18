import React, { useState, useEffect, useContext } from 'react';
import SoundContext from './SoundContext';
import BellSound from './sound/bell.mp3';

function ClassicPomodoro(){
    const [minutes,setMinutes] = useState(24);
    const [seconds,setSeconds] = useState(59);
    const [displayMessage, setDisplayMessage] = useState(false);

    const soundMute = useContext(SoundContext);
    const audioBell = new Audio(BellSound);

    useEffect(() => {
        console.log('pomodoro', soundMute);
    }, [soundMute]);
    
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
                    //verifier valeur 
                    if(!soundMute)
                        audioBell.play();  
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
        </div>
    )
}

export default ClassicPomodoro;