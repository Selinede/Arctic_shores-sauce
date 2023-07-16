# Project Title - Arctic_shores-sauce

 **Test**

 Verify Login and Purchase Functionality of Sauce-Demo Webpage

 **Project Description**

 The testing of a login/purchase webpage's functionality involves verifying various scenarios. These include testing the successful login process using valid credentials, checking the handling of failed login attempts with invalid credentials, validating the accurate display of error messages for such invalid logins, and conducting a comprehensive end-to-end test of the purchase journey. By performing these tests, we ensure that users can log in successfully, are prevented from unauthorized access, receive helpful error messages, and can seamlessly complete a purchase from start to finish. These tests aim to ensure the smooth functioning of the login and purchase features, enhancing the overall user experience and identifying any potential issues or bugs that need attention.

 **Installation**

 The following steps was taken to actualize this Test. They are :

 1. Created a Project on Github Repository titled Arctic_shores-sauce

 2. Cloned the repository to my local machine using the following command: git clone https://github.com/Selinede/Arctic_shores-sauce.git

 3. Navigate to the project's directory: cd Arctic_Shores-Sauce

 4. Install the dependencies by running the following command: npm install cypress --save-dev

 5. npx cypress open

 6. Click on the “E2E Testing” button on the left to get started.

 7. The following Configuration files are configured by Cypress so you don't need to do anything, just click on continue button at the bottom.These files are;
 a. config.ts
 b. e2e.ts
 c. command.ts
 d. example.json

 8. Choose a Browser of choice. Google Chrome was used for this Project

 9. Click on the “Create new spec” button.

 10. Rename file 'sauce_valid_login-functionality.cy.js', then click 'Create Spec

 11. Then click on the “Okay, run the spec” button.

 12. Cypress will then run our spec against their Kitchen Sink sample application.

 Now that I have created our spec file, we need to update it for our course application.

          Breaking down the home spec file

 13. Open the cypress/e2e/sauce_valid_login-functionality.cy.js file in VSCode.

 14. This file contains the default test that Cypress created when i asked it to create our spec file. I need to update it to run tests against our course application. A break down of the code in this file is as follows:

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

 15. npx cypress open

 16. Click on “E2E Testing”

 17. Then click on “Chrome” and the “Start E2E Testing in Chrome” button.

 18. Next click on the “sauce_valid_login-functionality.cy.js” spec file.

 19. You should see the sauce-demo webpage openly displayed, you can see your logs, use the cypress locator, and debug your test if need be.

 **Features**

 1. Login: Provides a secure login mechanism for users to authenticate themselves using their credentials.

 2. Product Catalog: Displays a catalog of available products with details such as descriptions, prices, and images.

 3. Shopping Cart: Provide a virtual cart for users to add, remove, and modify items they wish to purchase.

 4. Order Placement: Facilitate seamless order placement, allowing users to specify quantity, product variations, and shipping preferences.

 5. Checkout: Provide a streamlined checkout option for users to make purchases an account.

 6. Error Handling: Includes appropriate error handling and validation to handle scenarios such as incorrect login credentials, users checkout registration.


 **Contribution**

 git init
 git status
 git add .
 git commit -m 
 git push origin main













