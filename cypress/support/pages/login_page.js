import login_selectors from "../selectors/login_selectors.cy";
class login_page {
  
  accessLogin() {
    cy.visit("/");
    cy.get(".right_list_fix > :nth-child(1) > a").click();
  }
  fillEmail(email){
    cy.get(login_selectors.fields.email).type(email);
  }
  fillPassword(password){
    cy.get(login_selectors.fields.password).type(password);
  }
  fillCredentials(email,password){
    cy.get(login_selectors.fields.email).type(email, {force: true});
    cy.get(login_selectors.fields.password).type(password,{force: true});
  }
  clicksLogin(){
    cy.get(login_selectors.buttons.btnLogin).click({force: true});
  }
  getMessageAlert(message){
    cy.get(login_selectors.messages.alert).should('have.text', message);
  }
  getSuccessMessage(message){
    cy.get(login_selectors.messages.success).should('have.text', message);
  }
 
}

module.exports = new login_page();
