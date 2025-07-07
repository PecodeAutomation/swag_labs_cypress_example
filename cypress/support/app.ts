import { AllItemsPage } from '../pageObjects/pages/allItems.page';
import { LoginPage } from '../pageObjects/pages/login.page';
import { HeaderComponent } from '../pageObjects/components/header.compoent';

export class Application {
  public allItemsPage: AllItemsPage;
  public loginPage: LoginPage;
  public headerComponent: HeaderComponent;

  constructor() {
    this.allItemsPage = new AllItemsPage();
    this.loginPage = new LoginPage();
    this.headerComponent = new HeaderComponent();
  }

  visitLoginPage(): this {
    this.loginPage.visit();
    return this;
  }
}