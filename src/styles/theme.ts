import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const lightTheme: DefaultTheme = {
    colors: {
        body: '#fff',
        text: '#1f2933',
        startButton: '#9cde9f',
        stopButton: '#fe654f',
        accent: '#c6d8ff',
        container: '#f2f5f7',
        shadow: '#cdd9df',
    },
};

export const darkTheme: DefaultTheme = {
    colors: {
        body: '#1f2933',
        text: '#fff',
        startButton: '#9cde9f',
        stopButton: '#fe654f',
        accent: '#c6d8ff',
        container: '#27353f',
        shadow: '#172026',
    },
};

export const device = {
    pc: '(min-width: 768px)',
};
