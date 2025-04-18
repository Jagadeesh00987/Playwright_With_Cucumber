Feature: Product page

Background:
 Given User navigated to the login page of the application

Scenario: User can able to buy a Product
   When The user click the Account icon for the login
   And The user enter the email from env
   And The User enter the password from env 
   And User click the remember me checkbox
   And User clicks the submit button
   And User clicks the product page and navigate to the product page
   And Check the avaialbe quantity of the product
   And User add the product to the cart
   And Proceed to the checkout
