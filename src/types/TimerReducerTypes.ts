export type ActionTypes =
    | { type: 'setTheme'; payload?: string }
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
    | { type: 'setOptions'; payload: OptionTypes }
    | { type: 'toggleOptions' };

export interface OptionTypes {
    volume: number;
}
export interface StateTypes {
    theme: string;
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
    isOptionsOpen: boolean;
}
