Feature: Search Functionality

  Background:
  Given User navigated to the login page of the application
  Scenario Outline: Search the product with the help of Search Box
   When The user click the Account icon for the login
   And The user enter the email "<email>"
   And The User enter the password "<password>" 
   And User click the remember me checkbox
   And User clicks the submit button
   And User Select certain category to search for the product
   And User enter a search keyword to find a product
   And User clicks the search button 

Examples:
|email                      |password                  |
|stevesmithcric529@gmail.com|jagadeesh@528             |