import { $ } from '@wdio/globals'
import Page from './page.js';
import Action from '../lib/action.js';
import ActiveOrdersPage from './active-orders.page.js';

class LoginPage extends Page {

  static BASE_URL = process.env.BASE_URL;

  get inputEmail () { return $("//input[@name='email']"); }
  get inputPassword () { return $("//input[@name='password']"); }
  get buttonLogin () { return $("//button[contains(text(),'Log in')]"); }

  open () {
    return super.open('/login');
  }

  async loginValid (email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.buttonLogin.click();
    await Action.expectToExist(await ActiveOrdersPage.tabActiveOrders);
    await Action.expectToExist(await ActiveOrdersPage.tabPastOrders);
  }

  async loginInvalid (email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.buttonLogin.click();
  }
}

export default new LoginPage();
