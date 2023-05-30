import cadastro_map from "../maps/cadastro_map.cy";

export default {

  //Ações/Metodos/funcoes   
  accessRegister() {
    cy.visit("/");
    cy.get('.right_list_fix > :nth-child(2) > a').click();
  },
  fillName(name){
    cy.get(cadastro_map.fields.name).type(name)
  },
  fillEmail(email){
    cy.get(cadastro_map.fields.email).type(email);
  },
  fillPassword(password){
    cy.get(cadastro_map.fields.password).type(password);
  },
  fillCredentials(name,email,password){
    cy.get(cadastro_map.fields.name).type(name);
    cy.get(cadastro_map.fields.email).type(email);
    cy.get(cadastro_map.fields.password).type(password);
  },
  clicksRegister(){
    cy.get(cadastro_map.buttons.btnRegister).click({force: true});
  },
  getSuccessMessage(message){
    cy.get(cadastro_map.messages.success).should('have.text',message);
  },
  getAlertMessage(message){
    cy.get(cadastro_map.messages.alert).should('have.text',message);
  }

}