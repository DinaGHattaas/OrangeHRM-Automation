export const AdminloginAPI = () => {
    cy.fixture('users').then((data)=> {
        const user = data.adminUser;

    cy.get('input[name="_token"]').invoke('val').then((AdminToken) => {    
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
    });
});
});

}
