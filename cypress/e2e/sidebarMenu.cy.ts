import { getEnvironment } from '../support/env';
import { Application } from '@support/app';

describe('Sidebar tests', function() {
  const environment = getEnvironment();

  beforeEach(() => {
    cy.app().login( environment.standardUserName, environment.password );
  });

  it('Verify logout', () => {
    cy.app().then((app: Application) => {
      app.sidebarMenuComponent.clickOnTheLogoutButton();
      app.loginPage.validatePage();
    });
  });

  it('Verify that that all items are removed from the cart after clicking the "Reset App State" button', () => {
    cy.app().then((app: Application) => {
      app.allItemsPage.clickAddToCartButton(); 
      app.headerComponent.clickShoppingCartButton();
      app.sidebarMenuComponent.clickOnTheResetAppStateButton();
      app.yourCartPage.verifyCartIsEmpty();
    });
  });

  it('Verify that the "All Items" button returns to the products page', () => {
    cy.app().then((app: Application) => {
      app.headerComponent.clickShoppingCartButton();
      app.sidebarMenuComponent.clickOnTheAllItemsButton();
      app.allItemsPage.validatePage();
    });
  });
});