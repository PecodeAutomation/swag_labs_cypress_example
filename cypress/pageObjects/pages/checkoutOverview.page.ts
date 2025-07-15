import { BasePage } from './base.page';
import { TITLES } from '../../data/constants';
import { Application } from '../../support/app';  

export class CheckoutOverviewPage extends BasePage {
  private checkoutYourInformationTitle = '[data-test="title"]';
  private finishButton = '#finish';

  constructor(private app: Application) {
    super('/checkout-step-two.html');
  }

  public validatePage(): void {
    this.verifyTextContains(this.checkoutYourInformationTitle, TITLES.checkoutOverview);
    this.app.footerComponent.validatePage();
  }

  public clickOnTheFinishButton(): void {
    this.clickElement(this.finishButton);
  }
}   