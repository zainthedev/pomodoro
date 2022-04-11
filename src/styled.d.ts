import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            body: string;
            text: string;
            red: string;
            green: string;
            blue: string;
            greyLight: string;
        };
    }
}
