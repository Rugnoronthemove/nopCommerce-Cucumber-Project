package com.demo.nopcommerce.pages;

import com.demo.nopcommerce.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegisterPage extends Utility {

    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement _maleGenderRadioBtn;

    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement _femaleGenderRadioBtn;

    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement _firstNameField;

    @FindBy(xpath = "//input[@id='LastName']")
    WebElement _lastNameField;

    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement _dayDOB;

    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement _monthDOB;

    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement _yearDOB;

    @FindBy(xpath = "//input[@id='Email']")
    WebElement _emailField;

    @FindBy(xpath = "//input[@id='Company']")
    WebElement _companyNameField;

    @FindBy(css = "input#Newsletter")
    WebElement _newsletterCheckBox;

    @FindBy(xpath = "//input[@id='Password']")
    WebElement _passwordField;

    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement _confirmPasswordField;

    @FindBy(id = "register-button")
    WebElement _registerBtn;

    @FindBy(xpath = "//span[@class='field-validation-error']")
    WebElement _requiredFieldErrorText;



    public void clickOnMaleGenderRadioButton() {
        clickOnElement(_maleGenderRadioBtn);
    }

    public void clickOnFemaleGenderRadioButton() {
        clickOnElement(_femaleGenderRadioBtn);
    }

    public void enterFirstName(String firstName) {
        sendTextToElement(_firstNameField, firstName);
    }

    public void enterLastName(String lastName) {
        waitUntilElementToBeClickable(_lastNameField,5);
        sendTextToElement(_lastNameField, lastName);
    }

    public void enterDayForDOB(String day) {
        waitUntilElementToBeClickable(_emailField,5);
        sendTextToElement(_dayDOB, day);
    }

    public void enterMonthForDOB(String month) {
        waitUntilElementToBeClickable(_monthDOB,5);
        sendTextToElement(_monthDOB, month);
    }

    public void enterYearForDOB(String year) {
        waitUntilElementToBeClickable(_yearDOB,5);
        sendTextToElement(_yearDOB, year);
    }

    public void enterRegistrationEmail(String email) {
        waitUntilElementToBeClickable(_emailField,5);
        sendTextToElement(_emailField, email);
    }

    public void enterCompanyName(String coName) {
        waitUntilElementToBeClickable(_companyNameField,5);
        sendTextToElement(_companyNameField, coName);
    }

    public void clickOnNewsletterCheckBox() {
        waitUntilElementToBeClickable(_newsletterCheckBox,5);
        clickOnElement(_newsletterCheckBox);
    }

    public void enterPassword(String pass) {
        waitUntilElementToBeClickable(_passwordField,5);
        sendTextToElement(_passwordField, pass);
    }

    public void enterConfirmPassword(String confPass) {
        waitUntilElementToBeClickable(_companyNameField,5);
        sendTextToElement(_confirmPasswordField, confPass);
    }

    public void clickOnRegisterButton() {
        waitUntilElementToBeClickable(_registerBtn,5);
        clickOnElement(_registerBtn);
    }

    public void verifyRequiredFieldErrorText(String errorMsg) {
        verifyTextAssertEqualsMethod(_requiredFieldErrorText, errorMsg);
    }
}