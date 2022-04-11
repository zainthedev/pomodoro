import styled from 'styled-components';
import { device } from '../styles/theme';

export const Container = styled.div`
    align-items: center;
    align-self: center;
    background: ${({ theme }) => theme.colors.container};
    box-shadow: 0.53vw 0.8vw 2.93vw 0vw ${({ theme }) => theme.colors.shadow};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10vw 0;
    width: 90%;

    @media ${device.pc} {
        box-shadow: 2px 3px 11px 0px ${({ theme }) => theme.colors.shadow};
        padding: 30px 0;
        width: 600px;
    }
`;
