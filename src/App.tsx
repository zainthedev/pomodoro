import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './styles/theme';
import { useEffect, useReducer } from 'react';
import { TimerComponent } from './components/TimerComponent';
import { AppWrapper } from './styled-components/AppWrapper';
import { Header } from './styled-components/Header';
import { ProgressComponent } from './components/ProgressComponent';
import { timerReducer } from './reducers/timerReducer';
import { AppContext, initialState } from './contexts/AppContext';
import { SettingsComponent } from './components/SettingsComponent';

function App() {
    const [state, dispatch] = useReducer(timerReducer, initialState);

    // Set the current theme based on localStorage or the system theme
    useEffect(() => {
        // Get the saved theme in local storage
        const savedTheme = localStorage.getItem('theme');

        // Check if system preference is set to dark
        const preferDark =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            dispatch({
                type: 'setTheme',
                payload: savedTheme,
            });
        } else if (preferDark) {
            dispatch({
                type: 'setTheme',
                payload: 'dark',
            });
        }
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <ThemeProvider
                theme={state.theme === 'light' ? lightTheme : darkTheme}
            >
                <AppWrapper>
                    <Header>Pomodoro</Header>
                    <TimerComponent />
                    <ProgressComponent />
                    <SettingsComponent />
                    <GlobalStyle />
                </AppWrapper>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
