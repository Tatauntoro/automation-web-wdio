import Action from "../lib/action.js";
import LoginPage from "../pages/login.page.js";
import ActiveOrdersPage from "../pages/active-orders.page.js";
import OrdersNewPage from "../pages/order-new.page.js";
import data from "../support/data.js";

describe("Feature Login", () => {

  before(() => {
    LoginPage.open();
  });

  it("create order with marine service", async () => {
    await LoginPage.loginValid(data.credentials.validEmail, data.credentials.validPassword);
    if (await Action.expectToExist(await ActiveOrdersPage.buttonFillFormWhenEmptyOrders)) {
      await Action.clickOn(await ActiveOrdersPage.buttonFillFormWhenEmptyOrders);
    }
    else {
      await Action.expectToExist(await ActiveOrdersPage.buttonFillFormWhenActiveOrders);
      await Action.clickOn(await ActiveOrdersPage.buttonFillFormWhenActiveOrders);
    }
    await OrdersNewPage.selectService();
    await OrdersNewPage.collectFrom();
    await OrdersNewPage.sendTo();
    await OrdersNewPage.cargoDetails();
    await Action.pauseUntill(1000);
    await Action.clickOn(await OrdersNewPage.buttonPlaceOrder);
    await Action.pauseUntill(1000);
    await Action.clickOn(await OrdersNewPage.checkboxConfirmOrder[3]);
    await Action.pauseUntill(1000);
    await Action.clickOn(await OrdersNewPage.buttonSubmit);
    await Action.pauseUntill(1000);
    await Action.clickOn(await OrdersNewPage.buttonOk);
    await Action.pauseUntill(1000);
    await Action.expectToHaveText(await ActiveOrdersPage.titleOrders[0], "AUTOMATION TEST M03");
    await Action.pauseUntill(4000);
    await Action.expectToHaveText(await ActiveOrdersPage.broadcastingStatus[0], "Pending Broadcast");
  });
});
