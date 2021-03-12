package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement _link_register;

    @FindBy(linkText = "Log in")
    WebElement _link_login;

    public void clickOnLoginLink() {
        //Reporter coming from cucumber.listener to add test steps on the extent report
        Reporter.addStepLog("Clicking on login link: " + _link_login);
        clickOnElement(_link_login);
        log.info("Clicking on login link: " + _link_login);
    }

    public void clickOnRegisterLink() {
        clickOnElement(_link_register);
        Reporter.addStepLog("Clicking on register link: " + _link_register);
        log.info("Clicking on register link: " + _link_register);
    }
}
