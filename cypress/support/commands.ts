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

Cypress.Commands.add('login', (username, password) => {
  const app = new Application();
  app.loginPage.typeUsername(username || Cypress.env('standardUserName'));
  app.loginPage.typePassword(password || Cypress.env('password'));
  app.loginPage.clickLoginButton();
});