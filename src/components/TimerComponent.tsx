import { useState, useEffect, useReducer } from 'react';
import { renderTime } from '../helper-functions/renderTime';
import {
    TimerButtonWrapper,
    TimerButton,
    TimerResetButton,
    TimerWrapper,
    TimerTime,
} from '../styled-components/Timer';
import { TimerProps } from '../types/TimerTypes';
import { timerReducer } from '../reducers/timerReducer';

export const TimerComponent = ({
    shortBreakLength,
    longBreakLength,
    increasePomodoroCount,
    isPomodoro,
    setIsPomodoro,
    isShortBreak,
    setIsShortBreak,
    setIsLongBreak,
    pomodoroCount,
}: TimerProps) => {
    const initialState = { time: 3, isRunning: false };
    const [state, dispatch] = useReducer(timerReducer, initialState);
    const [isStarted, setIsStarted] = useState(false);
    const [totalLength, setTotalLength] = useState(0);

    useEffect(() => {
        if (state.isRunning && state.time > 0) {
            const interval = setInterval(() => {
                dispatch({ type: 'tick' });
            }, 1000);
            return () => clearInterval(interval);
        }
    });

    useEffect(() => {
        // Create an interval to count down the timer
        // If there's time remaining, count down
        if (isStarted && state.time === 0) {
            // Increase the total number of intervals. If the total number is odd (ie. a pomodoro has been completed), increase the total pomodoro count
            dispatch({ type: 'stop' });

            if (isPomodoro) {
                increasePomodoroCount();

                // If a multiple of 4 pomodoros haven't been completed, take a short break
                if (pomodoroCount + 1 < 4 || (pomodoroCount + 1) % 4) {
                    setIsShortBreak(true);
                    setIsPomodoro(false);
                    setIsLongBreak(false);

                    setTimeout(() => {
                        dispatch({
                            type: 'setTime',
                            payload: shortBreakLength,
                        });
                    }, 1000);

                    // if (options.isAutoStart) {
                    // const interval = setInterval(() => {
                    //     startTimerShortBreak();
                    // }, 1000);
                    // return () => clearInterval(interval);
                    // }
                } else {
                    // If 4 pomodoros have been completed, take a long break
                    setIsLongBreak(true);
                    setIsShortBreak(false);
                    setIsPomodoro(false);
                    setTimeout(() => {
                        dispatch({ type: 'setTime', payload: longBreakLength });
                    }, 1000);
                    // if (options.isAutoStart) {
                    // const interval = setInterval(() => {
                    //     startTimerLongBreak();
                    // }, 1000);
                    // return () => clearInterval(interval);
                    // }
                }
            } else {
                setIsPomodoro(true);
                setIsLongBreak(false);
                setIsShortBreak(false);
                // if (options.isAutoStart) {

                // const interval = setInterval(() => {
                // startTimerPomodoro();
                // }, 1000);
                // return () => clearInterval(interval);
                // }
                setTimeout(() => {
                    dispatch({ type: 'setTime', payload: initialState.time });
                }, 1000);
            }

            // if (!options.isAutoStart) {
            // }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.time]);

    useEffect(() => {
        const newTotalLength =
            initialState.time * 4 + shortBreakLength * 3 + longBreakLength;
        setTotalLength(newTotalLength);
    }, [initialState.time, shortBreakLength, longBreakLength]);

    const stopTimer = () => {
        if (state.isRunning) {
            dispatch({ type: 'stop' });
        }
    };

    const startTimer = (time: number) => {
        if (
            !state.isRunning
            // || (
            // options.isAutoStart && isStarted)
        ) {
            dispatch({ type: 'setTime', payload: time });
            dispatch({ type: 'start' });
        }
    };

    const startTimerPomodoro = () => {
        startTimer(initialState.time);

        if (!isStarted) {
            setIsStarted(true);
        }
    };

    const startTimerShortBreak = () => {
        startTimer(shortBreakLength);
    };

    const startTimerLongBreak = () => {
        startTimer(longBreakLength);
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
            dispatch({ type: 'setTime', payload: shortBreakLength });
        } else {
            dispatch({ type: 'setTime', payload: longBreakLength });
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
