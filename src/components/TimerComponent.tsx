import { useState, useEffect } from 'react';
import { renderTime } from '../helper-functions/renderTime';
import {
    TimerButtonWrapper,
    TimerResetButton,
    TimerStartButton,
    TimerStopButton,
    TimerTime,
    TimerWrapper,
} from '../styled-components/Timer';
import { TimerProps } from '../types/TimerTypes';

export const TimerComponent = ({
    shortBreakLength,
    longBreakLength,
    increasePomodoroCount,
    isPomodoro,
    setIsPomodoro,
    isShortBreak,
    setIsShortBreak,
    setIsLongBreak,
    pomodoroCount,
}: TimerProps) => {
    let pomodoroLength = 3;
    const [timeRemaining, setTimeRemaining] = useState(pomodoroLength);
    const [isStarted, setIsStarted] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isTimerRunning && timeRemaining > 0) {
            const interval = setInterval(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    });

    useEffect(() => {
        // Create an interval to count down the timer
        // If there's time reamining, count down
        if (isStarted && timeRemaining === 0) {
            // Increase the total number of intervals. If the total number is odd (ie. a pomodoro has been completed), increase the total pomodoro count

            // If odd, increase pom count and take a break
            if (isPomodoro) {
                increasePomodoroCount();

                // If 4 pomodoros have been completed, take a long break
                if (pomodoroCount + 1 < 4 || (pomodoroCount + 1) % 4) {
                    setIsShortBreak(true);
                    setIsPomodoro(false);
                    setIsLongBreak(false);

                    setTimeout(() => {
                        setTimeRemaining(longBreakLength);
                    }, 1000);

                    // if (options.isAutoStart) {
                    // const interval = setInterval(() => {
                    //     startTimerShortBreak();
                    // }, 1000);
                    // return () => clearInterval(interval);
                    // }
                } else {
                    setIsLongBreak(true);
                    setIsShortBreak(false);
                    setIsPomodoro(false);
                    setTimeout(() => {
                        setTimeRemaining(shortBreakLength);
                    }, 1000);
                    // if (options.isAutoStart) {
                    // const interval = setInterval(() => {
                    //     startTimerLongBreak();
                    // }, 1000);
                    // return () => clearInterval(interval);
                    // }
                }
            } else {
                setIsPomodoro(true);
                setIsLongBreak(false);
                setIsShortBreak(false);
                // if (options.isAutoStart) {

                // const interval = setInterval(() => {
                // startTimerPomodoro();
                // }, 1000);
                // return () => clearInterval(interval);
                // }
                setTimeout(() => {
                    setTimeRemaining(pomodoroLength);
                }, 1000);
            }

            // if (!options.isAutoStart) {
            setIsTimerRunning(false);
            // }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRemaining]);

    const stopTimer = () => {
        if (!isPaused) {
            setIsTimerRunning(false);
            setIsPaused(true);
        }
    };

    const startTimer = (time: number) => {
        if (
            !isTimerRunning
            // || (
            // options.isAutoStart && isStarted)
        ) {
            setTimeRemaining(time);
            setIsTimerRunning(true);
        }
    };

    const startTimerPomodoro = () => {
        startTimer(pomodoroLength);
        if (!isStarted) {
            setIsStarted(true);
        }
    };

    const startTimerShortBreak = () => {
        startTimer(shortBreakLength);
    };

    const startTimerLongBreak = () => {
        startTimer(longBreakLength);
    };

    const handleStartButtonClick = () => {
        if (isPaused) {
            startTimer(timeRemaining);
        } else {
            if (isPomodoro) {
                startTimerPomodoro();
            } else if (isShortBreak) {
                startTimerShortBreak();
            } else {
                startTimerLongBreak();
            }
        }
    };

    // Todo: Create a reset confirmation modal
    const resetTimer = () => {
        setIsPomodoro(true);
        setIsLongBreak(false);
        setIsShortBreak(false);
        setTimeRemaining(pomodoroLength);
        setIsTimerRunning(false);
    };

    return (
        <TimerWrapper>
            <TimerTime data-test='TimerTime'>
                {renderTime(timeRemaining)}
            </TimerTime>
            <TimerButtonWrapper>
                <TimerStartButton
                    data-test='TimerStartButton'
                    onClick={handleStartButtonClick}
                >
                    Start
                </TimerStartButton>
                <TimerStopButton
                    data-test='TimerStopButton'
                    onClick={stopTimer}
                >
                    Stop
                </TimerStopButton>
                <TimerResetButton
                    data-test='TimerResetButton'
                    onClick={resetTimer}
                >
                    Reset
                </TimerResetButton>
            </TimerButtonWrapper>
        </TimerWrapper>
    );
};
