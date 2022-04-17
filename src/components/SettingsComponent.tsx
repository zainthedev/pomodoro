import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import {
    SettingsWrapper,
    SettingsToggle,
    SettingsLabel,
    SettingsIcon,
    OptionsModal,
    OptionsWrapperModal,
    OptionsWrapper,
} from '../styled-components/Settings';
import { OptionsComponent } from './OptionsComponent';

export const SettingsComponent = () => {
    const { state, dispatch } = useContext(AppContext);

    function closeModal(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation();
        dispatch({ type: 'toggleOptions' });
    }
    function toggleOptions(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation();
        dispatch({ type: 'toggleOptions' });
    }

    return (
        <SettingsWrapper>
            <SettingsToggle onClick={toggleOptions}>
                <SettingsLabel>Settings</SettingsLabel>
                <SettingsIcon />
            </SettingsToggle>
            <OptionsModal
                onClick={(e) => closeModal(e)}
                isOpen={state.isOptionsOpen}
            >
                <OptionsWrapperModal isOpen={state.isOptionsOpen}>
                    <OptionsComponent />
                </OptionsWrapperModal>
            </OptionsModal>
            <OptionsWrapper isOpen={state.isOptionsOpen}>
                <OptionsComponent />
            </OptionsWrapper>
        </SettingsWrapper>
    );
};
