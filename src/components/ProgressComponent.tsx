import { useState, useEffect } from 'react';
import {
    ProgressBar,
    ProgressBarInner,
} from '../styled-components/ProgressBar';
import { ProgessComponentProps } from '../types/TimerTypes';

export const ProgressComponent = ({
    isTimerRunning,
    totalLength,
}: ProgessComponentProps) => {
    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
        if (!(currentProgress >= 100) && isTimerRunning) {
            const increment = 100 / totalLength;
            const interval = setInterval(() => {
                setCurrentProgress(currentProgress + increment);
            }, 1000);
            return () => clearInterval(interval);
        }
    });

    useEffect(() => {
        if (currentProgress >= 100 || currentProgress >= 99) {
            setTimeout(() => {
                setCurrentProgress(0);
            }, 1000);
        }
    }, [currentProgress]);

    return (
        <ProgressBar>
            <ProgressBarInner
                isTimerRunning={isTimerRunning}
                currentProgress={currentProgress}
            />
        </ProgressBar>
    );
};
