type ActionTypes =
    | { type: 'setTime'; payload: number }
    | { type: 'tick' }
    | { type: 'start' }
    | { type: 'stop' }
    | { type: 'reset' };

interface StateTypes {
    time: number;
    isRunning: boolean;
}

export const timerReducer = (
    state: StateTypes,
    action: ActionTypes
): StateTypes => {
    switch (action.type) {
        case 'setTime':
            return { ...state, time: action.payload };
        case 'start':
            return { ...state, isRunning: true };
        case 'stop':
            return { ...state, isRunning: false };
        case 'reset':
            return { isRunning: false, time: 0 };
        case 'tick':
            return { ...state, time: state.time - 1 };
        default:
            throw new Error();
    }
};
