Feature: PIM Module E2E scenarios 

    Background:
        Given user navigate to the OrangeHRM login page
        And Admin logged in Via API
        Then user should be redirected to the "Dashboard" page


    Scenario: Add Employee
        When user clicks on PIM Module
        And User Naviage to PIM Module
        And user clicks on Add Button
        And User fills all the employee Data
        And User clicks on Save Button
        Then employee should be added successfully

    # Scenario: Search for Employee
    #     When user clicks on PIM Module
    #     And User Naviage to PIM Module
    #     And user clicks on Add Button
    #     And User fills all the employee Data
    #     And User clicks on Save Button
    #     Then employee should be added successfully
    #     When User clciks on Employee list
    #     And user searches for the created employee
    #     Then Verify Search Result


    # Scenario: Edit Employee Info
    #     When user clicks on PIM Module
    #     And User Naviage to PIM Module
    #     And user clicks on Add Button
    #     And User fills all the employee Data
    #     And User clicks on Save Button
    #     Then employee should be added successfully
    #     When User clciks on Employee list
    #     And  user searches for the created employee
    #     And  Verify Search Result
    #     And User Clicks on Edit Icon
    #     And User edit first name
    #     And  User clicks on Save Button
    #     Then employee details should updated successfully


    # Scenario: Delete Employee
    #     When user clicks on PIM Module
    #     And User Naviage to PIM Module
    #     And user clicks on Add Button
    #     And User fills all the employee Data
    #     And User clicks on Save Button
    #     Then employee should be added successfully
    #     When User clciks on Employee list
    #     And  user searches for the created employee
    #     And  Verify Search Result
    #     And  user clicks on Delete Icon
    #     And  Verify Delete Confirmation popup appear
    #     Then User Clicks on Confirm Delete
    #     Then Verify Employee Deleted successfully


