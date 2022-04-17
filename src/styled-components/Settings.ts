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

export const SettingsToggle = styled.button`
    align-items: center;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    display: flex;
    font-size: 8vw;
    justify-content: space-between;
    padding: 0;
    width: 90%;

    @media ${device.pc} {
        @media ${device.pc} {
            &:hover {
                svg {
                    transform: rotate(90deg);
                }
            }
        }
        font-size: 30px;
    }
`;

export const SettingsLabel = styled.p``;

export const SettingsIcon = styled(SettingsGear)`
    height: 35px;

    transition: transform 0.5s ease-out;
    width: 35px;

    & * {
        stroke: ${(props) => props.theme.colors.text};
    }
`;

export const OptionsModal = styled.div<{ isOpen: boolean }>`
    align-items: center;
    background: rgba(31, 41, 51, 0.6);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    position: fixed;
    top: 0;
    transform: translateX(${(props) => (props.isOpen ? 0 : 100)}%);
    transition: opacity 0.2s ease-out;
    width: 100vw;
    z-index: 10;

    @media ${device.pc} {
        display: none;
    }
`;

export const OptionsWrapper = styled.div<{
    isOpen: boolean;
}>`
    background: ${(props) => props.theme.colors.container};
    border-radius: 2.67vw;
    display: flex;
    flex-direction: column;
    height: 0;
    overflow: scroll;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    transition: opacity 0.2s ease-out;

    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

    @media ${device.pc} {
        height: ${(props) => (props.isOpen ? 'auto' : 0)};
        transition: height 0.5s ease-out;
        width: 90%;
    }
`;

export const OptionsWrapperModal = styled(OptionsWrapper)<{
    isOpen: boolean;
}>`
    background: ${(props) => props.theme.colors.container};
    height: ${(props) => (props.isOpen ? 'auto' : 0)};
    max-height: 80vh;
    width: ${(props) => (props.isOpen ? '80vw' : 0)};

    @media ${device.pc} {
        display: none;
    }
`;
