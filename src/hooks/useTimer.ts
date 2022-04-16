import { useEffect, useContext } from 'react';
import { AppContext, initialState } from '../contexts/AppContext';

export const useTimer = (isPomodoro: boolean) => {
    const { state, dispatch } = useContext(AppContext);
    const alarmPomodoro = new Audio(require('../assets/sounds/bell_1.mp3'));
    const alarmBreak = new Audio(require('../assets/sounds/bell_2.mp3'));

    function playAudio(audio: HTMLAudioElement) {
        audio.volume = state.options.volume;
        audio.play();
    }

    // Tick the timer down every second
    useEffect(() => {
        if (state.isRunning && state.time > 0) {
            const interval = setInterval(() => {
                dispatch({ type: 'tick' });
            }, 1000);
            return () => clearInterval(interval);
        }
    });

    // If there's time remaining, count down
    useEffect(() => {
        if (state.isStarted && !state.time) {
            // Increase the total number of intervals. If the total number is odd (ie. a pomodoro has been completed), increase the total pomodoro count

            if (isPomodoro) {
                dispatch({ type: 'increasePomodoroCount' });
                playAudio(alarmPomodoro);

                // If a multiple of 4 pomodoros haven't been completed, take a short break
                if (
                    state.pomodoroCount + 1 < 4 ||
                    (state.pomodoroCount + 1) % 4
                ) {
                    dispatch({
                        type: 'setTimerType',
                        payload: 'shortBreak',
                    });

                    setTimeout(() => {
                        dispatch({
                            type: 'setTime',
                            payload: state.shortBreakLength,
                        });
                        dispatch({ type: 'stop' });
                    }, 1000);

                    // if (options.isAutoStart) {
                    // const interval = setInterval(() => {
                    //     startTimerShortBreak();
                    // }, 1000);
                    // return () => clearInterval(interval);
                    // }
                } else {
                    // If 4 pomodoros have been completed, take a long break
                    dispatch({
                        type: 'setTimerType',
                        payload: 'longBreak',
                    });
                    setTimeout(() => {
                        dispatch({
                            type: 'setTime',
                            payload: state.longBreakLength,
                        });
                        dispatch({ type: 'stop' });
                    }, 1000);
                    // if (options.isAutoStart) {
                    // const interval = setInterval(() => {
                    //     startTimerLongBreak();
                    // }, 1000);
                    // return () => clearInterval(interval);
                    // }
                }
            } else {
                dispatch({
                    type: 'setTimerType',
                    payload: 'pomodoro',
                });
                playAudio(alarmBreak);

                // if (options.isAutoStart) {

                // const interval = setInterval(() => {
                // startTimerPomodoro();
                // }, 1000);
                // return () => clearInterval(interval);
                // }
                setTimeout(() => {
                    dispatch({ type: 'setTime', payload: initialState.time });
                    dispatch({ type: 'stop' });
                }, 1000);
            }

            if (state.isPaused) {
                dispatch({ type: 'setIsPaused' });
            }

            // if (!options.isAutoStart) {
            // }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.time]);
};
