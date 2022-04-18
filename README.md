# Pomodoro

A pomodoro timer app, built with React, TypeScript and styled-components. Tested with Cypress.

[View live](https://zainthedev.github.io/pomodoro/)

## Features:

-   Progress bar with status text
-   Audio alerts with volume control
-   Light / dark mode toggle
-   Choice between normal breaks or longer ones

## Screenshots

<img src="https://i.imgur.com/RNIoTVJ.png" width="30%" /> <img src="https://i.imgur.com/QlksOWg.png" width="30%" />

## Reflection

For this project, I set out to build a mobile-first, visually minimalist Pomodoro app. The idea was to create something that's not overly flashy and wouldn't look out of place in an office setting.

This was my first time using Cypress. Unfortunately, I had to make the decision to cut testing short as I realized I wouldn't fit it into my planned release schedule. However, I did test the essentials, and found that Cypress was immensely simple and pleasant to use.

The last time I used React, I hadn't made use of Context or the useReducer hook. Thankfully, my experience with Vuex allowed me to quickly pick up how to work with these features.

If I have time, I'd like to add a "test" button to the volume slider.
Additionally, I think the ability to play an ambient noise, such as rain, the ocean, or even simple white noise, would improve the UX and make the site more interesting.
I'd also like to add aria tags and work on increasing accessibility.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run cypress open`

Launches the Cypress test runner.
