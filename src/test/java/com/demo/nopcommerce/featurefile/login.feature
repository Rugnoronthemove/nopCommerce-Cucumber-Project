Feature: User Login

  As a Registered User
  I want to specify log in condition
@TIS11-1
  Scenario: Login page
    Given User is on home page
    And   Login link  is present on the page
    And   User clicks on the log in link
    Then  User should navigate to relative page
    And  User should navigate to login page as should see "Welcome, Please Sign In!" message
#    When  User enters "abc123@gmail.com" in user Field
#    And   User enters "abc123" in password field
#    And   User clicks on Login button
#    Then  User Should see "Welcome to account with Username"
#    But   sign in button is not present
