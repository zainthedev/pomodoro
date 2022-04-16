import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { ButtonToggle } from '../styled-components/ButtonToggle';
import { SettingsWrapper } from '../styled-components/Settings';
import { SettingsTypes } from '../types/SettingsTypes';

export const SettingsComponent = (props: SettingsTypes) => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <SettingsWrapper>
            <ButtonToggle
                data-test='switchThemeButton'
                onClick={props.switchTheme}
            >
                SWITCH THEME
            </ButtonToggle>
        </SettingsWrapper>
    );
};
