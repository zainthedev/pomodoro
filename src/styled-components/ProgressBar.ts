import styled from 'styled-components';
import { device } from '../styles/theme';
import { Container } from './Container';

export const ProgressBarWrapper = styled(Container)`
    border-radius: 0;
    margin-top: 8vw;
    position: relative;

    @media ${device.pc} {
        margin: 30px;
    }
`;

export const StatusText = styled.h3`
    font-size: 8vw;
    margin-bottom: 5vw;

    @media ${device.pc} {
        margin-bottom: 20px;
        font-size: 30px;
    }
`;

export const ProgressBar = styled.div`
    box-shadow: 0 0 7px 1px ${(props) => props.theme.colors.shadow};
    height: 5.33vw;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 90%;

    @media ${device.pc} {
        height: 20px;
    }
`;

export const ProgressText = styled.p`
    align-items: center;
    display: flex;
    font-size: 4vw;
    justify-content: center;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    @media ${device.pc} {
        font-size: 16px;
    }
`;

export const ProgressBarInner = styled.div<{
    isRunning: boolean;
    currentProgress: number;
}>`
    background: ${(props) => props.theme.colors.accent};
    width: 100%;
    transform: translateX(${(props) => props.currentProgress}%);
    height: 8vw;
    transition: transform 0.5s linear;

    @media ${device.pc} {
        height: 30px;
    }
`;
