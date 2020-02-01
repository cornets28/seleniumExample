const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function dropdownForm() {
  try {
    await driver.get(
      "https://rori4.github.io/selenium-practice/#/pages/practice/file-form"
    );
    await driver
      .findElement(By.xpath("//input[@formcontrolname='file']"))
      .sendKeys(__dirname + "\\estate-and-locations.png");
    await driver.findElement(By.xpath("//button[@name='submit']")).click();
  } catch (error) {
    console.log(error);
  }
}

dropdownForm();
