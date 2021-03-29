#@Registration
#Feature: Registration Feature
#
#  @registerLink @scenarioRegister
#  Scenario: Verify error message when user tries to register account without entering first name
#    Given User is on home page
#    When User clicks on register link
#
#  @registerLink @scenarioRegister
#  Scenario: Verify error message when user tries to register account without entering first name
#    Given User is on home page
#    When User clicks on register link
#    And  User clicks on "Male" gender radio button
#    And  User enters last name "Sheth"
#    And  User enters day "2"
#    And  User enters month "May"
#    And  User enters year "2009"
#    And  User enters email address "abc@gmail.com"
#    And  User enters company name "Square1"
#    And  User enters register password "abc123"
#    And  User enters register confirm password "abc123"
#    And  User clicks on Register button
#    Then User should see the error message "First name is required." on register page
#
#  @registerLink @scenarioOutlineRegister
#  Scenario Outline: Verify error message when user tries to register account without entering one of the mandatory fields
#    Given User is on home page
#    When User clicks on register link
#    And  User clicks on "<gender>" gender radio button
#    And  User enters last name "<lastName>"
#    And  User enters day "<day>"
#    And  User enters month "<month>"
#    And  User enters year "<year>"
#    And  User enters email address "<email>"
#    And  User enters company name "<companyName>"
#    And  User enters register password "<password>"
#    And  User enters register confirm password "<coPassword>"
#    And  User clicks on Register button
#    Then User should see the error message "<errorMessage>" on register page
#    Examples:
#      | companyName | gender | lastName | day | month | year | email         | password | coPassword | errorMessage                                         |
#      | Square1     | Male   | Sheth    | 2   | May   | 2009 | abc@gmail.com | abc123   | abc123     | First name is required.                              |
#      | leicester1  | Male   | 2123     | 2   | May   | 2009 | abc@gmail.com | abc123   | abc123     | First name is required.                              |
#      | leicester1  | Female | abcd     | 2   | May   | 2009 | abc@gmail.com | abc123   | abcdef     | The password and confirmation password do not match. |
#      | leicester1  | Female | P123DWSK | 2   | May   | 2009 |               | abc123   | abc123     | Email is required.                                   |
#      | leicester1  | Female | P123DWSK | 2   | May   | 2009 | abc@abc.co    | abc123   |            | Password is required.                                |
#
#  @password
#  Scenario Outline: Test Password field on registration page
#    Given User is on home page
#    When User clicks on register link
#    And  User clicks on "<gender>" gender radio button
#    And  User enters last name "<lastName>"
#    And  User enters day "<day>"
#    And  User enters month "<month>"
#    And  User enters year "<year>"
#    And  User enters email address "<email>"
#    And  User enters company name "<companyName>"
#    And  User enters register password "<password>"
#    And  User enters register confirm password "<coPassword>"
#    And  User clicks on Register button
#    Then User should see the error message "<errorMessage>" on register page
#    Then User should see the error message "<errorMessage1>" on register page
#    Examples:
#      | companyName | gender | lastName | day | month | year | email         | password | coPassword | errorMessage          | errorMessage1                                        |
#      | Square1     | Male   | Sheth    | 2   | May   | 2009 | abc@gmail.com | abc123   | 123123     |                       | The password and confirmation password do not match. |
##      | leicester1  | Male   | 2123     | 2   | May   | 2009 | abc@gmail.com | abc123   | abc12      |                       | The password and confirmation password do not match. |
#      | leicester1  | Male   | 2123     | 2   | May   | 2009 | abc@gmail.com | abc123   |            |                       | Password is required.                                |
#      | leicester1  | Male   | 2123     | 2   | May   | 2009 | abc@gmail.com |          | abc123     | Password is required. | The password and confirmation password do not match. |