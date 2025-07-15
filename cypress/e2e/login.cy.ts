import { getEnvironment } from '../support/env';
import {ERROR_MESSAGE} from '../data/constants';

describe('Login Tests', function() {
  const environment = getEnvironment();

  beforeEach(() => {
    cy.app().visitLoginPage();
  });

  it('Verify standard user login with valid credentials', () => {
    cy.login(
      Cypress.env('standardUserName'),
      Cypress.env('password')
    );
    cy.app().then(app => app.headerComponent.verifyPath());
  });

  const negativeTests = [
    {
      title: 'Verify standard user login with invalid password',
      username: environment.standardUserName,
      password: environment.invalid_password,
      expectedError: ERROR_MESSAGE.usernameAndPasswordDoNotMatchAnyUser,
    },
    {
      title: 'Verify standard user login with invalid username',
      username: environment.invalid_username,
      password: environment.password,
      expectedError: ERROR_MESSAGE.usernameAndPasswordDoNotMatchAnyUser,
    },
    {
      title: 'Verify standard user login with locked user',
      username: environment.lockedUserName,
      password: environment.password,
      expectedError: ERROR_MESSAGE.thisUserLockedOut,
    },
    {
      title: 'Verify login with locked user',
      username: environment.lockedUserName,
      password: environment.password,
      expectedError: ERROR_MESSAGE.thisUserLockedOut,
    },
  ];

  negativeTests.forEach(({ title, username, password, expectedError }) => {
    it(title, () => {
      cy.app().login(username, password);
      cy.app().then(app => app.loginPage.verifyErrorMessage(expectedError));
    });
  });

  it('Verify user login with empty username and password', () => {
    cy.app().then(app => { 
      app.loginPage.clickLoginButton();
      app.loginPage.verifyErrorMessage(ERROR_MESSAGE.userNameIsRequired);
    });
  });

  it('Verify user login with empty username and valid password', () => {
    cy.app().then(app => { 
      app.loginPage.typePassword(environment.password); 
      app.loginPage.clickLoginButton();
      app.loginPage.verifyErrorMessage(ERROR_MESSAGE.userNameIsRequired);
    });
  });

  it('Verify user login with empty password and valid username', () => {
    cy.app().then(app => {
      app.loginPage.typeUsername(environment.standardUserName);
      app.loginPage.clickLoginButton();
      app.loginPage.verifyErrorMessage(ERROR_MESSAGE.passwordIsRequired);
    });
  });
});
