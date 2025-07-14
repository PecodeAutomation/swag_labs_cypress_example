import { BasePage } from './base.page';
import { TITLES } from '../../data/constants';
import { Application } from '../../support/app';

export class CheckoutCompletePage extends BasePage {
  private checkoutYourInformationTitle = '[data-test="title"]';
  private completeHeader = '[data-test="complete-header"]';
  private completeText = '.complete-text';

  constructor(private app: Application) {
    super();
    this.path = `${Cypress.env('dev').url}checkout-complete.html`;
  }

  public validatePage(): void {
    this.verifyTextContains(this.checkoutYourInformationTitle, TITLES.checkoutComplete);
    this.app.footerComponent.validatePage();
  }

  public verifyCheckoutCompleted(header: string, text: string): void {
    this.verifyTextContains(this.completeHeader, header);
    this.verifyTextContains(this.completeText, text);
  }
}  