package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.HomePage;
import com.demo.nopcommerce.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegistrationSteps {

    @When("^User clicks on register link$")
    public void userClicksOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @And("^User enters last name \"([^\"]*)\"$")
    public void userEntersLastName(String lastName) {
        new RegisterPage().enterLastName(lastName);
    }

    @And("^User enters day \"([^\"]*)\"$")
    public void userEntersDay(String day) {
        new RegisterPage().enterDayForDOB(day);
    }

    @And("^User enters month \"([^\"]*)\"$")
    public void userEntersMonth(String month) {
        new RegisterPage().enterMonthForDOB(month);
    }

    @And("^User enters year \"([^\"]*)\"$")
    public void userEntersYear(String year) {
        new RegisterPage().enterYearForDOB(year);
    }

    @And("^User enters email address \"([^\"]*)\"$")
    public void userEntersEmailAddress(String email) {
        new RegisterPage().enterRegistrationEmail(email);
    }

    @And("^User enters company name \"([^\"]*)\"$")
    public void userEntersCompanyName(String coName) {
        new RegisterPage().enterCompanyName(coName);
    }

    @And("^User enters register password \"([^\"]*)\"$")
    public void userEntersRegisterPassword(String pwd) {
        new RegisterPage().enterPassword(pwd);
    }

    @And("^User enters register confirm password \"([^\"]*)\"$")
    public void userEntersRegisterConfirmPassword(String conPwd) {
        new RegisterPage().enterConfirmPassword(conPwd);
    }

    @And("^User clicks on Register button$")
    public void userClicksOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^User should see the error message \"([^\"]*)\" on register page$")
    public void userShouldSeeTheErrorMessageOnRegisterPage(String errMsg) {
        new RegisterPage().verifyRequiredFieldErrorText(errMsg);
    }

    @And("^User clicks on \"([^\"]*)\" gender radio button$")
    public void userClicksOnGenderRadioButton(String genderValue) {
        switch (genderValue) {
            case "Male":
                new RegisterPage().clickOnMaleGenderRadioButton();
                break;
            case "Female":
                new RegisterPage().clickOnFemaleGenderRadioButton();
                break;
            default:
                throw new IllegalStateException("Unexpected value: " + genderValue);
        }
    }
}
