import { useEffect, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import {
    ProgressBar,
    ProgressBarInner,
    ProgressBarWrapper,
    ProgressText,
    StatusText,
} from '../styled-components/ProgressBar';

export const ProgressComponent = () => {
    const { state, dispatch } = useContext(AppContext);

    // Reset the progress bar when it reaches 0 (not exact)
    useEffect(() => {
        if (
            Math.ceil(state.currentProgress) === 0 ||
            Math.floor(state.currentProgress) === 0
        ) {
            setTimeout(() => {
                dispatch({ type: 'setProgress', payload: -100 });
            }, 1000);
        }
    }, [state.currentProgress, dispatch]);

    const setStatusText = () => {
        if (state.isRunning && state.time) {
            switch (state.timerType) {
                case 'pomodoro':
                    return 'Focus.';
                case 'shortBreak':
                    return 'Take a short break.';
                case 'longBreak':
                    return 'Take a long break. Relax.';
            }
        } else if (state.isPaused) {
            return 'Paused.';
        } else {
            switch (state.timerType) {
                case 'pomodoro':
                    return 'Start a pomodoro.';
                case 'shortBreak':
                    return 'Next, a short break.';
                case 'longBreak':
                    return 'Finally, a long break.';
            }
        }
    };

    return (
        <ProgressBarWrapper>
            <StatusText>{setStatusText()}</StatusText>
            <ProgressBar>
                <ProgressText>
                    {100 + Math.floor(state.currentProgress)}%
                </ProgressText>
                <ProgressBarInner
                    isRunning={state.isRunning}
                    currentProgress={state.currentProgress}
                />
            </ProgressBar>
        </ProgressBarWrapper>
    );
};
