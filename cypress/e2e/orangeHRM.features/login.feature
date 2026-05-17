Feature: Login Module Cases

  Background:
    Given user navigate to the OrangeHRM login page

  Scenario: Login with Valid Credentials
    When user enter his Valid credentials
    And user click on the login button
    Then user should be redirected to the "Dashboard" page

  Scenario: Login with Invalid Credentials
    When user enter his Invalid credentials
    And user click on the login button
    Then user should see an error message

  Scenario: Login with Empty Credentials
    When user enter his Empty credentials
    And user click on the login button
    Then user should see Required under the Fields