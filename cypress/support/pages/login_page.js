class login_page {

  elements = {
    fillEmail: () => cy.get("#user"),
    fillPassword: () => cy.get("#password"),
    clicksLogin: () => cy.get("#btnLogin"),
    getSuccessMessage: () => cy.get("#swal2-title"),
    getAlertMessage: () => cy.get(".invalid_input")
  }
  
  accessLogin() {
    cy.visit("/");
    cy.get(".right_list_fix > :nth-child(1) > a").click();
  }
  fillEmail(email) {
    this.elements.fillEmail().type(email);
  }
  fillPassword(password) {
    this.elements.fillPassword().type(password);
  }
  fillCredentials(email, password) {
    this.elements.fillEmail().type(email, { force: true });
    this.elements.fillPassword().type(password, { force: true });
  }
  clicksLogin() {
    this.elements.clicksLogin().click({ force: true });
  }
  getMessage(message){
    this.elements.getAlertMessage().should("have.text",message)
  }
  getSuccessMessage(message) {
    this.elements.getSuccessMessage().should("have.text", message);
  }
 
}

module.exports = new login_page();
