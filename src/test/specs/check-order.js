import ActiveOrdersPage from '../pages/active-orders.page.js';
import Action from '../lib/action.js';
import LoginPage from '../pages/login.page.js'
import data from '../support/data.js';

describe('Monitor Order', ()=>{

    before(() => {
        LoginPage.open();
    });    
    
    it('Validate Complete Order', async()=>{
        await LoginPage.loginValid(data.credentials.validEmail, data.credentials.validPassword);
        await Action.expectToExist(await ActiveOrdersPage.tabPastOrders);
        await Action.clickOn(await ActiveOrdersPage.tabPastOrders);
        await Action.expectToHaveText(await ActiveOrdersPage.titleOrders[0], "AUTOMATION TEST M03");
        await Action.pauseUntill(4000);
        await Action.expectToHaveText(await ActiveOrdersPage.completeStatus[0], "Complete");
    });

    it('Validate Unsuccessfull Delivery Order', async()=>{
        await Action.expectToExist(await ActiveOrdersPage.tabPastOrders);
        await Action.clickOn(await ActiveOrdersPage.tabPastOrders);
        await Action.expectToHaveText(await ActiveOrdersPage.titleOrders[0], "AUTOMATION TEST M03");
        await Action.pauseUntill(4000);
        await Action.expectToHaveText(await ActiveOrdersPage.failedStatus[1], "Unsuccessful Delivery");
    });
});