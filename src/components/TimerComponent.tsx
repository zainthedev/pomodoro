import { useState, useEffect, useContext } from 'react';
import { AppContext, initialState } from '../contexts/AppContext';
import { renderTime } from '../helper-functions/renderTime';
import { useTimer } from '../hooks/useTimer';
import {
    TimerButtonWrapper,
    TimerButton,
    TimerResetButton,
    TimerWrapper,
    TimerTime,
} from '../styled-components/Timer';

export const TimerComponent = () => {
    const { state, dispatch } = useContext(AppContext);
    const isPomodoro = state.timerType === 'pomodoro';
    const isShortBreak = state.timerType === 'shortBreak';

    useTimer(isPomodoro);

    const stopTimer = () => {
        dispatch({ type: 'stop' });
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
        if (isPomodoro) {
            dispatch({ type: 'setTime', payload: initialState.time });
        } else if (isShortBreak) {
            dispatch({ type: 'setTime', payload: state.shortBreakLength });
        } else {
            dispatch({ type: 'setTime', payload: state.longBreakLength });
        }
        dispatch({ type: 'stop' });
    };

    return (
        <TimerWrapper>
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
