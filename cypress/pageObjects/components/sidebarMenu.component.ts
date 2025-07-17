import { BasePage } from '../pages/base.page';
import { Application } from '../../support/app';

export class SidebarMenuComponent extends BasePage {
  private closeButton = '.bm-cross-button';
  private allItemsLink = '#inventory_sidebar_link';
  private aboutLink = '#about_sidebar_link';
  private logoutLink = '#logout_sidebar_link';
  private resetAppStateLink = '#reset_sidebar_link';

  constructor(private app: Application) {
    super();
  }

  public validatePage(): void {
    this.shouldBeVisible(this.closeButton);
    this.shouldBeVisible(this.allItemsLink);
    this.shouldBeVisible(this.aboutLink);
    this.shouldBeVisible(this.logoutLink);
    this.shouldBeVisible(this.resetAppStateLink);
  }

  public clickOnTheLogoutButton(): void {
    this.app.headerComponent.clickBurgerMenuButton();
    this.clickElement(this.logoutLink);
  }

  public clickOnTheResetAppStateButton(): void {
    this.app.headerComponent.clickBurgerMenuButton();
    this.clickElement(this.resetAppStateLink);
    cy.reload(); 
  }

  public clickOnTheAllItemsButton(): void {
    this.app.headerComponent.clickBurgerMenuButton();
    this.clickElement(this.allItemsLink);
  }
}