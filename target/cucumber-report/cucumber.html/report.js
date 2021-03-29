$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/featurefile/accountHome.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature with Background",
  "description": "",
  "id": "login-feature-with-background",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18577492400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on the log in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should navigate to login page as should see \"Welcome, Please Sign In!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 3114250800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnTheLogInLink()"
});
formatter.result({
  "duration": 2739036100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 50
    }
  ],
  "location": "LoginSteps.userShouldNavigateToLoginPageAsShouldSeeMessage(String)"
});
formatter.result({
  "duration": 180927200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify that password field is displayed on Login Page",
  "description": "",
  "id": "login-feature-with-background;verify-that-password-field-is-displayed-on-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#  Then  Remember me check box is enabled"
    }
  ],
  "line": 11,
  "name": "Please enter your email address message is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userIsOnLoginPage()"
});
formatter.result({
  "duration": 83200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.pleaseEnterYourEmailAddressMessageIsVisible()"
});
formatter.result({
  "duration": 10567424600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#Email\\-error\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-3M1HFB0\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\HEMALS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58839}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7cc2835c630464ee8e001807f7aed532\n*** Element info: {Using\u003did, value\u003dEmail-error}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.elementIsDisplayed(Utility.java:163)\r\n\tat com.demo.nopcommerce.pages.LoginPage.verifyEmailErrorMessageIsDisplayed(LoginPage.java:33)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.LoginSteps.pleaseEnterYourEmailAddressMessageIsVisible(LoginSteps.java:86)\r\n\tat ✽.Then Please enter your email address message is visible(src/test/java/com/demo/nopcommerce/featurefile/accountHome.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1988067900,
  "status": "passed"
});
});