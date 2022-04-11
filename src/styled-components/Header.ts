import styled from 'styled-components';
import { device } from '../styles/theme';

export const Header = styled.h1`
    font-family: 'Beau Rivage', cursive;
    font-size: 12.8vw;
    margin-top: 5vw;
    text-align: center;

    @media ${device.pc} {
        font-size: 48px;
        margin-top: 18px;
    }
`;
