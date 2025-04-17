Feature: User SignUp

  Background:
  Given User SignUp with the Application

  Scenario: Unsuccessfull signup with valid credentials
   When The user click the Account icon
   And The user clicks the Create Account Link
   And The user enters the username "ABCD" , email "sjagadeesh528@gmail.com", password "Jagadeesh@528",confirmPassword "Jagadeesh@528"
   And The User clicks the Sumbit button


 
    
