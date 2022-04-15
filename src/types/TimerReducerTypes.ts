export type ActionTypes =
    | { type: 'setTime'; payload: number }
    | { type: 'tick' }
    | { type: 'start' }
    | { type: 'stop' }
    | { type: 'increasePomodoroCount' }
    | { type: 'setShortBreakLength'; payload: number }
    | { type: 'setLongBreakLength'; payload: number }
    | { type: 'setTimerType'; payload: string };

export interface StateTypes {
    time: number;
    isRunning: boolean;
    isStarted: boolean;
    pomodoroCount: number;
    shortBreakLength: number;
    longBreakLength: number;
    totalLength: number;
    timerType: string;
}
