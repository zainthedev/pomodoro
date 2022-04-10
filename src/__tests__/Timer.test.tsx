import { mount } from '@cypress/react';
import App from '../App';

it('renders the inital time', () => {
    mount(<App />);
    cy.get('[data-test=TimerTime]').contains('00:00');
});

it('starts the timer with the pomodoro time', () => {
    mount(<App />);
    cy.get('[data-test=TimerStartButton]').click();
    cy.get('[data-test=TimerTime]').contains('00:03');
});

it('starts the timer with the short break time', () => {
    mount(<App />);
    cy.clock();
    cy.get('[data-test=TimerStartButton]').click();
    cy.tick(3000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.get('[data-test=TimerTime]').contains('00:01');
});

// Todo: figure out how to make this more DRY
it('starts the timer with the long break time', () => {
    mount(<App />);
    cy.clock();
    cy.get('[data-test=TimerStartButton]').click();
    cy.tick(3000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(1000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(3000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(1000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(3000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(1000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(3000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(1000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(3000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(1000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.tick(3000).then(() => {
        cy.get('[data-test=TimerStartButton]').click();
    });
    cy.get('[data-test=TimerTime]').contains('00:02');
});

it('stops the timer when the stop button is pressed', () => {
    mount(<App />);
    cy.clock();
    cy.get('[data-test=TimerStartButton]').click();
    cy.get('[data-test=TimerTime]').contains('00:03');
    cy.tick(1000).then(() => {
        cy.get('[data-test=TimerStopButton]').click();
    });
    cy.tick(1000).then(() => {
        cy.get('[data-test=TimerTime]').contains('00:02');
    });
});

it('resets the timer when the reset button is pressed', () => {
    mount(<App />);
    cy.get('[data-test=TimerResetButton]').click();
    cy.get('[data-test=TimerTime]').contains('00:03');
});
