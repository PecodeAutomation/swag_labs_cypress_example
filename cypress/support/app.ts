import { LoginPage } from '../pageObjects/pages/login.page';
import { HeaderComponent } from '../pageObjects/components/header.compoent';

export class Application {
  constructor(
    public loginPage: LoginPage = new LoginPage(),
    public headerComponent: HeaderComponent = new HeaderComponent(),
  ) {}

  visitLoginPage(): this {
    this.loginPage.visit();
    return this;
  }
}