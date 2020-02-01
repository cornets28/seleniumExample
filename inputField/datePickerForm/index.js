const { Builder, By } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

async function datePickerForm() {
  try {
    await driver.get(
      "https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form"
    );
    await (
      await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']"))
    ).sendKeys("Feb 4, 2020");

    await (
      await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']"))
    ).sendKeys("Jan 29, 2020 - Feb 3, 2020");

    await driver.findElement(By.xpath("//button[@name='submit']")).click();
  } catch (error) {
    console.log(error);
  }
}

datePickerForm();
