import { getEnvironment } from '../support/env';
import { ORDER_MESSAGES } from '../data/constants';
import { Application } from '../support/app';

describe('Cart tests', function() {
  const environment = getEnvironment();

  beforeEach(() => {
    cy.app().login( environment.standardUserName, environment.password );
  });

  it('Verify that user can place an order', () => {
    cy.app().then((app: Application) => {
      app.yourCartPage.placeAnOrder();
      app.checkoutCompletePage.verifyCheckoutCompleted(ORDER_MESSAGES.thankYouForOrder, ORDER_MESSAGES.orderHasBeenDispatched);
    });
  });

  it('Verify that the cart is empty after the order has been placed', () => {
    cy.app().then((app: Application) => {
      app.yourCartPage.placeAnOrder();
      app.headerComponent.clickShoppingCartButton();
      app.yourCartPage.verifyCartIsEmpty();
    });
  });

  it('Verify product removal from the cart', () => {
    cy.app().then((app: Application) => {
      app.commonComponent.clickAddToCartButton();  
      app.headerComponent.clickShoppingCartButton();
      app.yourCartPage.clickOnTheRemoveButton();
      app.yourCartPage.verifyCartIsEmpty();     
    });
  });

  it('Verify that the "Continue Shopping" button returns to the Products page', () => {
    cy.app().then((app: Application) => {
      app.headerComponent.clickShoppingCartButton();
      app.yourCartPage.clickOnTheContinueShoppingButton();
      app.allItemsPage.validatePage();   
    });
  });

  it('Verify adding a product from the inventory item page', () => {
    cy.app().then((app: Application) => {
      app.allItemsPage.clickOnTheProductItemName(); 
      app.inventoryItemPage.validatePage();
      app.commonComponent.clickAddToCartButton();
      app.headerComponent.clickShoppingCartButton();
      app.yourCartPage.verifyCartIsNotEmpty();     
    });
  });
});