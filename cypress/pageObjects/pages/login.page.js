class LoginPage {
  locatorOf = {
    logo: '.login_logo',
    userNameInput: 'input#user-name',
    passwordInput: 'input#password',
    loginButton: '#login-button',
  };

  get = {
    logo: () => cy.get(this.locatorOf.logo),
    userNameInput: () => cy.get(this.locatorOf.userNameInput),
    passwordInput: () => cy.get(this.locatorOf.passwordInput),
    loginButton: () => cy.get(this.locatorOf.loginButton),
  };

  action = {
    login: (username = Cypress.env('standardUserName'), password = Cypress.env('password')) => {
      this.get.userNameInput().clear().type(username);
      this.get.passwordInput().clear().type(password, { sensitive: true });
      this.get.loginButton().click();
    },
  };
}
export const loginPage = new LoginPage();