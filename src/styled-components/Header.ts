import styled from 'styled-components';
import { device } from '../styles/theme';

export const Header = styled.h1`
    font-family: 'Beau Rivage', cursive;
    font-size: 12.8vw;
    margin: 2vw auto 4vw;

    @media ${device.pc} {
        font-size: 48px;
        margin: 24px auto 40px;
    }
`;
