# OrangeHRM Test Automation Project 🚀

This is a robust End-to-End (E2E) test automation framework built for the **OrangeHRM** platform. The project implements modern QA best practices, focusing on dynamic data generation, stability, and modularity.

## 🛠️ Tech Stack & Tools

- **Automation Framework:** [Cypress](https://www.cypress.io/)
- **Test Design Pattern:** Behaviour-Driven Development (BDD) with Cucumber (Gherkin)
- **Language:** TypeScript
- **Data Generation:** @faker-js/faker & Custom Utility Helpers

---

## 🏗️ Project Architecture & Structure

The framework is organized to enforce the **Separation of Concerns (SoC)** principle:

```text
├── cypress
│   ├── e2e
│   │   └── orangeHRM.features  # Cucumber Feature files (.feature)
│   ├── fixtures                # Static test data (users.json)
│   ├── support
│   │   ├── Apis                # API configuration and request helpers
│   │   │   └── api.ts
│   │   ├── step_definitions    # Step definition implementation files (.ts)
│   │   ├── utils               # Global shared functions & custom helpers
│   │   │   └── utils.ts
│   │   ├── commands.ts         # Custom Cypress commands
│   │   └── e2e.ts
├── cypress.config.ts           # Cypress configuration file
├── package.json                # Project dependencies and scripts

```

## 🚀How to Run the Project

### 1. Prerequisites

Make sure you have Node.js installed on your machine.

### 2. Installation

Clone the repository and install the project dependencies:

```bash
npm install

```

## 3. Execution

To open the interactive Cypress Test Runner:

```bash
npx cypress open

```

To run all tests headlessly in the terminal:

```bash
npx cypress run

```
## 📊 Test Reporting (Allure Report)

This project integrates **Allure Report** to generate interactive and detailed automation test reports.

### Prerequisites
 Install the Allure plugin for Cypress

```bash
npm install @shelex/cypress-allure-plugin --save-dev