# Project Title - Arctic_shores-sauce

 **Test**

 Verify Login and Purchase Functionality of Sauce-Demo Webpage

 **Project Description**

 This testing is for Sauce-demo login/purchase webpage's functionality, it involves verifying various scenarios. These include testing the successful login process using valid credentials, checking the handling of failed login attempts with invalid credentials, validating the accurate display of error messages for such invalid logins, and conducting a comprehensive end-to-end test of the purchase journey. By performing these tests, we ensure that users can log in successfully, are prevented from unauthorized access, receive helpful error messages, and can seamlessly complete a purchase from start to finish. These tests aim to ensure the smooth functioning of the login and purchase features, enhancing the overall user experience and identifying any potential issues or bugs that need attention.

**IDE**

Visual Studio Code.

 **Installation**

 The following steps was taken to actualize this Test. They are :

 1. Created a Project on Github Repository titled Arctic_shores-sauce
    
 2. Initialized my local enviroment using the command git init

 3. Cloned the repository to my local machine using the following command: git clone https://github.com/Selinede/Arctic_shores-sauce.git

 4. Navigate to the project's directory: cd Arctic_shores-sauce

 5. Install the dependencies by running the following command: npm install cypress --save-dev

 6. npx cypress open

 7. Click on the “E2E Testing” button on the left to get started.

 8. The following Configuration files are configured by Cypress so you don't need to do anything, just click on continue button at the bottom.These files are;
 a. config.ts
 b. e2e.ts
 c. command.ts
 d. example.json

 9. Choose a Browser of choice. Google Chrome and Safari was used for this Project

 10. Click on the “Create new spec” button.

 11. Rename file 'sauce_valid_login-functionality.cy.js', then click 'Create Spec

 12. Then click on the “Okay, run the spec” button.

 13. Cypress will then run our spec against their Kitchen Sink sample application.

 Now that I have created our spec file, I need to update it for our course application.

          Breaking down the home spec file

 14. Open the cypress/e2e/sauce_valid_login-functionality.cy.js file in VSCode.

 15. This file contains the default test that Cypress created when i asked it to create our spec file. I need to update it to run tests against our course application. A break down of the code in this file is as follows:

 describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io")
   })
 })

  On the first line, I see what is commonly referred to as a “describe block.”
  " describe("empty spec", () => {}) "

  Therefore, I will update the string to the following:
   "describe("sauce log-in page", () => {" (As this is how i described the Module)

  The describe() function takes two arguments. The first is a string which is a description of the tests contained within it. The second is a callback function. Since this file is going to contain tests for our home page, I updated this to say “sauce log-in page”

  Next, within the body of our describe() is what is commonly referred to as an “it block.”

  This is our actual test.

  " it("passes", () => { "

   This takes the exact same arguments as the describe() function: first a string and then a callback function. I will update the string to the following:

    "it("Verify the log-in functionality", () => {"

  For the first test, i am writing a test that asserts that the login functionality functions as expected.

  Finally, we see "cy.visit()" within the body of our it() block.

  The command is used to navigate to a specific URL or webpage within a test. It simulates a user visiting that page in a browser. When a call cy.visit() is made with a URL as its parameter, Cypress will open a new browser window or tab and load the specified URL. I will update the string to the following:

  " cy.visit("https://www.saucedemo.com") "
  })
 })

 This in total sums up to :

  describe("sauce log-in page", () => {
  it("Verify the log-in functionality", () => {
    cy.visit("https://www.saucedemo.com")
   })
 })

 Now i can run the test.

 16. npx cypress open

 17. Click on “E2E Testing”

 18. Then click on “Chrome” and the “Start E2E Testing in Chrome” button.

 19. Next click on the “sauce_valid_login-functionality.cy.js” spec file.

 20. The sauce-demo webpage is openly displayed, and the logs are visible .

 **Features**

 1. Login Text Fields: Provides a secure login mechanism for users to authenticate themselves using their credentials.

 2. Product Catalog: Displays a catalog of available products with details such as descriptions, prices, and images.

 3. Shopping Cart: Provide a virtual cart for users to add, remove, and modify items they wish to purchase.

 4. Order Placement: Facilitate seamless order placement, allowing users to specify quantity, product variations, and shipping preferences.

 5. Checkout: Provide a streamlined checkout option for users to make purchases an account.

 6. Error Handling: Includes appropriate error handling and validation to handle scenarios such as incorrect login credentials, users checkout registration.


 **Git Contribution**

 1. git init
 2. git clone
 3. git status
 4. git add .
 5. git commit -m "Updated files with new changes"
 6. git pull origin main
 7. git push origin main














