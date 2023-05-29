import login_selectors from "../selectors/login_selectors.cy";
class login_page {
  
  accessLogin() {
    cy.visit("/");
    cy.get(".right_list_fix > :nth-child(1) > a").click();
  }
  fillEmail(email){
    cy.get(login_selectors.fillEmail).type(email);
  }
  fillPassword(password){
    cy.get(login_selectors.fillPassword).type(password);
  }
  fillCredentials(email,password){
    cy.get(login_selectors.fillEmail).type(email, {force: true});
    cy.get(login_selectors.fillPassword).type(password,{force: true});
  }
  clicksLogin(){
    cy.get(login_selectors.clicksLogin).click({force: true});
  }
  getMessage(message){
    cy.get(login_selectors.getAlertMessage).should('have.text', message);
  }
  getSuccessMessage(message){
    cy.get(login_selectors.getSuccessMessage).should('have.text', message);
  }
 
}

module.exports = new login_page();
