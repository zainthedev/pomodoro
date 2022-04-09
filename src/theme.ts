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
        body: 'white',
        text: 'black',
    },
};

export const darkTheme: DefaultTheme = {
    colors: {
        body: 'black',
        text: 'white',
    },
};

export const breakpoints = {
    pc: '769px',
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | String) =>
        `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};
