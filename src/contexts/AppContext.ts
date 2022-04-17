import { ActionTypes, StateTypes } from '../types/TimerReducerTypes';
import { createContext } from 'react';

const pomodoroLength = 25 * 60;
const shortBreakLength = 5 * 60;
const longBreakLength = 10 * 60;

export const initialState = {
    theme: 'light',
    time: pomodoroLength,
    isRunning: false,
    isStarted: false,
    pomodoroCount: 0,
    shortBreakLength: shortBreakLength,
    longBreakLength: longBreakLength,
    timerType: 'pomodoro',
    isPaused: false,
    totalLength: pomodoroLength * 4 + shortBreakLength * 3 + longBreakLength,
    currentProgress: -100,
    options: {
        volume: 0,
    },
    isOptionsOpen: false,
};

export const AppContext = createContext<{
    state: StateTypes;
    dispatch: React.Dispatch<ActionTypes>;
}>({
    state: initialState,
    dispatch: () => {},
});
