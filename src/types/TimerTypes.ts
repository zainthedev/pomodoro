export interface TimerProps {
    shortBreakLength: number;
    longBreakLength: number;
    isPomodoro: boolean;
    setIsPomodoro: Function;
    isShortBreak: boolean;
    setIsShortBreak: Function;
    setIsLongBreak: Function;
    increasePomodoroCount: Function;
    pomodoroCount: number;
}
