import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './styles/theme';
import { useState, useEffect, useReducer } from 'react';
import { TimerComponent } from './components/TimerComponent';
import { ButtonToggle } from './styled-components/ButtonToggle';
import { AppWrapper } from './styled-components/AppWrapper';
import { Header } from './styled-components/Header';
import { ProgressComponent } from './components/ProgressComponent';
import { timerReducer } from './reducers/timerReducer';
import { AppContext, initialState } from './contexts/AppContext';

function App() {
    const [state, dispatch] = useReducer(timerReducer, initialState);
    const [theme, setTheme] = useState('light');

    function switchTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    function setShortBreakLength() {
        dispatch({ type: 'setShortBreakLength', payload: 10 });
    }

    // Set the current theme based on localStorage or the system theme
    useEffect(() => {
        // Get the saved theme in local storage
        const savedTheme = localStorage.getItem('theme');

        // Check if system preference is set to dark
        const preferDark =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else if (preferDark) {
            setTheme('dark');
        }
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <AppWrapper>
                    <Header>Pomodoro</Header>
                    <TimerComponent />
                    <ProgressComponent />
                    <GlobalStyle />
                    <ButtonToggle
                        data-test='switchThemeButton'
                        onClick={switchTheme}
                    >
                        SWITCH THEME
                    </ButtonToggle>
                    <h1>Pomodoro count: {state.pomodoroCount}</h1>

                    <button onClick={setShortBreakLength}>
                        set short break length
                    </button>
                </AppWrapper>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
