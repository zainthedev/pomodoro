import { ActionTypes, StateTypes } from '../types/TimerReducerTypes';
import { createContext } from 'react';

export const initialState = {
    time: 3,
    isRunning: false,
    isStarted: false,
    pomodoroCount: 0,
    shortBreakLength: 3,
    longBreakLength: 5,
    timerType: 'pomodoro',
    totalLength: 3 * 4 + 3 * 3 + 5,
};

export const AppContext = createContext<{
    state: StateTypes;
    dispatch: React.Dispatch<ActionTypes>;
}>({
    state: initialState,
    dispatch: () => {},
});
