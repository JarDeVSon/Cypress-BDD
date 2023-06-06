Feature: Login
    Feature Description

    Background: Estar na tela de Login
        Given the user is on the login screen

    Scenario: Login com sucesso
        And fill my credentials
        When clicks on Login
        Then the success login message "Login realizado" should be displayed

    Scenario: Login com data table hashes().forEach((element) => ){...}
        And fill the credentials forEach
            | email                       | password |
            | Testecypress1234@bol.com.br | Senha123 |
        When clicks on Login
        Then the success message should be displayed hashes forEach
            | message         |
            | Login realizado |

    Scenario: Login com data table rowsHash() const data = datatable.rowsHash();
        And fill the credentials rowsHash
            | email    | Testecypress1234@bol.com.br |
            | password | Senha123                    |
        When clicks on Login
        Then the success message should be displayed rowsHash
            | message | Login realizado |


    Scenario Outline: Tentativa de Login usando rowsHash com <id>
        And fill the credentials rowsHash
            | email    | <email>    |
            | password | <password> |
        When clicks on Login
        Then the alert message should be displayed rowsHash
            | message | <message> |
        Examples:
            | id             | email                       | password    | message          |
            | email invalido | @bol.com.br                 | Senha123    | E-mail inválido. |
            | senha invalida | Testecypress1234@bol.com.br | 123         | Senha inválida.  |
            | tudo vazio     | {backspace}                 | {backspace} | E-mail inválido. |




    Scenario Outline: Tentativa de Login usando forEach com <id>
        And fill the credentials forEach
            | email   | password   |
            | <email> | <password> |
        When clicks on Login
        Then the alert message should be displayed hashes forEach
            | message   |
            | <message> |
        Examples:
            | id             | email                       | password    | message          |
            | email invalido | @bol.com.br                 | Senha123    | E-mail inválido. |
            | senha invalida | Testecypress1234@bol.com.br | 123         | Senha inválida.  |
            | tudo vazio     | {backspace}                 | {backspace} | E-mail inválido. |






