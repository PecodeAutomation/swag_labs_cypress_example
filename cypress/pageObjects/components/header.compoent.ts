import { BasePage } from '../pages/base.page';

export class HeaderComponent extends BasePage {
  private burgerMenuButton = '#react-burger-menu-btn';
  private logo = '.app_logo';
  private shoppingCartButton = '#shopping_cart_container';

  constructor() {
    super();
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