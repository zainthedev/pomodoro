import styled from 'styled-components';
import { device } from '../styles/theme';
import { Container } from './Container';
import { ReactComponent as SettingsGear } from '../assets/images/settings.svg';

export const SettingsWrapper = styled(Container)`
    border-radius: 0 0 10px 10px;
    margin-top: 8vw;

    @media ${device.pc} {
        margin: 0;
    }
`;

export const SettingsToggle = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 8vw;
    justify-content: space-between;
    width: 90%;

    @media ${device.pc} {
        font-size: 30px;
    }
`;

export const SettingsLabel = styled.p``;

export const SettingsIcon = styled(SettingsGear)<{
    isOpen: boolean;
}>`
    height: 35px;
    transform: rotate(${(props) => (props.isOpen ? '90deg' : 0)});
    transition: transform 0.5s ease-out;
    width: 35px;

    & * {
        stroke: ${(props) => props.theme.colors.text};
    }
`;

export const OptionsWrapper = styled.div<{
    isOpen: boolean;
}>`
    display: flex;
    flex-direction: column;
    height: ${(props) => (props.isOpen ? '20vw' : 0)};
    overflow: scroll;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    transition: height 0.5s ease-out;

    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

    @media ${device.pc} {
        height: ${(props) => (props.isOpen ? '500px' : 0)};
    }
`;
