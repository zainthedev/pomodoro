import styled from 'styled-components';
import { device } from '../styles/theme';

export const Options = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    padding-top: 8vw;
    width: 90%;

    @media ${device.pc} {
        padding-top: 30px;
    }
`;

export const OptionWrapper = styled.div`
    align-items: center;
    box-shadow: inset 0 0 1.87vw 0 ${(props) => props.theme.colors.shadow};
    border-radius: 2.67vw;
    display: flex;
    flex-direction: column;
    font-size: 4vw;
    margin-bottom: 4vw;
    padding: 5.33vw 8vw;

    @media ${device.pc} {
        font-size: 16px;
        box-shadow: inset 0 0 7px 0 ${(props) => props.theme.colors.shadow};
        border-radius: 10px;
        margin-bottom: 30px;
        padding: 20px 30px;

        &:not(:last-of-type) {
            margin-bottom: 30px;
        }
    }
`;

export const OptionLabelWrapper = styled.label`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    width: 100%;

    @media ${device.pc} {
        &:hover {
            img {
                opacity: 0.8;
            }
        }
    }
`;

export const OptionLabelWrapperVolume = styled(OptionLabelWrapper)`
    cursor: initial;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const OptionLabel = styled.p`
    align-items: center;
    display: flex;
    height: 100%;
    width: 50%;
`;

export const OptionLabelWarning = styled(OptionLabel)`
    align-items: center;
    align-self: flex-start;
    color: ${(props) => props.theme.colors.stopButton};
    font-size: 3.73vw;
    display: flex;
    height: 100%;
    width: 50%;

    @media ${device.pc} {
        font-size: 14px;
        transform: translateY(-5px);
        width: 50%;
    }
`;

export const OptionLabelVolume = styled(OptionLabel)`
    text-align: center;
    margin-bottom: 2.67vw;
    justify-content: center;
    width: 100%;

    @media ${device.pc} {
        margin-bottom: 10px;
    }
`;

export const OptionSlider = styled.input`
    appearance: none;
    background: none;
    cursor: pointer;
    height: 2.67vw;
    outline: none;
    opacity: 0.7;
    overflow: visible;
    transition: opacity 0.2s;
    width: 100%;

    -webkit-appearance: none;
    -webkit-transition: 0.2s;

    @media ${device.pc} {
        height: 10px;

        &:hover {
            ::-webkit-slider-thumb {
                transform: scale(2);
            }
            ::-moz-range-thumb {
                transform: scale(2);
            }
        }
    }

    ::-webkit-slider-runnable-track {
        background: ${(props) => props.theme.colors.accent};
        border-radius: 2.67vw;
        box-shadow: inset 0 0 0.8vw 0.27vw
            ${(props) => props.theme.colors.accent2};
        height: 100%;

        @media ${device.pc} {
            border-radius: 10px;
            box-shadow: inset 0 0 3px 1px
                ${(props) => props.theme.colors.accent2};
        }
    }

    ::-moz-range-track {
        background: ${(props) => props.theme.colors.accent};
        border-radius: 2.67vw;
        box-shadow: inset 0 0 0.8vw 0.27vw
            ${(props) => props.theme.colors.accent2};
        height: 100%;

        @media ${device.pc} {
            border-radius: 10px;
            box-shadow: inset 0 0 3px 1px
                ${(props) => props.theme.colors.accent2};
        }
    }

    ::-webkit-slider-thumb {
        background: ${(props) => props.theme.colors.body};
        border: solid 1px ${(props) => props.theme.colors.text};
        border-radius: 100%;
        height: 10px;
        transform: scale(1.8);
        width: 10px;

        -webkit-appearance: none;
    }

    ::-moz-range-thumb {
        background: ${(props) => props.theme.colors.body};
        border: solid 1px ${(props) => props.theme.colors.text};
        border-radius: 100%;
        height: 10px;
        transform: scale(1.8);
        width: 10px;
    }
`;

export const OptionBoxWrapper = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

export const OptionBox = styled.img`
    background: ${(props) => props.theme.colors.accent};
    border-radius: 10px;
    box-shadow: inset 0 0 3px 1px ${(props) => props.theme.colors.shadow};
    height: auto;
    width: 9vw;
    padding: 2.67vw;

    transition: all 0.2s ease-in;

    &:not(:last-child) {
        margin-right: 5.33vw;
    }

    @media ${device.pc} {
        padding: 10px;
        width: 35px;

        &:not(:last-child) {
            margin-right: 20px;
        }
    }
`;

export const OptionBoxBreak = styled(OptionBox)`
    transform: translateY(45%);

    @media ${device.pc} {
        transform: translateY(20%);
    }
`;
