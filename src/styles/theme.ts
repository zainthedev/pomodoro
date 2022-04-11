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
        red: '#FE654F',
        green: '#9CDE9F',
        blue: '#C6D8FF',
        greyLight: '2F3D4C',
    },
};

export const darkTheme: DefaultTheme = {
    colors: {
        body: '#1F2933',
        text: '#FFF',
        red: '#FE654F',
        green: '#9CDE9F',
        blue: '#C6D8FF',
        greyLight: '2F3D4C',
    },
};

export const device = {
    pc: '(min-width: 768px)',
};
