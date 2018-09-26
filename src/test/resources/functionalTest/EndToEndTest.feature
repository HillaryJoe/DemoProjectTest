Feature:  AutomationPractise End to End Test
Description: This feature verifies the Purchasing order history details and update User FirsName from Account details

Background:
Given User is on Home Page

Scenario Outline: Update Personal Information (First Name) from My Account
When user updates personal information "<firstName>"
Then updated personal information should be displayed "<firstName>"
Examples:
|firstName|
|SecondQA|

Scenario: Customer Place an Order and verify history
When the user orders T-Shirt
Then the user received Order confirmation message
Then the user should receive OrderId details from OrderHistory section

