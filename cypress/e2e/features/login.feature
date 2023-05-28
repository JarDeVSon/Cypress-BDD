Feature: Login
    Feature Description

    Background: Estar na tela de Login
        Given the user is on the login screen

    Scenario: Login com data table hashes().forEach((element) => ){...}
        And fill the credentials
            | email                       | password |
            | Testecypress1234@bol.com.br | Senha123 |
        When clicks on Login
        Then the success message should be displayed

    Scenario: Login com data table rowsHash() const data = datatable.rowsHash();
        And fill the credentials rowsHash
            | email    | Testecypress1234@bol.com.br |
            | password | Senha123                    |
        When clicks on Login
        Then the success message should be displayed
    Scenario: Login com sucesso
        And fill my credentials
        When clicks on Login
        Then the success message should be displayed

    Scenario: Scenario name - Login com e-mail invalido
        When clicks on Login
        Then the alert message "E-mail inválido." should be displayed

    Scenario: Scenario name - Login com senha invalida
        And dont fill credentials
        When clicks on Login
        Then the alert message "Senha inválida." should be displayed

