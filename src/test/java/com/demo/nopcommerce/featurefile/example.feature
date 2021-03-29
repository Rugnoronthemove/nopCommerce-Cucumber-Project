#Feature: User Registration
#
#  Scenario: Click on Home page links
#    Given I am on Home page
#    And   I wait for two seconds
#    And   I click Login link on Home page
#    Then  Text "Welcome, Please Sign In!" is visible on the relevant page

#  Scenario Outline: Click on Home page links
#    Given I click "<link>" on Home page
#    Then  User should be navigated to relevant page
#    Then  Text "<pageText>" is visible on the relevant page
#
#    Examples:
#      | link  | pageText                   |
#      | Login | "Welcome, Please Sign In!" |

#  User registration on zoopla using google sign on
#
#  Background:
#    Given I launch chrome browser
#    And   I enter "Zoopla.co.uk"
#    When  I click on Register link
#
#  @positive @regression
#  Scenario: verify user can registration using an existing google account
#    Then  I should see “Sign in with existing google account”
#
#  @positive @regression
#  Scenario: verify user can complete registration with a google account
#    Then  I should see “Sign in with existing google account”
#    When  I enter my gmail “xyz@gmail.com” in email field
#    And   I enter my gmail password “Pass1234” in password field
#    Then  I should be taken to the my zoopla account page
#
#  @negative @smoke
#  Scenario: verify user cannot complete registration with a non-google account
#    Then   I should see “Sign in with existing google account”
#    When   I enter my gmail “xyz@yahoomail.com” in email field
#    And    I enter my gmail password “Pass1234” in password field
#    Then   An error message will be displayed on screen “Please use a valid gmail account”
#
#  @positive @regression
#  Scenario Outline: verify user can complete registration with a google account
#    Then   I should see “Sign in with existing google account”
#    When   I enter my gmail “<gmailEmail>” in email field
#    And    I enter my gmail password “<gmailPass>” in password field
#    Then   I should be taken to the my zoopla account page
#    Examples:
#      | gmailEmail    | gmailPass |
#      | xyz@gmail.com | Pass123   |
#      | xyz@gmail.com |           |
#      |               | Pass123   |
#
#    Scenario Outline: verify link texts on home page header bar
#      Given User launches nop-commerce website
#      And   Login text is visible on home page
#      Then  User should be able to see "<linkText>" link text displayed on the header bar of home page
#
#      Examples:
#      | linkText  |
#      | Computers |