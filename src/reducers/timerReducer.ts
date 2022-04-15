import { ActionTypes, StateTypes } from '../types/TimerReducerTypes';

export const timerReducer = (
    state: StateTypes,
    action: ActionTypes
): StateTypes => {
    switch (action.type) {
        case 'setTime':
            return { ...state, time: action.payload };
        case 'start':
            return { ...state, isRunning: true, isStarted: true };
        case 'stop':
            return { ...state, isRunning: false };
        case 'tick':
            return { ...state, time: state.time - 1 };
        case 'increasePomodoroCount':
            return { ...state, pomodoroCount: state.pomodoroCount + 1 };
        case 'setShortBreakLength':
            return { ...state, shortBreakLength: action.payload };
        case 'setLongBreakLength':
            return { ...state, longBreakLength: action.payload };
        case 'setTimerType':
            return { ...state, timerType: action.payload };
        default:
            throw new Error();
    }
};
