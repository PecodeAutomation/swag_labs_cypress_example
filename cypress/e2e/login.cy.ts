import { loginPage } from '../pageObjects/pages/login.page';
import { getEnvironment } from '../support/env';

describe('Login Tests', function() {
  const enviroment = getEnvironment();

  beforeEach(() => {
    cy.visit(enviroment.url);
    cy.url().should('include', enviroment.url);
  });

  it('Verify standard user login with valid credentials', () => {
    loginPage.action.login();
    cy.url().should('include', enviroment.base_page);
  });
});