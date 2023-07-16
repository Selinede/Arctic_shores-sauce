
describe('sauce log-in page', () => {

    it('Verify the log-in functionality', () => {

      //The below command (cy.visit) and url allows you to start your test by navigating to a
      //specific URL or webpage, in this case, our url is "https://www.saucedemo.com".

      cy.visit('https://www.saucedemo.com');

      //The below commands (cy.get),(.type) and ID allows you to locate an element on the webpage
      //based on its identifier (such as an ID, class, or selector) and simulate typing input into
      //the 'username' text field. In this case, our identifier is " id="user-name" " while our
      //username is "problem_solver".

      cy.get('id="user-name"').type ('problem_solver');

      //The below commands (cy.get),(.type) and ID allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate typing input into
      //the 'password' text field. In this case, our identifier is " id="password" " while our
      //password is "secret_ice".

      cy.get('id="password"').type ('secret_ice');

      //The below commands (cy.get) and (.click) allows you to locate an element on the webpage
      //based on its identifier (such as an ID, class, or selector) and simulate a click action on
      //the 'login button'. In this case, our identifier is " id="login-button" " .

      cy.get('id="login-button"').click()

      //The below commands (cy.get) and (.contains) allows you to verify the presence of
      //specific content within an element, enabling you to perform assertions or make sure that
      //certain messages or elements are displayed correctly during your Cypress test. In this case,
      //the attribute value is" Epic sadface: Username and password do not match any user in this
      //service ".

      cy.get('data-test="error"').contains(" Epic sadface: Username and password do not match any user in this service ")












    })
  })