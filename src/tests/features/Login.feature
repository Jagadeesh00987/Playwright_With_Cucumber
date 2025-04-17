Feature: User Login

  Background:
  Given User navigated to the login page of the application
  Scenario Outline: Successfull login with a valid  credentials
   When The user click the Account icon for the login
   And The user enter the email from env
   And The User enter the password from env
   And User click the remember me checkbox
   And User clicks the submit button