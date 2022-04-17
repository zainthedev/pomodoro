import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { ButtonToggle } from '../styled-components/ButtonToggle';
import {
    Options,
    OptionWrapper,
    OptionLabel,
    OptionLabelWarning,
    OptionLabelVolume,
    OptionSlider,
    OptionLabelWrapper,
    OptionLabelWrapperVolume,
    OptionBoxWrapper,
    OptionBoxBreak,
    OptionBox,
} from '../styled-components/Options';
import SunIcon from '../assets/images/sun.svg';
import MoonIcon from '../assets/images/moon.svg';
import RelaxIcon from '../assets/images/relax.svg';
import RelaxIconWhite from '../assets/images/relax_white.svg';
import SleepIcon from '../assets/images/sleep.svg';
import SleepIconWhite from '../assets/images/sleep_white.svg';

export const OptionsComponent = () => {
    const { state, dispatch } = useContext(AppContext);
    const [isNormalBreakLength, setIsNormalBreakLength] = useState(true);
    const isLightMode = state.theme === 'light';

    function setVolume(volume: number) {
        dispatch({
            type: 'setOptions',
            payload: { ...state.options, volume },
        });
    }

    function toggleTheme(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation();
        dispatch({
            type: 'setTheme',
        });
    }

    function setBreakLength(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation();
        setIsNormalBreakLength(!isNormalBreakLength);
        const isBreak = state.timerType !== 'pomodoro';

        // Set the new break length
        if (isNormalBreakLength) {
            dispatch({ type: 'setShortBreakLength', payload: 10 * 60 });
            dispatch({ type: 'setLongBreakLength', payload: 15 * 60 });
        } else {
            dispatch({ type: 'setShortBreakLength', payload: 5 * 60 });
            dispatch({ type: 'setLongBreakLength', payload: 10 * 60 });
        }

        // Reset the timer if it's currently a break
        if (isBreak) {
            dispatch({ type: 'reset' });
        }
    }

    function getBreakIcon() {
        if (isNormalBreakLength) {
            if (isLightMode) {
                return RelaxIcon;
            } else {
                return RelaxIconWhite;
            }
        } else {
            if (isLightMode) {
                return SleepIcon;
            } else {
                return SleepIconWhite;
            }
        }
    }

    return (
        <Options>
            <OptionWrapper>
                <OptionLabelWrapperVolume>
                    <OptionLabelVolume>
                        Volume: {Math.floor(state.options.volume * 100)}%
                    </OptionLabelVolume>
                    <OptionSlider
                        type='range'
                        min={0}
                        max={1}
                        step={0.01}
                        value={state.options.volume}
                        onChange={(e: {
                            target: { valueAsNumber: number };
                        }) => {
                            setVolume(e.target.valueAsNumber);
                        }}
                    />
                </OptionLabelWrapperVolume>
            </OptionWrapper>
            <OptionWrapper>
                <OptionLabelWrapper onClick={(e) => setBreakLength(e)}>
                    <OptionLabel>
                        Break length:{' '}
                        {isNormalBreakLength
                            ? '5 mins / 10 mins'
                            : '10 mins / 15 mins'}
                    </OptionLabel>
                    <OptionBoxWrapper>
                        <OptionBoxBreak
                            alt='Relaxing man or sleeping face (based on break length)'
                            src={getBreakIcon()}
                        />
                    </OptionBoxWrapper>
                </OptionLabelWrapper>
                <OptionLabelWarning>
                    Will reset the timer if you're currently on a break
                </OptionLabelWarning>
            </OptionWrapper>
            <OptionWrapper>
                <OptionLabelWrapper onClick={(e) => toggleTheme(e)}>
                    <OptionLabel>
                        Theme: {isLightMode ? 'Light' : 'Dark'}
                    </OptionLabel>
                    <OptionBoxWrapper>
                        <OptionBox
                            alt='Theme selector (Sun or moon)'
                            src={isLightMode ? SunIcon : MoonIcon}
                        />
                    </OptionBoxWrapper>
                </OptionLabelWrapper>
            </OptionWrapper>
        </Options>
    );
};
