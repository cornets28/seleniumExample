const { Builder } = require("selenium-webdriver")
async function facebook() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://facebook.com")
}
facebook()