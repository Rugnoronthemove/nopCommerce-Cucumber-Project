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


    public void verifyWelcomeTextOnLoginPage(String text){

        verifyTextAssertEqualsMethod(_txt_loginPage,text);

    }

    public void enterEmailInEmailField(String email) {

        sendTextToElement(_txtBox_enterEmail, email);

    }

    public void enterPasswordInPasswordField(String password) {

        sendTextToElement(_txtBox_enterPassword, password);

    }

    public void clickOnLoginButton() {

        clickOnElement(_btn_login);

    }
}
