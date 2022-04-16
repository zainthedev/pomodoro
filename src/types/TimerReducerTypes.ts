export type ActionTypes =
    | { type: 'setTime'; payload: number }
    | { type: 'tick' }
    | { type: 'start' }
    | { type: 'stop' }
    | { type: 'reset' }
    | { type: 'increasePomodoroCount' }
    | { type: 'setShortBreakLength'; payload: number }
    | { type: 'setLongBreakLength'; payload: number }
    | { type: 'setTimerType'; payload: string }
    | { type: 'setIsPaused' }
    | { type: 'setProgress'; payload: number }
    | { type: 'setOptions'; payload: OptionTypes };

export interface OptionTypes {
    volume: number;
}
export interface StateTypes {
    time: number;
    isRunning: boolean;
    isStarted: boolean;
    pomodoroCount: number;
    shortBreakLength: number;
    longBreakLength: number;
    totalLength: number;
    timerType: string;
    isPaused: boolean;
    currentProgress: number;
    options: OptionTypes;
}
