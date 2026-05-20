import {
  getRandomFirstName,
  getRandomLastName,
  generateRandomNumber,
} from "../utils/utils";
let Token: any;
let ReturnedFN: any;
let ReturnedLN: any;
let ReturnedEmID: any;

// Admin login API
export const AdminloginAPI = () => {
  cy.fixture("users").then((data) => {
    const user = data.adminUser;
    cy.get('input[name="_token"]')
      .invoke("val")
      .then((AdminToken) => {
        return cy
          .request({
            method: "POST",

            url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate",
            form: true,
            body: {
              _token: AdminToken,
              username: user.username,
              password: user.password,
            },
          })
          .then((response) => {
            expect(response.status).to.eq(200);
            Token = response.body.token;
            return Token;
          });
      });
  });
};

// Add employee API
export const AddEmployeeAPI = (): Cypress.Chainable<any> => {
  const randomFirstName = getRandomFirstName();
  const randomLastName = getRandomLastName();
  const employeeID = generateRandomNumber();
  return cy.fixture("users").then((data) => {
    const user = data.EmployeeData;
    return cy
      .request({
        method: "POST",
        url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees`,
        body: {
          firstName: randomFirstName,
          middleName: user.MiddleName,
          lastName: randomLastName,
        },
      })
      .then((Response) => {
        expect(Response.status).to.equal(200);
        ReturnedFN = Response.body.data.firstName;
        ReturnedLN = Response.body.data.lastName;
        ReturnedEmID = Response.body.data.employeeId;
        return { ReturnedFN, ReturnedLN, ReturnedEmID };
      });
  });
};
