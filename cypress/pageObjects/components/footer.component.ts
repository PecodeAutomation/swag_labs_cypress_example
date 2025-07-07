import { BasePage } from '../pages/base.page';

export class FooterComponent extends BasePage {
  private twitterLink = '.footer .social_twitter';
  private facebookLink = '.footer .social_facebook';
  private linkedinLink = '.footer .social_linkedin';
  private termsOfService = '.footer_copy';

  constructor() {
    super();
  }

  public validatePage(): void {
    this.shouldBeVisible(this.twitterLink);
    this.shouldBeVisible(this.facebookLink);
    this.shouldBeVisible(this.linkedinLink);
    this.shouldBeVisible(this.termsOfService);
  }

  public clickTwitterLink(): void {
    this.clickElement(this.facebookLink);
  }

  public clickFacebookLink(): void {
    this.clickElement(this.facebookLink);
  }

  public clickLinkedinLink(): void {
    this.clickElement(this.facebookLink);
  }

  public verifyTermsOfServise(text: string): void {
    this.verifyTextContains(this.termsOfService, text);
  }
}