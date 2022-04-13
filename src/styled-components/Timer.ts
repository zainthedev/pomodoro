import styled from 'styled-components';
import { device } from '../styles/theme';
import { Container } from './Container';

export const TimerWrapper = styled(Container)`
    border-radius: 10px 10px 0 0;
`;

export const TimerTime = styled.h2`
    font-size: 18vw;

    @media ${device.pc} {
        font-size: 70px;
    }
`;

export const TimerButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 50%;

    @media ${device.pc} {
        flex-direction: row;
        justify-content: space-evenly;
        width: 80%;
    }
`;

export const TimerButton = styled.button<{ isTimerRunning: boolean }>`
    background: ${(props) =>
        props.isTimerRunning
            ? props.theme.colors.stopButton
            : props.theme.colors.startButton};
    border: none;
    border-radius: 2.67vw;
    box-shadow: 0.53vw 0.8vw 2.93vw 0vw ${({ theme }) => theme.colors.shadow};
    font-size: 5vw;
    width: 75%;
    padding: 4vw 0;
    transition: background 0.1s ease-in;

    &:first-child {
        margin: 0 0 10vw;
    }

    @media ${device.pc} {
        box-shadow: 2px 3px 11px 0px ${({ theme }) => theme.colors.shadow};
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 0;
        width: 25%;

        &:first-child {
            margin: 0;
        }

        &:hover {
            filter: opacity(0.9);
        }
    }
`;

export const TimerStartButton = styled(TimerButton)`
    background: ${({ theme }) => theme.colors.startButton};
`;

export const TimerStopButton = styled(TimerButton)`
    background: ${({ theme }) => theme.colors.stopButton};
`;

export const TimerResetButton = styled(TimerButton)`
    background: #ccd8e0;
`;
