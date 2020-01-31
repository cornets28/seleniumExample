const { Builder } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function openWebSite() {
  try {
    await (await driver).get("http://yahoo.com");
    await (await driver).get("http://google.com");
  } catch (error) {
    console.log(error);
  }
}
openWebSite();
