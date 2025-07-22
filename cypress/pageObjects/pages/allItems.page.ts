import { BasePage } from './base.page';
import { TITLES } from '../../data/constants';
import { Application } from '../../support/app';

export class AllItemsPage extends BasePage {
  private poductsTitle = '[data-test="title"]';
  private productSortContainer = '.product_sort_container';
  private productItemName = '.inventory_item_name';
  private productItemPrice = '.inventory_item_price';
  private addToCartButton = '.btn_inventory';
  private removeButton = '.btn_inventory';

  constructor(private app: Application) {
    super();
    this.path = Cypress.env('dev').base_page;
  }

  public validatePage(): void {
    this.verifyTextContains(this.poductsTitle, TITLES.products);
    this.shouldBeVisible(this.productSortContainer);
    this.app.footerComponent.validatePage();
  }

  public sortItems(sortItem: number): void {
    this.selectOption(this.productSortContainer, sortItem);
  }

  public getAllItemNames(): Cypress.Chainable<string[]> {
    return cy.get(this.productItemName).then($names => {
      return $names.toArray().map(el => el.innerText.trim());
    });
  }

  public verifyPriceSortingByNameAsc(): void {
    this.sortItems(0);
    
    this.getAllItemNames().then(names => {
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        
      expect(names).to.deep.equal(sortedNames);
    });
  }

  public verifyPriceSortingByNameDesc(): void {
    this.sortItems(1);
    
    this.getAllItemNames().then(names => {
      const sortedNames = [...names].sort((a, b) => b.localeCompare(a));
        
      expect(names).to.deep.equal(sortedNames);
    });
  }

  public getAllPrices(): Cypress.Chainable<number[]> {
    return cy.get(this.productItemPrice).then($prices => {
      return $prices
        .toArray()
        .map(el => parseFloat(el.innerText.replace('$', '')));
    });
  }

  public verifyPriceSortingLowToHigh(): void {
    this.sortItems(2);
    
    this.getAllPrices().then(prices => {
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal( sortedPrices );
    });
  }

  public verifyPriceSortingHighToLow(): void {
    this.sortItems(3);
    
    this.getAllPrices().then(prices => {
      const sortedPrices = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal( sortedPrices );
    });
  }

  public verifyButtonName(buttonName: string): void {
    cy.get(this.addToCartButton)
      .eq(0)
      .should('have.text', buttonName)
      .and('be.visible');
  }

  public clickRemoveButton(): void {
    cy.get(this.removeButton).eq(0).click();
  }

  public clickOnTheProductItemName(): void {
    cy.get(this.productItemName).eq(0).click();
  }
}