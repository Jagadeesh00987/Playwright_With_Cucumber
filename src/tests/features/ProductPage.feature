Feature: Product page

Background:
 Given User is logged into the application

Scenario: User can able to buy a Product
   And User clicks the product page and navigate to the product page
   And Check the avaialbe quantity of the product
   And User add the product to the cart
   And Proceed to the checkout
