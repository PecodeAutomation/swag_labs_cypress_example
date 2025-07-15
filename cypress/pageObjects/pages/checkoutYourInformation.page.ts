import { BasePage } from './base.page';
import {faker} from '@faker-js/faker';
import { TITLES } from '../../data/constants';
import { Application } from '../../support/app';

export class CheckoutYourInformationPage extends BasePage {
  private checkoutYourInformationTitle = '[data-test="title"]';
  private checkoutButton = '#checkout';
  private firstNameInpur = '#first-name';
  private lastNameInput = '#last-name';
  private postalCodeInput = '#postal-code';
  private continueButton = '#continue';

  constructor(private app: Application) {
    super('/checkout-step-one.html');
  }

  public validatePage(): void {
    this.verifyTextContains(this.checkoutYourInformationTitle, TITLES.checkoutYourInformation);
    this.app.footerComponent.validatePage();
  }

  public clickOnTheCheckoutButton(): void {
    this.clickElement(this.checkoutButton);
  }

  public typeCheckoutInformation(): void {
    this.typeText(this.firstNameInpur, faker.person.firstName());
    this.typeText(this.lastNameInput, faker.person.lastName());
    this.typeText(this.postalCodeInput, faker.location.zipCode());
  }

  public clickOnTheContinueButton(): void {
    this.clickElement(this.continueButton);
  }
}   