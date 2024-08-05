import { expect } from "expect-webdriverio";

const date = new Date();
const getDate = date.getDate();

class Action {

  async pauseUntill(milisecond) {
    await browser.pause(milisecond);
  }

  async clickOn(selector) {
    await selector.waitForExist();
    await selector.click();
  };

  async setValue(selector, value) {
    await selector.waitForExist();
    await selector.setValue(value);
  }

  async expectToHaveText(selector, value) {
    const elementText = await selector.getText();
    await expect(elementText).toEqual(value);
  }

  async expectToExist(selector) {
    await expect(selector).toBeTruthy();
  };

  async getText(selector) {
    const text = await selector.getText();
    return text;
  };

  async scrollIntoView(arrow, element) {
    while (!await element.isDisplayed()) {
      if (await element.isExisting()) {
        await this.pauseUntill(1000);
        await element.click();
        break;
      }
      else if (!await element.isExisting()) {
        await arrow.click();
        await this.pauseUntill(1000);
      }
    }
  };

  async scrollInto(selector) {
    await selector.waitForExist();
    await selector.scrollIntoView();
  };

  async scrollAndClickOn(selector) {
    await selector.waitForClickable();
    await this.pauseUntill(2000);
    await selector.click();
  };

  async scrollIntoIndex(selector, index) {
    await expect(selector).toBeTruthy();
    await selector[index].scrollIntoView();
    await this.pauseUntill(1000);
  };

  async waitForExist(selector) {
    await selector.waitForExist();
  }

  async chooseDate(selector) {
    const date = await $("//div[text()='" + getDate + "']");
    await selector.waitForExist();
    await selector.click();
    await date.waitForClickable();
    await date.click();
  };
};

export default new Action();
