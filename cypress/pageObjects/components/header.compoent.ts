import { BasePage } from '../pages/base.page';

export class HeaderComponent extends BasePage {
  burgerMenuButton = '#react-burger-menu-btn';
  logo = '.app_logo';
  shoppingCartButton = '#shopping_cart_container';

  constructor() {
    super();
    this.path = Cypress.env('dev').base_page;
  }

  public validatePage(): void {
    this.shouldBeVisible(this.burgerMenuButton);
    this.shouldBeVisible(this.logo);
    this.shouldBeVisible(this.shoppingCartButton);
  }

  public clickBurgerMenuButton(): void {
    this.clickElement(this.burgerMenuButton);
  }

  public clickShoppingCartButton(): void {
    this.clickElement(this.shoppingCartButton);
  }
}