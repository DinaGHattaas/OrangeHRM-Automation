import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AdminloginAPI } from "../Apis/api";
import {
  generateRandomNumber,
  getRandomFirstName,
  getRandomLastName,
} from "../utils/utils";

let fullName: string;
let NewfullName: string;
let EmployeeID: any;

Given("Admin logged in Via API", () => {
  AdminloginAPI();
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );
});

// Add Employee
When("user clicks on PIM Module", () => {
  cy.get(".oxd-main-menu-item").contains("PIM").click();
});

Then("User Naviage to PIM Module", () => {
  cy.get(".oxd-topbar-header-breadcrumb-module").contains("PIM");
});

Then("user clicks on Add Button", () => {
  cy.get(".oxd-button.oxd-button--medium.oxd-button--secondary")
    .contains("Add")
    .click();
});

Then("User fills all the employee Data", () => {
  cy.fixture("users").then((data) => {
    const Employee = data.EmployeeData;
    const randomFirstName = getRandomFirstName();
    const randomLastName = getRandomLastName();
    fullName = `${randomFirstName} ${Employee.MiddleName}`;
    EmployeeID = `012${generateRandomNumber()}`;
    cy.get("input[name='firstName']").type(randomFirstName);
    cy.get("input[name='middleName']").type(Employee.MiddleName);
    cy.get("input[name='lastName']").type(randomLastName);
    cy.get(".oxd-input--active").eq(3).clear().type(EmployeeID);
  });
});

// Add employee with missing required Fields

Then("User leaves FirstName and LastName fields empty", () => {
  cy.fixture("users").then((data) => {
    const Employee = data.EmployeeData;
    cy.get("input[name='firstName']").clear();
    cy.get("input[name='middleName']").type(Employee.MiddleName); // enter only middle name
    cy.get("input[name='lastName']").clear();
  });
});
// Assertion of required fields names
Then("user should see Required under the First Name & Last Name Fields", () => {
  cy.get(".oxd-input-field-error-message")
    .eq(0)
    .should("be.visible")
    .and("have.text", "Required");
  cy.get(".oxd-input-field-error-message")
    .eq(1)
    .should("be.visible")
    .and("have.text", "Required");
});
Then("User clicks on Save Button", () => {
  cy.contains("button", "Save").click();
});

Then("employee should be added successfully", () => {
  cy.url({ timeout: 10000 }).should("include", "viewPersonalDetails");
  cy.get(".orangehrm-main-title")
    .first()
    .should("have.text", "Personal Details");
});

// search for Employee
Then("User clciks on Employee list", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
  );
});

Then("user searches for the created employee", () => {
  cy.get('input[placeholder="Type for hints..."]').first().type(fullName);
  cy.contains("button", " Search ").click();
});
// Search Assertion
Then("Verify Search Result", () => {
  cy.get(".oxd-table-card", { timeout: 10000 }).should("contain", fullName);
  cy.log(`Assertion Passed: Found ${fullName} in the search results!`);
});

// Edit employee
Then("User Clicks on Edit Icon", () => {
  cy.get(".oxd-icon.bi-pencil-fill").first().click();
});
Then("User edit first name", () => {
  const newName = "UpdatedName_" + generateRandomNumber();
  cy.get('input[name="firstName"]').clear().type(newName);
  NewfullName = newName;
});

// Edit Assertion
Then("employee details should updated successfully", () => {
  // Verify Toaster appear
  cy.get(".oxd-toast")
    .should("be.visible")
    .and("contain", "Successfully Updated");
  // go back again to employee list
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
  );
  // Search Step with the new name
  cy.get('input[placeholder="Type for hints..."]').first().type(NewfullName);
  cy.contains("button", " Search ").click();
  // verify that new name in the table
  cy.get(".oxd-table-card", { timeout: 10000 }).should("contain", NewfullName);
});

// Delete Employee
Then("user clicks on Delete Icon", () => {
  cy.get(".oxd-icon.bi-trash").first().click();
});

Then("Verify Delete Confirmation popup appear", () => {
  cy.get(".oxd-text--card-title").should("have.text", "Are you Sure?");
});

Then("User Clicks on Confirm Delete", () => {
  cy.contains("button", " Yes, Delete ").should("be.visible").click();
});

// Delete Assertion
Then("Verify Employee Deleted successfully", () => {
  // cy.get('.oxd-toast',{timeout:10000}).should('be.visible');
  cy.get(".oxd-text.oxd-text--span", { timeout: 10000 })
    .should("be.visible")
    .and("contain", "No Records Found");
});
