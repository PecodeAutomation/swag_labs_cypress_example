import { AllItemsPage } from '../pageObjects/pages/allItems.page';
import { LoginPage } from '../pageObjects/pages/login.page';
import { HeaderComponent } from '../pageObjects/components/header.compoent';
import { YourCartPage } from '../pageObjects/pages/yourCart.page';
import { CheckoutYourInformationPage } from '../pageObjects/pages/checkoutYourInformation.page';
import { CheckoutOverviewPage } from '../pageObjects/pages/checkoutOverview.page';
import { CheckoutCompletePage } from '../pageObjects/pages/checkoutComplete.page';
import { FooterComponent } from '../pageObjects/components/footer.component';

export class Application {
  public loginPage: LoginPage;
  public headerComponent: HeaderComponent;
  public yourCartPage: YourCartPage;
  public checkoutYourInformationPage: CheckoutYourInformationPage;
  public checkoutOverviewPage: CheckoutOverviewPage;
  public checkoutCompletePage: CheckoutCompletePage;
  public footerComponent: FooterComponent;
  public allItemsPage: AllItemsPage;

  constructor() {
    this.loginPage = new LoginPage();
    this.headerComponent = new HeaderComponent();
    this.yourCartPage = new YourCartPage(this);
    this.checkoutYourInformationPage = new CheckoutYourInformationPage(this);
    this.checkoutOverviewPage = new CheckoutOverviewPage(this);
    this.checkoutCompletePage = new CheckoutCompletePage(this);
    this.footerComponent = new FooterComponent();
    this.allItemsPage = new AllItemsPage(this.footerComponent, this.headerComponent);
  }

  visitLoginPage(): this {
    this.loginPage.visit();
    return this;
  }
}