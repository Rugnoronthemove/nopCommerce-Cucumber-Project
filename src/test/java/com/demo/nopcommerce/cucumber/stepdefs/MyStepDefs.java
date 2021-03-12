package com.demo.nopcommerce.cucumber.stepdefs;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.pages.HomePage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class MyStepDefs {

    @Given("^I click Login on Home page$")
    public void iClickLoginOnHomePage() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^User should be navigated to relevant page$")
    public void userShouldBeNavigatedToRelevantPage() {

    }

    @Given("^I am on Home page$")
    public void iAmOnHomePage() {
        Reporter.addStepLog("I am on Home Page: https://demo.nopcommerce.com/");
    }

    @And("^I click Login link on Home page$")
    public void iClickLoginLinkOnHomePage() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^Text \"([^\"]*)\" is visible on the relevant page$")
    public void textIsVisibleOnTheRelevantPage(String pageText) {

    }
}
