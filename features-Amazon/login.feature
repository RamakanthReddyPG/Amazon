
Feature: Login Functionality
  As a user
  I want to be able to log in to the system
  So that I can access my account
  
  Scenario: Successful Login
    Given I land on the website
    Then I login with the valid credentials
    When I will land on the home page
    When I close the website

  
  Scenario: Unsuccessful Login
    Given I land on the website
    Then I login with the invalid credentials
    When I observe the error screen
    When I close the website