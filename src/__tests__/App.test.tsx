import { mount } from '@cypress/react';
import App from '../App';

it('renders switch theme button', () => {
    mount(<App />);
    cy.get('[data-test=switchThemeButton]').contains('SWITCH THEME');
});
