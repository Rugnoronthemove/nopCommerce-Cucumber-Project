package com.demo.nopcommerce.pages;

import com.demo.nopcommerce.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {


    @FindBy(css = "#Email")
    WebElement _txtBox_enterEmail;

    @FindBy(css = "#Password")
    WebElement _txtBox_enterPassword;

    @FindBy(linkText = "Log in")
    WebElement _btn_login;

    @FindBy(xpath = "//div[@class='page-title']//h1")
    WebElement _txt_loginPage;

    @FindBy (xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement _errorTxt_login;

    @FindBy(id = "RememberMe")
    WebElement _chk_rememberMe;

    @FindBy(id = "Email-error")
    WebElement _errorMsg_email;

    public boolean verifyEmailErrorMessageIsDisplayed() {
        return elementIsDisplayed(_errorMsg_email);
    }

    public boolean verifyRemberMeCheckboxisEnabled() {
        return elementIsSelected(_chk_rememberMe);
    }

    public void verifyErrorMessageWhenLoginIsUnsuccessful(String errorMsg) {
        waitUntilElementToBeClickable(_errorTxt_login,5);
        verifyTextAssertEqualsMethod(_errorTxt_login, errorMsg);
    }

    public void verifyWelcomeTextOnLoginPage(String text){

        verifyTextAssertEqualsMethod(_txt_loginPage,text);

    }

    public void enterEmailInEmailField(String email) {
        waitUntilElementToBeClickable(_txtBox_enterEmail,5);
        sendTextToElement(_txtBox_enterEmail, email);

    }

    public void enterPasswordInPasswordField(String password) {
        waitUntilElementToBeClickable(_txtBox_enterPassword,5);
        sendTextToElement(_txtBox_enterPassword, password);

    }

    public void clickOnLoginButton() {

        clickOnElement(_btn_login);

    }

    public boolean passwordFieldIsDisplayed() {

        return elementIsDisplayed(_txtBox_enterPassword);
    }
}
