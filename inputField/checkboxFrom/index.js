const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function radioButtonForm() {
  try {
    await driver.get(
      "https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form"
    );
    await driver
      .findElement(By.xpath("//input[@id='name']"))
      .sendKeys("Sammy Lee");
    await (await driver)
      .findElement(By.xpath("//input[@id='comment']"))
      .sendKeys("Optional");
    await driver
      .findElement(
        By.xpath(
          "//input[@value='two-bed-appartment']/following::span"
        )
      )
      .click();
    await driver
      .findElement(By.xpath("//nb-checkbox[@value='dinner']/label/span"))
      .click();

    await driver.findElement(By.name("submit")).click();
  } catch (error) {
    console.log(error);
  }
}
radioButtonForm();
