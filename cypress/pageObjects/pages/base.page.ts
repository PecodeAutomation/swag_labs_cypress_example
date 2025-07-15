export abstract class BasePage {
  protected path: string;

  constructor(path: string = '/') {
    this.path = path;
  }

  public visit(): void {
    cy.visit(this.path);
  }

  public getElement(selector: string): Cypress.Chainable {
    return cy.get(selector);
  }

  public clickElement(selector: string): void {
    this.getElement(selector).click();
  }

  public typeText(selector: string, text: string): void {
    this.getElement(selector).type(text);
  }

  public shouldBeVisible(selector: string): void {
    this.getElement(selector).should('be.visible');
  }

  public verifyPath(options: { exact?: boolean } = { exact: false }): void {
    if (options.exact) {
      cy.url().should('eq', Cypress.config('baseUrl') + this.path);
    } else {
      cy.url().should('include', this.path);
    }
  }

  public verifyTextContains(selector: string, text: string): void {
    this.getElement(selector).should('contain.text', text);
  }

  public selectOption(selector: string, option: string | number): void {
    const element = this.getElement(selector);
    
    if (typeof option === 'number') {
      element.select(option);
    } else {
      element.select(option);
    }
  }

    public abstract validatePage(): void;
}