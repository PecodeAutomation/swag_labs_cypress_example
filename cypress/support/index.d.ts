import type {Loggable} from 'cypress';

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>
      
    }

    interface MyCustomOptions extends Loggable {
      customFlag?: boolean
    }
  }
}