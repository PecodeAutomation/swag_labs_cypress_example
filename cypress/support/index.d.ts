import { Application } from '../support/application';
import type { Loggable } from 'cypress/types/net-stubbing';
import { LoginPage } from '../pageObjects/pages/login.page';
import { AllItemsPage } from '../pageObjects/pages/allItems.page';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Get the shared Application instance with all page objects
       * @example 
       * cy.app().loginPage.visit()
       * cy.app().inventoryPage.validatePage()
       */
      app(): Chainable<Application>;
      visitLoginPage(): void;
      loginPage(): Chainable<LoginPage>;
      allItemsPage(): Chainable<AllItemsPage>;
      
      /**
       * Custom login shortcut command
       * @example 
       * cy.login('standard_user', 'secret_sauce')
       */
      login(username: string, password: string): Chainable<void>;
    }

    interface MyCustomOptions extends Loggable {
      customFlag?: boolean;
    }
  }
}