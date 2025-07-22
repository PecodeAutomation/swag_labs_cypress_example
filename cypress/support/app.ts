import { AllItemsPage } from '../pageObjects/pages/allItems.page';
import { LoginPage } from '../pageObjects/pages/login.page';
import { HeaderComponent } from '../pageObjects/components/header.compoent';
import { YourCartPage } from '../pageObjects/pages/yourCart.page';
import { CheckoutYourInformationPage } from '../pageObjects/pages/checkoutYourInformation.page';
import { CheckoutOverviewPage } from '../pageObjects/pages/checkoutOverview.page';
import { CheckoutCompletePage } from '../pageObjects/pages/checkoutComplete.page';
import { FooterComponent } from '../pageObjects/components/footer.component';
import { SidebarMenuComponent } from '../pageObjects/components/sidebarMenu.component';
import { InventoryItemPage } from 'cypress/pageObjects/pages/inventoryItem.page';
import { CommonComponent } from 'cypress/pageObjects/components/common.component';

export class Application {
  public allItemsPage: AllItemsPage;
  public loginPage: LoginPage;
  public headerComponent: HeaderComponent;
  public yourCartPage: YourCartPage;
  public checkoutYourInformationPage: CheckoutYourInformationPage;
  public checkoutOverviewPage: CheckoutOverviewPage;
  public checkoutCompletePage: CheckoutCompletePage;
  public footerComponent: FooterComponent;
  public sidebarMenuComponent: SidebarMenuComponent;
  public inventoryItemPage: InventoryItemPage;
  public commonComponent: CommonComponent;

  constructor() {
    this.allItemsPage = new AllItemsPage(this);
    this.loginPage = new LoginPage();
    this.headerComponent = new HeaderComponent();
    this.yourCartPage = new YourCartPage(this);
    this.checkoutYourInformationPage = new CheckoutYourInformationPage(this);
    this.checkoutOverviewPage = new CheckoutOverviewPage(this);
    this.checkoutCompletePage = new CheckoutCompletePage(this);
    this.footerComponent = new FooterComponent();
    this.sidebarMenuComponent = new SidebarMenuComponent(this);
    this.inventoryItemPage = new InventoryItemPage(this);
    this.commonComponent = new CommonComponent();
  }

  visitLoginPage(): this {
    this.loginPage.visit();
    return this;
  }
}