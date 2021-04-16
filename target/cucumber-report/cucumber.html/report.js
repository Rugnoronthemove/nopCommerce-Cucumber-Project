$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/featurefile/registration.feature");
formatter.feature({
  "line": 2,
  "name": "Registration Feature",
  "description": "",
  "id": "registration-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.before({
  "duration": 36834277900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@registerLink"
    },
    {
      "line": 4,
      "name": "@scenarioRegister"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on register link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 1730965700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.userClicksOnRegisterLink()"
});
formatter.result({
  "duration": 3239891000,
  "status": "passed"
});
formatter.after({
  "duration": 1610046100,
  "status": "passed"
});
});