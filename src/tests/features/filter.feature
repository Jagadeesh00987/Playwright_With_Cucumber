Feature: Filter functionaliy

Background:
Given User navigated to the login page of the application

Scenario: User can filter the product through filter functionality
   When The user click the Account icon for the login
   And The user enter the email from env
   And The User enter the password from env
   And User click the remember me checkbox
   And User clicks the submit button
   And User clicks the product page and navigate to the product page
   And User clicks the subcategory in the filter page
   And User drags the prize slider in the filter page
   And Clicks the Advanced Filter
   And User clicks the Colour Filter
   And User Clicks the Size in the filter
   And User filter with by boxes by clicking
   And user filter with size by clicking the By Sizes filter 
   And User clicks the filter button
   And User will get product based on the filter 
   