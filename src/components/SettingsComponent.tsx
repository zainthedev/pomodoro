import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { ButtonToggle } from '../styled-components/ButtonToggle';
import {
    SettingsWrapper,
    SettingsToggle,
    SettingsLabel,
    SettingsIcon,
    OptionsWrapper,
} from '../styled-components/Settings';
import { SettingsTypes } from '../types/SettingsTypes';

export const SettingsComponent = (props: SettingsTypes) => {
    const { state, dispatch } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    function toggleOptions() {
        setIsOpen(!isOpen);
    }

    return (
        <SettingsWrapper>
            <SettingsToggle onClick={toggleOptions}>
                <SettingsLabel>Settings</SettingsLabel>
                <SettingsIcon isOpen={isOpen} />
            </SettingsToggle>
            <OptionsWrapper isOpen={isOpen}>
                <ButtonToggle
                    data-test='switchThemeButton'
                    onClick={props.switchTheme}
                >
                    SWITCH THEME
                </ButtonToggle>
            </OptionsWrapper>
        </SettingsWrapper>
    );
};
