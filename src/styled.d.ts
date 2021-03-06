import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            body: string;
            text: string;
            startButton: string;
            stopButton: string;
            accent: string;
            accent2: string;
            container: string;
            shadow: string;
        };
    }
}
