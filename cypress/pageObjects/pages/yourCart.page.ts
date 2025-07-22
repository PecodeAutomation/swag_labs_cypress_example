import { BasePage } from './base.page';
import { TITLES } from '../../data/constants';
import { Application } from '../../support/app';

export class YourCartPage extends BasePage {
  private yourCartTitle = '[data-test="title"]';
  private checkoutButton = '#checkout';
  private cartItem = '.cart_item';
  private removeButton = '[id^="remove"]';
  private continueShoppingButton = '#continue-shopping';

  constructor(public readonly app: Application) {
    super();
    this.path = `${Cypress.env('dev').url}cart.html`;
  }

  public validatePage(): void {
    this.verifyTextContains(this.yourCartTitle, TITLES.yourCart);
    this.app.footerComponent.validatePage();
  }

  public clickOnTheCheckoutButton(): void {
    this.clickElement(this.checkoutButton);
  }

  public verifyCartIsEmpty(): void {
    this.getElement(this.cartItem).should('not.exist');
  }

  public placeAnOrder(): void {
    this.app.commonComponent.clickAddToCartButton();
    this.app.headerComponent.clickShoppingCartButton();
    this.app.yourCartPage.clickOnTheCheckoutButton();
    this.app.checkoutYourInformationPage.typeCheckoutInformation();
    this.app.checkoutYourInformationPage.clickOnTheContinueButton();
    this.app.checkoutOverviewPage.clickOnTheFinishButton();
  }

  public clickOnTheContinueShoppingButton(): void {
    this.clickElement(this.continueShoppingButton);
  }

  public clickOnTheRemoveButton(): void {
    this.clickElement(this.removeButton);
  }

  public verifyCartIsNotEmpty(): void {
    this.getElement(this.cartItem).should('exist');
  }
}