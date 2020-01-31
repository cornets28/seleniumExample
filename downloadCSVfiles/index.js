const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const proxy = require("selenium-webdriver/proxy");
const options = new chrome.Options();

const proxyServer = "43.225.67.39:53905";

// options.setPreference(
//   "browser.download.dir",
//   "/Users/samuelcornet/Desktop/mySeleniumDownloads"
// );
// options.setPreference("browser.download.folderList", 2);
// options.setPreference(
//   "browser.helperApps.neverAsk.saveToDisk",
//   "application/x-csv"
// );

const driver = new Builder()
  .forBrowser("chrome")
  // .setFirefoxOptions(options)
  .setProxy(
    proxy.manual({
      http: proxyServer,
      https: proxyServer
    })
  )
  .build();
driver.get("https://whatismyipaddress.com/");
