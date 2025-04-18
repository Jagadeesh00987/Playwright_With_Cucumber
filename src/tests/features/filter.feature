Feature: Filter functionaliy

Background:
Given User is logged into the application

Scenario: User can filter the product through filter functionality
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
   