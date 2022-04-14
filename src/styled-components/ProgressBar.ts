import styled from 'styled-components';
import { device } from '../styles/theme';

export const ProgressBar = styled.div`
    height: 5.33vw;
    width: 100%;
    overflow: hidden;
    position: relative;

    @media ${device.pc} {
        height: 20px;
    }
`;

export const ProgressBarInner = styled.div<{
    isTimerRunning: boolean;
    currentProgress: number;
}>`
    background: ${(props) => props.theme.colors.accent};
    width: ${(props) => props.currentProgress}%;
    height: 8vw;
    transition: width 0.5s ease-in-out;

    @media ${device.pc} {
        height: 30px;
    }
`;
