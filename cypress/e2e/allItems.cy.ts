import { getEnvironment } from '../support/env';
import { BUTTONS } from '../data/constants';
import { Application } from '../support/app';

describe('All Items tests', function() {
  const environment = getEnvironment();

  beforeEach(() => {
    cy.app().login( environment.standardUserName, environment.password );
  });

  it('Verify price sorting by name(A to Z)', () => {
    cy.app().then((app: Application) => {
      app.allItemsPage.verifyPriceSortingByNameAsc(); 
    });
  });

  it('Verify price sorting by name(Z to A)', () => {
    cy.app().then((app: Application) => {
      app.allItemsPage.verifyPriceSortingByNameDesc(); 
    });
  });

  it('Verify price sorting (low to high)', () => {
    cy.app().then((app: Application) => {
      app.allItemsPage.verifyPriceSortingLowToHigh(); 
    });
  });

  it('Verify price sorting (high to low)', () => {
    cy.app().then((app: Application) => {
      app.allItemsPage.verifyPriceSortingHighToLow(); 
    });
  });

  it('Verify that after adding a product to the cart, the "Add to cart" button changes to "Remove"', () => {
    cy.app().then((app: Application) => {
      app.allItemsPage.clickAddToCartButton(); 
      app.allItemsPage.verifyButtonName(BUTTONS.remove); 
    });
  });

  it('Verify that after removing a product, the "Remove" button changes to "Add to cart"', () => {
    cy.app().then((app: Application) => {
      app.allItemsPage.clickAddToCartButton(); 
      app.allItemsPage.clickRemoveButton(); 
      app.allItemsPage.verifyButtonName(BUTTONS.addToCart); 
    });
  });
});