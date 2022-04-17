import { useContext } from 'react';
import { AppContext, initialState } from '../contexts/AppContext';
import { renderTime } from '../helper-functions/renderTime';
import { useTimer } from '../hooks/useTimer';
import {
    TimerButtonWrapper,
    TimerButton,
    TimerResetButton,
    TimerWrapper,
    TimerTime,
    VolumeWrapper,
    VolumeText,
    VolumeIcon,
    VolumeMuteIcon,
    PomodoroImage,
    PomodoroText,
    PomodoroCount,
} from '../styled-components/Timer';

export const TimerComponent = () => {
    const { state, dispatch } = useContext(AppContext);
    const isPomodoro = state.timerType === 'pomodoro';
    const isShortBreak = state.timerType === 'shortBreak';

    useTimer(isPomodoro);

    const stopTimer = () => {
        dispatch({ type: 'stop' });
        dispatch({ type: 'setIsPaused' });
    };

    const startTimer = (time: number) => {
        dispatch({ type: 'setTime', payload: time });
        dispatch({ type: 'start' });
    };

    const startTimerPomodoro = () => {
        startTimer(initialState.time);
    };

    const startTimerShortBreak = () => {
        startTimer(state.shortBreakLength);
    };

    const startTimerLongBreak = () => {
        startTimer(state.longBreakLength);
    };

    const handleTimerButtonClick = () => {
        if (!state.isRunning) {
            startTimer(state.time);
        } else if (state.isRunning) {
            stopTimer();
        } else {
            if (isPomodoro) {
                startTimerPomodoro();
            } else if (isShortBreak) {
                startTimerShortBreak();
            } else {
                startTimerLongBreak();
            }
        }
    };

    const resetTimer = () => {
        dispatch({ type: 'reset' });
    };

    const toggleAudio = () => {
        const isMuted = !state.options.volume;
        function getVolume() {
            if (state.options.volume) {
                return state.options.volume;
            } else {
                return 1;
            }
        }
        dispatch({
            type: 'setOptions',
            payload: isMuted
                ? { ...state.options, volume: getVolume() }
                : { ...state.options, volume: 0 },
        });
    };

    return (
        <TimerWrapper>
            <VolumeWrapper onClick={toggleAudio}>
                {state.options.volume ? <VolumeIcon /> : <VolumeMuteIcon />}
                <VolumeText>
                    {Math.floor(state.options.volume * 100)}%
                </VolumeText>
            </VolumeWrapper>
            <PomodoroCount>
                <PomodoroImage />
                <PomodoroText>{state.pomodoroCount}</PomodoroText>
            </PomodoroCount>
            <TimerTime data-test='TimerTime'>
                {renderTime(state.time)}
            </TimerTime>
            <TimerButtonWrapper>
                <TimerButton
                    data-test='TimerStartButton'
                    onClick={handleTimerButtonClick}
                    isRunning={state.isRunning}
                >
                    {state.isRunning ? 'Stop' : 'Start'}
                </TimerButton>
                <TimerResetButton
                    data-test='TimerResetButton'
                    onClick={resetTimer}
                    isRunning={state.isRunning}
                >
                    Reset
                </TimerResetButton>
            </TimerButtonWrapper>
        </TimerWrapper>
    );
};
