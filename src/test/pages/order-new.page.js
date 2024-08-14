import { $ } from "@wdio/globals";
import Action from "../lib/action.js";
import data from "../support/data.js";

class OrdersNewPage {

  //section select a service
  get buttonMarine () { return $("//button[@class='sc-gEkIjz ieSkpO sc-fuTSoq bVmLCm']"); }
  get buttonStandard () { return $("//button[@class='sc-gEkIjz ieSkpO sc-fuTSoq hFTyqW']"); }

  //section mother vessel
  get inputSearchVesselName () { return $("//input[@name='to_contact_vessel_name']"); }
  get linkEnterManually () { return $("//div[@class=\"sc-gDszPb brwowz\"]"); }
  get textImoNumber () { return $("//div[@class='sc-kZkypy eGcrlf']"); }
  get selectDate () { return $$("//input[@class='sc-iEXKAA frTsup']"); }
  get selectTime () { return $$("//li[@class='react-datepicker__time-list-item ']"); }

  //popup add vessel
  get inputVesselName () { return $("//input[@name='vesselName']"); }
  get inputImoNumber () { return $("//input[@name='imoNumber']"); }
  get buttonCancel () { return $("//button[contains(text(),'Cancel')]"); }
  get buttonAdd () { return $$("//button[@class='sc-gEkIjz ieSkpO' and contains(text(),'Add')]"); }

  //section pickup and delivery details
  get buttonSea () { return $$("//button[@class='sc-gEkIjz ieSkpO sc-cQCQeq imvElJ' and contains(text(),'Sea')]"); }
  get inputInstructionToDriver () { return $$("//input[@placeholder='E.g. Meet at the loading bay']"); }

  get textStreetAddress () { return $("//div[@class='sc-dJltXf gouCCT']"); }

  //popup collect from and send to for location
  get buttonLandCollect () { return $$("//button[@class='sc-gEkIjz ieSkpO sc-cQCQeq imvElJ' and contains(text(),'Land')]"); }
  get inputStreetAddress () { return $("//input[@name='street-address']"); }
  get listStreetAddress () { return $("#dropdownRefid"); }
  get buttonConfirmLocationDetails () { return $("//button[@class='sc-gEkIjz crspHf']"); }

  //popup collect from and send to for contact details land
  get inputUnitNumber () { return $("//input[@placeholder='#01-01']"); }
  get inputBerthNumber () { return $("//input[@placeholder='JP 04']"); }

  get buttonEnterContactDetails () { return $("//button[@class='sc-gEkIjz ieSkpO sc-kuCHnY dDnsRk']"); }
  get buttonEnterContactDetailsEdit () { return $$("//button[@class='sc-gEkIjz ieSkpO sc-cYYuRe jZimFc']"); }

  //popup collect from and send to for contact details sea
  get inputCompanyName () { return $("//input[@name='Company Name']"); }
  get inputVehicleName () { return $("//input[@name='Vehicle Name']"); }
  get inputName () { return $("//input[@name='name']"); }
  get inputContactNumber () { return $("//input[@placeholder='8100 8989']"); }
  get buttonConfirmContactDetails () { return $("//button[@class='sc-gEkIjz crspHf']"); }

  //section send to
  get buttonLandSend () { return $("//button[@class='sc-gEkIjz ieSkpO sc-cQCQeq imvElJ' and contains(text(),'Land')]"); }
  get buttonInputContactDetails () { return $$("//button[@class='sc-gEkIjz ieSkpO sc-cYYuRe jZimFc']"); }
  get buttonSelectVehicle () { return $("//button[@class='sc-gEkIjz ieSkpO sc-dmA-DAn hsaOBl']"); }
  get inputReferenceId () { return $("//input[@name='tracking-id']"); }

  //popup select vehicle
  get listVehicle () { return $$("//button[@class='sc-gweoQa jemjmO sc-gJCZQp hAfrsX']"); }

  //section cargo details
  get selectDescriptionCargo () { return $("//button[@class='sc-bVHCgj xFVWM']"); }
  get listDescriptionCargo () { return $$("//div[@class='sc-bVVIoq iGzNDZ']"); }

  get buttonPlaceOrder () { return $("//button[@class='sc-gEkIjz bTDWtE sc-gAhbiu duqcro']"); }

  //popup confirm order
  get checkboxConfirmOrder () { return $$("//div[@class='sc-jnOGJG ezChvI']"); }
  get buttonSubmit () { return $("//button[@class='sc-gEkIjz ieSkpO' and contains(text(),'Confirm')]"); }
  get buttonOk () { return $("//button[@class='sc-gEkIjz ieSkpO' and contains(text(),'OK')]"); }

  async selectService() {
    await Action.pauseUntill(1000);
    await Action.clickOn(await this.linkEnterManually);
    await Action.setValue(await this.inputVesselName, data.order.vesselName);
    await Action.setValue(await this.inputImoNumber, data.order.imoNumber);
    await Action.clickOn(await this.buttonAdd[1]);
    await Action.pauseUntill(1000);
    await Action.expectToHaveText(await this.textImoNumber, "IMO 1234567");
    await Action.pauseUntill(1000);
    await Action.chooseDate(await this.selectDate[0]);
    await Action.clickOn(await this.selectTime[0]);
    await Action.pauseUntill(1000);
    await Action.chooseDate(await this.selectDate[1]);
    await Action.clickOn(await this.selectTime[1]);
  };

  async collectFrom() {
    await Action.scrollAndClickOn(await this.buttonLandCollect[0]);
    //popup collect from for location
    await Action.setValue(await this.inputStreetAddress, data.collect.streetAddress);
    await Action.pauseUntill(2000);
    await Action.clickOn(await this.listStreetAddress);
    await Action.setValue(await this.inputUnitNumber, data.collect.unitNumber);
    await Action.setValue(await this.inputBerthNumber, data.collect.berthNumber);
    await Action.clickOn(await this.buttonConfirmLocationDetails);
    //popup collect from for contact details
    await Action.scrollAndClickOn(await this.buttonEnterContactDetails);
    await Action.setValue(await this.inputCompanyName, data.collect.companyName);
    await Action.setValue(await this.inputVehicleName, data.collect.vehicleName);
    await Action.setValue(await this.inputName, data.collect.name);
    await Action.setValue(await this.inputContactNumber, data.collect.contactNumber);
    await Action.clickOn(await this.buttonConfirmContactDetails);
    await Action.setValue(await this.inputInstructionToDriver[0], data.collect.instructionToDriver);
  };

  async sendTo() {
    await Action.scrollAndClickOn(await this.buttonLandSend);
    //popup send to for location
    await Action.setValue(await this.inputStreetAddress, data.send.streetAddress);
    await Action.pauseUntill(2000);
    await Action.clickOn(await this.listStreetAddress);
    await Action.setValue(await this.inputUnitNumber, data.send.unitNumber);
    await Action.setValue(await this.inputBerthNumber, data.send.berthNumber);
    await Action.clickOn(await this.buttonConfirmLocationDetails);
    //popup send to for contact details
    if (await Action.expectToExist(await this.buttonEnterContactDetails)) {
      await Action.scrollAndClickOn(await this.buttonEnterContactDetails);
    }
    else {
      await Action.expectToExist(await this.buttonEnterContactDetailsEdit[1]);
      await Action.scrollAndClickOn(await this.buttonEnterContactDetailsEdit[1]);
    }
    await Action.setValue(await this.inputCompanyName, data.send.companyName);
    await Action.setValue(await this.inputVehicleName, data.send.vehicleName);
    await Action.setValue(await this.inputName, data.send.name);
    await Action.setValue(await this.inputContactNumber, data.send.contactNumber);
    await Action.pauseUntill(1000);
    await Action.clickOn(await this.buttonConfirmContactDetails);
    await Action.scrollInto(await this.inputInstructionToDriver[1]);
    await Action.setValue(await this.inputInstructionToDriver[1], data.send.instructionToDriver);
    await Action.pauseUntill(2000);
    await Action.waitForExist(await this.buttonSelectVehicle);
    await Action.clickOn(await this.buttonSelectVehicle);
    await Action.pauseUntill(2000);
    await Action.clickOn(await this.listVehicle[3]);
    await Action.pauseUntill(1000);
    await Action.setValue(await this.inputReferenceId, data.send.referenceId);
  };

  async cargoDetails() {
    await Action.scrollAndClickOn(await this.selectDescriptionCargo);
    await Action.pauseUntill(2000);
    await Action.clickOn(await this.listDescriptionCargo[0]);
  };
};

export default new OrdersNewPage();
