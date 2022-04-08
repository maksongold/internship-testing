import {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const App = () => {
  const [startTime, setStartTime] = useState(0);
  const [pauseDiff, setPauseDiff] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    if (isRunning) {
      setIntervalId(window.setInterval(() => {
        setSwitchState(switchState => !switchState);
      }, 500));
    } else {
      window.clearInterval(intervalId);
    }
  }, [isRunning]);

  const onStartPauseClick = () => {
    if (isRunning) {
      setPauseDiff(Date.now() - startTime);
    } else {
      setStartTime(Date.now() - pauseDiff);
    }
    setRunning(isRunning => !isRunning);
  }

  const onStopClick = () => {
    setStartTime(0);
    setPauseDiff(0);
    setRunning(false);
  }

  return (
      <div className={'timer'}>
        <div className={'time'}>
          {!startTime ? new Date(startTime).toLocaleTimeString('EN-GB', {timeZone: 'UTC'}) :
              new Date(Date.now() - startTime).toLocaleTimeString('EN-GB', {timeZone: 'UTC'})
          }
        </div>
        <ButtonGroup className={'buttons'} variant="contained" size="large" color="success">
          <Button onClick={onStartPauseClick}>
            {isRunning ? 'Pause' : 'Start'}
          </Button>
          <Button onClick={onStopClick} disabled={!isRunning && !pauseDiff} >
            Stop
          </Button>
        </ButtonGroup>
      </div>
  )
}

export {App}
