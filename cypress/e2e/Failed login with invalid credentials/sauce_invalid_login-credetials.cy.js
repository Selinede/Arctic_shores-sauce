
describe('sauce login page', () => {

    it('Verify invalid log-in functionality', () => {

      //The below command (cy.visit) and the expression ('/') instructs Cypress to navigate to
      //the root URL of the application to start your test. In this case, the url is
      //"https://www.saucedemo.com" which is already inserted in the cypress.config.js file.


      cy.visit('/');

      //The below commands (cy.get),(.type) and ID allows you to locate an element on the webpage based
      //on its identifier (such as an ID, class, or selector) and simulate typing input into the
      //'username' text field. In this case, our identifier is " id="user-name" " while our
      //username is "problem_user".

      cy.get(' [id="user-name"]').type ('problem_solver');

      //The below commands (cy.get),(.type) and ID allows you to locate an element on the webpage based
      //on its identifier (such as an ID, class, or selector) and simulate typing input into the
      //'password' text field. In this case, our identifier is " id="password" " while our password
      //is "secret_sauce".

      cy.get(' [id="password"] ').type ('secret_ice');

      //The below commands (cy.get) and (.click) allows you to locate an element on the webpage based
      //on its identifier (such as an ID, class, or selector) and simulate a click action on the
      //'login button'. In this case, our identifier is " id="login-button" " .


      cy.get(' [id="login-button"] ').click()


    })
  })