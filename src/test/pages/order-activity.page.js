import { $ } from "@wdio/globals";
import Action from "../lib/action.js";
import data from "../support/data.js";

class OrderActivity {

    get completeStatus () { return $("//div[@type=\"success\"]");}
    get pickUpSuccessfulState () { return $("//span[text()=\"Pickup Successful\"]");}
    get deliverySuccessfulState () { return $("//span[text()=\"Delivery Successful\"]");}
    get deliveryArrivingState () { return $("//div[text()=\"Delivery Arriving\"]");}
    get pendingDeliveryState () { return $("//div[text()=\"Pending Delivery\"]");}
    get pickUpArivingState () { return $("//div[text()=\"Pickup Arriving\"]");}
    get pendingPickUpState () { return $("//div[text()=\"Pending Pickup\"]");}
    get acceptedState () { return $("//div[text()=\"Accepted\"]");}
    get broadCastingState () { return $("//div[text()=\"Broadcasting\"]");}
    get pendingBroadcastState () { return $("//div[text()=\"Pending Broadcast\"]");}
    get orderPlaced () { return $("//div[text()=\"Order Placed\"]");}
    get selectorToScroll () { return $("//div[@class=\"sc-leXBFf sc-jNwOwP lfLrmx jlMvlz\"]");}

    async orderActivityPage (){
        await Action.expectToExist(await this.completeStatus);
        await Action.expectToExist(await this.pickUpSuccessfulState);
        // await Action.scrollPage(await this.selectorToScroll, "up", 1);
        await Action.expectToExist(await this.pickUpSuccessfulState);
        //await Action.scrollPage(await this.selectorToScroll);
        await Action.expectToExist(await this.deliverySuccessfulState);
        await Action.expectToExist(await this.deliveryArrivingState);
        await Action.expectToExist(await this.pendingDeliveryState);

    }
   
}
export default new OrderActivity();