import { ActionTypes, StateTypes } from '../types/TimerReducerTypes';
import { createContext } from 'react';

const pomodoroLength = 3;
const shortBreakLength = 1;
const longBreakLength = 2;

export const initialState = {
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
};

export const AppContext = createContext<{
    state: StateTypes;
    dispatch: React.Dispatch<ActionTypes>;
}>({
    state: initialState,
    dispatch: () => {},
});
