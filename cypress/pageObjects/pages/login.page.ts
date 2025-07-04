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

  public typeUsername(username: string): void {
    this.typeText(this.usernameInput, username);
  }

  public typePassword(password: string): void {
    this.typeText(this.passwordInput, password);
  }

  public clickLoginButton(): void {
    this.clickElement(this.loginButton);
  }
}