import styled from 'styled-components';
import { device } from '../styles/theme';
import { Container } from './Container';

export const TimerWrapper = styled(Container)``;

export const TimerTime = styled.h2`
    font-size: 18vw;
    margin-bottom: 15vw;

    @media ${device.pc} {
        font-size: 70px;
        margin-bottom: 60px;
    }
`;

export const TimerButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media ${device.pc} {
        flex-direction: row;
        width: 100%;
    }
`;

const TimerButton = styled.button`
    border: none;
    border-radius: 2.67vw;
    box-shadow: 0.53vw 0.8vw 2.93vw 0vw ${({ theme }) => theme.colors.shadow};
    font-size: 5vw;
    width: 75%;
    margin: 0 auto 5vw;
    padding: 4vw 0;

    @media ${device.pc} {
        box-shadow: 2px 3px 11px 0px ${({ theme }) => theme.colors.shadow};
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        width: 25%;
        padding: 10px 0;
        margin: 0 auto;
        &:not(:last-child) {
            /* margin: 0 20px 0 0; */
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
