import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
    }
`;

export const lightTheme: DefaultTheme = {
    colors: {
        body: '#FFF',
        text: '#1F2933',
        startButton: '#9CDE9F',
        stopButton: '#FE654F',
        accent: '#C6D8FF',
        container: '#F2F5F7',
    },
};

export const darkTheme: DefaultTheme = {
    colors: {
        body: '#1F2933',
        text: '#FFF',
        startButton: '#9CDE9F',
        stopButton: '#FE654F',
        accent: '#C6D8FF',
        container: '#27353F',
    },
};

export const device = {
    pc: '(min-width: 768px)',
};
