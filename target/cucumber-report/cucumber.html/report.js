$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/featurefile/example.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#@Registration"
    }
  ],
  "line": 2,
  "name": "User Registration",
  "description": "",
  "id": "user-registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 41130153100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Click on Home page links",
  "description": "",
  "id": "user-registration;click-on-home-page-links",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I wait for two seconds",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login link on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Text \"Welcome, Please Sign In!\" is visible on the relevant page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1993809900,
  "status": "passed"
});
formatter.match({
  "location": "ExtraSteps.iWaitForTwoSeconds()"
});
formatter.result({
  "duration": 95200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.iClickLoginLinkOnHomePage()"
});
formatter.result({
  "duration": 13377903100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 6
    }
  ],
  "location": "MyStepDefs.textIsVisibleOnTheRelevantPage(String)"
});
formatter.result({
  "duration": 10882800,
  "status": "passed"
});
formatter.after({
  "duration": 1876946200,
  "status": "passed"
});
});