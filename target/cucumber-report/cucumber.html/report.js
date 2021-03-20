$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login",
  "description": "As a Registered User\r\nI want to specify log in condition",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 45142547900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login page",
  "description": "",
  "id": "user-login;login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Login link  is present on the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the log in link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should navigate to relative page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should navigate to login page as should see \"Welcome, Please Sign In\" message",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters \"abc123@gmail.com\" in user Field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters \"abc123\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 1430675900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.loginLinkIsPresentOnThePage()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnTheLogInLink()"
});
formatter.result({
  "duration": 2739788800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldNavigateToRelativePage()"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In",
      "offset": 50
    }
  ],
  "location": "LoginSteps.userShouldNavigateToLoginPageAsShouldSeeMessage(String)"
});
formatter.result({
  "duration": 301622300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...come, Please Sign In[]\u003e but was:\u003c...come, Please Sign In[!]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.demo.nopcommerce.utility.Utility.verifyTextAssertEqualsMethod(Utility.java:219)\r\n\tat com.demo.nopcommerce.pages.LoginPage.verifyWelcomeTextOnLoginPage(LoginPage.java:25)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.LoginSteps.userShouldNavigateToLoginPageAsShouldSeeMessage(LoginSteps.java:70)\r\n\tat ✽.And User should navigate to login page as should see \"Welcome, Please Sign In\" message(src/test/java/com/demo/nopcommerce/featurefile/login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 13
    }
  ],
  "location": "LoginSteps.userEntersInUserField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 13
    }
  ],
  "location": "LoginSteps.userEntersInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2074158400,
  "status": "passed"
});
});