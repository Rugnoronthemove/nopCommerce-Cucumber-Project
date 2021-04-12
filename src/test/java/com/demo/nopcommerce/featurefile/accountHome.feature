#Feature: Login feature with Background
#
#  Background:
#    Given User is on home page
#    When User clicks on the log in link
#    Then User should navigate to login page as should see "Welcome, Please Sign In!" message
#
#  Scenario: Verify that password field is displayed on Login Page
#    Given User is on login page
#    Then  Please enter your email address message is visible

#  Scenario: Verify the error message when login fails
#    Given User enters "xyz@gmail.com" in user Field
#    When User enters "abc123" in password field
#    And User clicks on Login button
#    Then User should should see "Login was unsuccessful. Please correct the errors and try again." the error message
#
#  Scenario: Verify the error message when password field's left empty
#    Given User enters "abc@gmail.com" in user Field
#    When User clicks on Login button
#    Then User should should see "Login was unsuccessful. Please correct the errors and try again." the error message