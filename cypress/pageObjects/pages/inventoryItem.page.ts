import { BasePage } from './base.page';
import { Application } from '../../support/app';

export class InventoryItemPage extends BasePage {
  private itemImage = '.inventory_details_img';
  private itemName = '[data-test="inventory-item-name"]';
  private itemDescription = '[data-test="inventory-item-desc"]';
  private itemPrice = '[data-test="inventory-item-price"]';
  private addToCartButton = '#add-to-cart';

  constructor(private app: Application) {
    super();
    this.path = `${Cypress.env('dev').url}inventory-item.html`;
  }

  public validatePage(): void {
    this.shouldBeVisible(this.itemImage);
    this.shouldBeVisible(this.itemName);
    this.shouldBeVisible(this.itemDescription);
    this.shouldBeVisible(this.itemPrice);
    this.shouldBeVisible(this.addToCartButton);
    this.app.footerComponent.validatePage();
  }
}   