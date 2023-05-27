Feature: Login

    Feature Description

    Scenario: Login com data table
        Given the user is on the login screen
        And fill the credentials
            | email                       | password |
            | Testecypress1234@bol.com.br | Senha123 |
        When clicks on Login
        Then the success message should be displayed

    Scenario: Login com sucesso
        Given the user is on the login screen
        And fill my credentials
        When clicks on Login
        Then the success message should be displayed

    Scenario: Scenario name - Login com e-mail invalido
        Given the user is on the login screen
        When clicks on Login
        Then the alert message "E-mail inválido." should be displayed

    Scenario: Scenario name - Login com senha invalida
        Given the user is on the login screen
        And dont fill credentials
        When clicks on Login
        Then the alert message "Senha inválida." should be displayed

