
describe('End to End User Journey', () => {

    it('Verify complete end-to-end user purchase journey', () => {

      //The below command (cy.visit) and the expression ('/') instructs Cypress to navigate to
      //the root URL of the application to start your test. In this case, the url is
      //"https://www.saucedemo.com" which is already inserted in the cypress.config.js file.


      cy.visit('/');

      //The below commands (cy.get),(.type) and ID allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate typing input
      //into the 'username' text field. In this case, our identifier is " id="user-name" ".

      cy.get(' [id="user-name"] ').type ('problem_user');

      //The below commands (cy.get),(.type) and ID allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate typing input
      //into the 'password' text field. In this case, our identifier is " id="password" ".

      cy.get(' [id="password"] ').type ('secret_sauce');

      //The below commands (cy.get),(.click) allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate a click action
      // on the 'login button'. In this case, our identifier is " id="login-button" " .

      cy.get(' [id="login-button"] ').click();

      //The below commands (cy.get) and (.click) allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate a click action
      // on the 'Add to cart' button . In this case, our identifier is " id="add-to-cart-sauce-labs-backpack" " .

      cy.get(' [id="add-to-cart-sauce-labs-backpack"] ').click();

      //The below commands (cy.get) and (.click) allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate a click action
      // on the 'shopping cart icon'. In this case, our identifier is " id="shopping_cart_container" " .

      cy.get(' [id="shopping_cart_container"] ').click();

      //The below commands (cy.get) and (.click) allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate a click action
      // on the 'checkout' button. In this case, our identifier is " id="checkout" " .

      cy.get(' [id="checkout"] ').click();

      //The below commands (cy.get),(.type) and ID allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate typing input
      //into the 'First Name' text field. In this case, our identifier is " id="first-name" ".

      cy.get(' [id="first-name"] ').type ('John');

      //The below commands (cy.get),(.type) and ID allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate typing input
      //into the 'Last Name' text field. In this case, our identifier is " id="last-name" ".

      cy.get(' [id="last-name"] ').type ('Doe');

      //The below commands (cy.get),(.type) and ID allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate typing input
      //into the 'Zip/Postal Code'text field. In this case, our identifier is " id="postal-code" ".

      cy.get(' [id="postal-code"] ').type ('AB1 2CD');

      //The below commands (cy.get) and (.click) allows you to locate an element on the webpage
      // based on its identifier (such as an ID, class, or selector) and simulate a click action
      // on the 'Add to cart' button . In this case, our identifier is " id="continue" " .

      cy.get(' [id="continue"] ').click()



















    })
  })