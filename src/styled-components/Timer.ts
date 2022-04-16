import styled from 'styled-components';
import { device } from '../styles/theme';
import { Container } from './Container';
import { ReactComponent as SpeakerIcon } from '../assets/images/speaker.svg';
import { ReactComponent as SpeakerMuteIcon } from '../assets/images/speaker_mute.svg';

export const TimerWrapper = styled(Container)`
    border-radius: 10px 10px 0 0;
    position: relative;
`;

export const VolumeWrapper = styled.div`
    align-items: center;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-50%, 25%);
    width: 8vw;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media ${device.pc} {
        width: 30px;
    }
`;

export const VolumeIcon = styled(SpeakerIcon)`
    & *:not(rect) {
        stroke: ${(props) => props.theme.colors.text};
    }
`;
export const VolumeMuteIcon = styled(SpeakerMuteIcon)`
    & *:not(rect) {
        stroke: ${(props) => props.theme.colors.text};
    }
`;

export const VolumeText = styled.span`
    font-size: 3vw;

    @media ${device.pc} {
        font-size: 12px;
    }
`;

export const TimerTime = styled.h2`
    font-size: 18vw;
    margin-bottom: 8vw;

    @media ${device.pc} {
        font-size: 70px;
        margin-bottom: 30px;
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

export const TimerButton = styled.button<{ isRunning: boolean }>`
    background: ${(props) =>
        props.isRunning
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
