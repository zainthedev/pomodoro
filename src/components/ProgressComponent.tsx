import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import {
    ProgressBar,
    ProgressBarInner,
} from '../styled-components/ProgressBar';

export const ProgressComponent = () => {
    const { state } = useContext(AppContext);
    const [currentProgress, setCurrentProgress] = useState(-100);
    const [totalLength, setTotalLength] = useState(0);

    useEffect(() => {
        const newTotalLength =
            state.time * 4 + state.shortBreakLength * 3 + state.longBreakLength;
        setTotalLength(newTotalLength);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.shortBreakLength, state.longBreakLength]);

    useEffect(() => {
        setTimeout(() => {
            console.log(currentProgress <= 0 && state.isRunning);
            console.log('state.isRunning above');
            if (currentProgress <= 0 && state.isRunning && state.time !== 0) {
                // if (currentProgress <= 0 && state.isRunning) {
                console.log('hi');
                const increment = 100 / totalLength;

                setCurrentProgress(currentProgress + increment);
            }
        }, 1000);
    }, [state.isRunning, state.time]);

    useEffect(() => {
        if (currentProgress >= 0 || currentProgress >= -1) {
            setTimeout(() => {
                console.log('resetting');
                setCurrentProgress(-100);
            }, 1000);
        }
    }, [currentProgress]);

    return (
        <ProgressBar>
            <ProgressBarInner
                isRunning={state.isRunning}
                currentProgress={currentProgress}
            />
        </ProgressBar>
    );
};
