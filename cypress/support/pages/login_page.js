import login_map from "../maps/login_map.cy";

export default {
 
  accessLogin() {
    cy.visit("/");
    cy.get(".right_list_fix > :nth-child(1) > a").click();
  },
  fillEmail(email){
    cy.get(login_map.fields.email).type(email);
  },
  fillPassword(password){
    cy.get(login_map.fields.password).type(password);
  },
  fillCredentials(email,password){
    cy.get(login_map.fields.email).type(email);
    cy.get(login_map.fields.password).type(password);
  },
  clicksLogin(){
    cy.get(login_map.buttons.btnLogin).click({force: true});
  },
  getMessageAlert(message){
    cy.get(login_map.messages.alert).should('have.text', message);
  },
  getSuccessMessage(message){
    cy.get(login_map.messages.success).should('have.text', message);
  }
 
}

