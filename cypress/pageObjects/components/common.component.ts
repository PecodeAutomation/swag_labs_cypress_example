export class CommonComponent {
  private addToCartButton = '.btn_inventory';
  
  public clickAddToCartButton(): void {
    cy.get(this.addToCartButton).eq(0).click();
  }
}