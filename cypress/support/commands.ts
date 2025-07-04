import { Application } from './app';

const app = new Application();

Cypress.Commands.add('app', () => {
  return cy.wrap(app, { log: false });
});

Cypress.Commands.add('visitLoginPage', () => {
  return cy.app().then(app => {
    app.visitLoginPage();
  });
});

Cypress.Commands.add('login', (username: string, password: string) => {
  return cy.app().then(app => {
    app.loginPage.visit();
    app.loginPage.typeUsername(username);
    app.loginPage.typePassword(password);
    app.loginPage.clickLoginButton();
  });
});