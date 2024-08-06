import { $ } from "@wdio/globals";

class ActiveOrdersPage {

  //tab orders
  get tabActiveOrders () { return $("//a[@href='/active-orders']"); }
  get tabPastOrders () { return $("//a[@href='/past-orders']"); }

  //button fill form
  get buttonFillFormWhenEmptyOrders () { return $("//button[@class='sc-gEkIjz bTDWtE']"); }
  get buttonFillFormWhenActiveOrders () { return $("//button[@class='sc-gEkIjz bveEui sc-NsUQg htEhUB']"); }

  get titleOrders () { return $$("//h4[@class='sc-kFWlue katDmN']"); }

  //status
  get broadcastingStatus () { return $$("//div[@class='sc-fIGJwM fMzYow']"); }
  get completeStatus () { return $$("//div[@class='sc-fIGJwM eaGLsN']");}
  get failedStatus () {return $$("//div[@type='error' and contains(text(),'Unsuccessful Delivery')]");}
}

export default new ActiveOrdersPage();
