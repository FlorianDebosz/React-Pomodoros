import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import SoundContext from './SoundContext';

function BottomBar({ soundMute, soundAuthorization }) {

    return(
        <SoundContext.Provider value={soundMute}>
            <div className='bottomBar'>
                {
                    soundMute ?
                    <Icon className="icon-sound" icon="bx:volume-mute" onClick={soundAuthorization}/>
                    :
                    <Icon className="icon-sound" icon="bx:volume-full" onClick={soundAuthorization}/>
                }
            </div>
        </SoundContext.Provider>
    )
}

export default BottomBar;