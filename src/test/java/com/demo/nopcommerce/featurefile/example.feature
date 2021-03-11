@Registration
Feature: User Registration
  User registration on zoopla using google sign on

  Background:
    Given I launch chrome browser
    And   I enter "Zoopla.co.uk"
    When  I click on Register link

  @positive @regression
  Scenario: verify user can registration using an existing google account
    Then  I should see “Sign in with existing google account”

  @positive @regression
  Scenario: verify user can complete registration with a google account
    Then  I should see “Sign in with existing google account”
    When  I enter my gmail “xyz@gmail.com” in email field
    And   I enter my gmail password “Pass1234” in password field
    Then  I should be taken to the my zoopla account page

  @negative @smoke
  Scenario: verify user cannot complete registration with a non-google account
    Then   I should see “Sign in with existing google account”
    When   I enter my gmail “xyz@yahoomail.com” in email field
    And    I enter my gmail password “Pass1234” in password field
    Then   An error message will be displayed on screen “Please use a valid gmail account”

  @positive @regression
  Scenario Outline: verify user can complete registration with a google account
    Then   I should see “Sign in with existing google account”
    When   I enter my gmail “<gmailEmail>” in email field
    And    I enter my gmail password “<gmailPass>” in password field
    Then   I should be taken to the my zoopla account page
    Examples:
      | gmailEmail    | gmailPass |
      | xyz@gmail.com | Pass123   |
      | xyz@gmail.com |           |
      |               | Pass123   |