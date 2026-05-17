/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Navigation Step
Given("user navigate to the OrangeHRM login page", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});
// Case 1 login with valid credentials
When("user enter his Valid credentials", () => {
  cy.fixture("users").then((userData) => {
    cy.get('input[name="username"]').type(userData.adminUser.username);
    cy.get('input[name="password"]').type(userData.adminUser.password);
  });
});

When("user click on the login button", () => {
  cy.get('button[type="submit"]').click();
});

//Case 1 Assertion
Then("user should be redirected to the {string} page", (pageName) => {
  cy.url().should("include", "/dashboard");
  cy.get(".oxd-topbar-header-title").should("contain", pageName);
});

// Case 2 login with invalid credentials
When("user enter his Invalid credentials", () => {
  cy.fixture("users").then((userData) => {
    cy.get('input[name="username"]').type(userData.InvalidadminUser.username);
    cy.get('input[name="password"]').type(userData.InvalidadminUser.password);
  });
});
//Case 2 Assertion
Then("user should see an error message", () => {
  cy.get(".oxd-alert-content-text").should("have.text", "Invalid credentials");
});

//Case 3 Empty Cred
When("user enter his Empty credentials", () => {
  cy.fixture("users").then((userData) => {
    cy.get('input[name="username"]').type(userData.NullAdminUser.username);
    cy.get('input[name="password"]').type(userData.NullAdminUser.password);
  });
});

//Case 3 Assertion
Then("user should see Required under the Fields", () => {
  cy.get(".oxd-input-group")
    .eq(0)
    .find(".oxd-input-field-error-message")
    .should("be.visible")
    .and("have.text", "Required");
  cy.get(".oxd-input-group")
    .eq(1)
    .find(".oxd-input-field-error-message")
    .should("be.visible")
    .and("have.text", "Required");
});
