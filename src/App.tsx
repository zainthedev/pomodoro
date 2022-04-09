import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './theme';
import { useState, useEffect } from 'react';
import { ButtonToggle } from './styled-components/ButtonToggle';

function App() {
    const [theme, setTheme] = useState('light');

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

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <ButtonToggle onClick={switchTheme}>SWITCH THEME</ButtonToggle>
        </ThemeProvider>
    );
}

export default App;
