import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './styles/theme';
import { useState, useEffect } from 'react';
import { TimerComponent } from './components/TimerComponent';
import { ButtonToggle } from './styled-components/ButtonToggle';
import { AppWrapper } from './styled-components/AppWrapper';
import { Header } from './styled-components/Header';
import { ProgressComponent } from './components/ProgressComponent';

function App() {
    const [theme, setTheme] = useState('light');
    const [pomodoroCount, setPomodoroCount] = useState(0);
    const [isPomodoro, setIsPomodoro] = useState(true);
    const [isShortBreak, setIsShortBreak] = useState(false);
    const [isLongBreak, setIsLongBreak] = useState(false);

    let shortBreakLength = 2;
    let longBreakLength = 5;

    function switchTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
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

    const increasePomodoroCount = () => {
        setPomodoroCount(pomodoroCount + 1);
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <AppWrapper>
                <Header>Pomodoro</Header>
                <TimerComponent
                    shortBreakLength={shortBreakLength}
                    longBreakLength={longBreakLength}
                    increasePomodoroCount={increasePomodoroCount}
                    isPomodoro={isPomodoro}
                    setIsPomodoro={setIsPomodoro}
                    isShortBreak={isShortBreak}
                    setIsShortBreak={setIsShortBreak}
                    setIsLongBreak={setIsLongBreak}
                    pomodoroCount={pomodoroCount}
                />
                <ProgressComponent
                    isTimerRunning={isTimerRunning}
                    timeRemaining={timeRemaining}
                    totalLength={totalLength}
                    pomodoroCount={pomodoroCount}
                />
                <GlobalStyle />
                <ButtonToggle
                    data-test='switchThemeButton'
                    onClick={switchTheme}
                >
                    SWITCH THEME
                </ButtonToggle>
                <h1>Pomodoro count: {pomodoroCount}</h1>
            </AppWrapper>
        </ThemeProvider>
    );
}

export default App;
