package com.demo.nopcommerce.cucumber.stepdefs;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.pages.HomePage;
import com.demo.nopcommerce.pages.LoginPage;
import cucumber.api.java.en.*;

public class LoginSteps {

    @Given("^User is on home page$")
    public void userIsOnHomePage() {
        Reporter.addStepLog("I am on Home Page: https://demo.nopcommerce.com/");
    }

    @And("^Login link  is present on the page$")
    public void loginLinkIsPresentOnThePage() {
    }

    @And("^User clicks on the log in link$")
    public void userClicksOnTheLogInLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^User should navigate to relative page$")
    public void userShouldNavigateToRelativePage() {
    }

    @When("^User enters \"([^\"]*)\" in user Field$")
    public void userEntersInUserField(String userName) {

        new LoginPage().enterEmailInEmailField(userName);

    }

    @And("^User enters \"([^\"]*)\" in password field$")
    public void userEntersInPasswordField(String pass) {

        new LoginPage().enterPasswordInPasswordField(pass);

    }

    @And("^User clicks on Login button$")
    public void userClicksOnLoginButton() {

        new LoginPage().clickOnLoginButton();

    }

    @Then("^User Should see \"([^\"]*)\"$")
    public void userShouldSee(String msg) {
    }

    @But("^sign in button is not present$")
    public void signInButtonIsNotPresent() {
    }

    @And("^User should navigate to login page as should see \"([^\"]*)\" message$")
    public void userShouldNavigateToLoginPageAsShouldSeeMessage(String loginPageMsg) {

        new LoginPage().verifyWelcomeTextOnLoginPage(loginPageMsg);

    }

    @Then("^User should should see \"([^\"]*)\" the error message$")
    public void userShouldShouldSeeTheErrorMessage(String errorMsg) {
        new LoginPage().verifyErrorMessageWhenLoginIsUnsuccessful(errorMsg);
    }

    @Given("^User is on login page$")
    public void userIsOnLoginPage() {
    }

    @Then("^Password field is displayed$")
    public void passwordFieldIsDisplayed() {
        new LoginPage().passwordFieldIsDisplayed();
    }

    @Then("^Remember me check box is enabled$")
    public void rememberMeCheckBoxIsEnabled() {
        new LoginPage().verifyRemberMeCheckboxisEnabled();
    }

    @Then("^Please enter your email address message is visible$")
    public void pleaseEnterYourEmailAddressMessageIsVisible() {
        new LoginPage().verifyEmailErrorMessageIsDisplayed();
    }
}
