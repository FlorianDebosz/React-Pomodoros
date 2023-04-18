import { useState } from 'react';
import './App.css';
import BottomBar from './BottomBar';
import ClassicPomodoro from './ClassicPomodoro';
import SoundContext from './SoundContext';

function App() {
    const [soundMute, setSoundMute] = useState(true);
  
    const soundAuthorization = () => {
      setSoundMute(prev => !prev);
    }

      return (
        <SoundContext.Provider value={soundMute}>
          <div className='app'>
            <ClassicPomodoro className='pomodoro' soundMute={soundMute} />
            <BottomBar soundMute={soundMute} soundAuthorization={soundAuthorization} />
          </div>
        </SoundContext.Provider>
      );
    }
    
    export default App;