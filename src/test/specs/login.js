import LoginPage from "../pages/login.page.js";
import data from "../support/data.js";

describe("Feature Login", () => {

  before(() => {
    LoginPage.open();
  });

  it("login with valid credentials", async () => {
    await LoginPage.loginValid(data.credentials.validEmail, data.credentials.validPassword);
  });
});
