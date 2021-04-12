$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login",
  "description": "As a Registered User\r\nI want to specify log in condition",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 44827624800,
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
  "name": "User should navigate to login page as should see \"Welcome, Please Sign In!\" message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 6667169500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.loginLinkIsPresentOnThePage()"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnTheLogInLink()"
});
formatter.result({
  "duration": 6038653900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldNavigateToRelativePage()"
});
formatter.result({
  "duration": 42500,
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
  "duration": 1758287400,
  "status": "passed"
});
formatter.after({
  "duration": 3492839600,
  "status": "passed"
});
});