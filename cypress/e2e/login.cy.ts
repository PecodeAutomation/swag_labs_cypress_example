import { getEnvironment } from '../support/env';
import {ERROR_MESSAGE} from '../data/constants';

describe('Login Tests', function() {
  const environment = getEnvironment();

  beforeEach(() => {
    cy.app().visitLoginPage();
  });

  it('Verify standard user login with valid credentials', () => {
    cy.app().login( environment.standardUserName, environment.password );
    cy.app().then(app => { app.headerComponent.verifyPath(); });
  });

  it('Verify standard user login with invalid password', () => {
    cy.app().login( environment.standardUserName, environment.invalid_password );
    cy.app().then(app => { app.loginPage.verifyErrorMessage(ERROR_MESSAGE.usernameAndPasswordDoNotMatchAnyUser); });
  });

  it('Verify standard user login with invalid username', () => {
    cy.app().login( environment.invalid_username, environment.password );
    cy.app().then(app => { app.loginPage.verifyErrorMessage(ERROR_MESSAGE.usernameAndPasswordDoNotMatchAnyUser); });
  });

  it('Verify user login with empty username and password', () => {
    cy.app().then(app => { app.loginPage.clickLoginButton(); });
    cy.app().then(app => { app.loginPage.verifyErrorMessage(ERROR_MESSAGE.userNameIsRequired); });
  });

  it('Verify user login with empty username and valid password', () => {
    cy.app().then(app => { 
      app.loginPage.typePassword(environment.password); 
      app.loginPage.clickLoginButton();
    });
    cy.app().then(app => { app.loginPage.verifyErrorMessage(ERROR_MESSAGE.userNameIsRequired); });
  });

  it('Verify user login with empty password and valid username', () => {
    cy.app().then(app => {
      app.loginPage.typeUsername(environment.standardUserName);
      app.loginPage.clickLoginButton();
    });
    cy.app().then(app => { app.loginPage.verifyErrorMessage(ERROR_MESSAGE.passwordIsRequired); });
  });
});
