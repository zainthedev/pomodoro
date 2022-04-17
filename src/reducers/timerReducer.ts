import { initialState } from '../contexts/AppContext';
import { ActionTypes, StateTypes } from '../types/TimerReducerTypes';

export const timerReducer = (
    state: StateTypes,
    action: ActionTypes
): StateTypes => {
    switch (action.type) {
        case 'setTheme':
            if (action.payload) {
                return { ...state, theme: action.payload };
            } else {
                const newTheme = state.theme === 'light' ? 'dark' : 'light';
                localStorage.setItem('theme', newTheme);
                return { ...state, theme: newTheme };
            }
        case 'setTime':
            return { ...state, time: action.payload };
        case 'start':
            return { ...state, isRunning: true, isStarted: true };
        case 'stop':
            return { ...state, isRunning: false };
        case 'tick':
            if (state.timerType === 'pomodoro') {
                return {
                    ...state,
                    time: state.time - 1,
                    currentProgress:
                        state.currentProgress + 100 / initialState.time,
                };
            } else if (state.timerType === 'shortBreak') {
                return {
                    ...state,
                    time: state.time - 1,
                    currentProgress:
                        state.currentProgress + 100 / state.shortBreakLength,
                };
            } else {
                return {
                    ...state,
                    time: state.time - 1,
                    currentProgress:
                        state.currentProgress + 100 / state.longBreakLength,
                };
            }
        case 'reset':
            if (state.timerType === 'pomodoro') {
                return {
                    ...state,
                    time: initialState.time,
                    isRunning: false,
                    currentProgress: -100,
                };
            } else if (state.timerType === 'shortBreak') {
                return {
                    ...state,
                    time: state.shortBreakLength,
                    isRunning: false,
                    currentProgress: -100,
                };
            } else {
                return {
                    ...state,
                    time: state.longBreakLength,
                    isRunning: false,
                    currentProgress: -100,
                };
            }
        case 'increasePomodoroCount':
            return { ...state, pomodoroCount: state.pomodoroCount + 1 };
        case 'setShortBreakLength':
            return { ...state, shortBreakLength: action.payload };
        case 'setLongBreakLength':
            return { ...state, longBreakLength: action.payload };
        case 'setTimerType':
            return { ...state, timerType: action.payload };
        case 'setIsPaused':
            return { ...state, isPaused: !state.isPaused };
        case 'setProgress':
            return {
                ...state,
                currentProgress: state.currentProgress + action.payload,
            };
        case 'setOptions':
            return { ...state, options: action.payload };
        case 'toggleOptions':
            return { ...state, isOptionsOpen: !state.isOptionsOpen };
        default:
            throw new Error();
    }
};
