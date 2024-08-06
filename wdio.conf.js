import "dotenv/config";

export const config = {
  runner: "local",
  specs: [
    ".src/test/specs/*.js",
  ],
  exclude: [],
  suites: {
    login: ["./src/test/specs/login.js"],
    order: ["./src/test/specs/order.js"],
    checkOrder: ["./src/test/specs/check-order.js"],
  },
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          //'headless',
          "no-sandbox",
          "start-maximized",
        ],
      },
    },
  ],
  logLevel: "info",
  baseUrl: process.env.BASE_URL,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    timeout: 180000,
  },
};
