import styled from 'styled-components';
import { device } from '../styles/theme';

export const AppWrapper = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    @media ${device.pc} {
        width: 768px;
    }
`;
