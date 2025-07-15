import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private usernameInput = 'input#user-name';
  private passwordInput = 'input#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  constructor() {
    super();
    this.path = '/';
  }

  public validatePage(): void {
    this.shouldBeVisible(this.usernameInput);
    this.shouldBeVisible(this.passwordInput);
    this.shouldBeVisible(this.loginButton);
  }

  public verifyErrorMessage(message: string): void {
    this.getElement(this.errorMessage)
      .should('be.visible')
      .and('contain.text', message);
  }

  public typeUsername(username: string = Cypress.env('username')): void {
    cy.get(this.usernameInput).should('be.visible').clear().type(username);
  }

  public typePassword(password: string = Cypress.env('password')): void {
    cy.get(this.passwordInput).should('be.visible').clear().type(password);
  }

  public clickLoginButton(): void {
    this.clickElement(this.loginButton);
  }
}