package com.demo.nopcommerce.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = ".", tags = {"@regression","@smoke"}, monochrome = true
)
public class CukeTest {

}
