/* 
====================================
Feature: Tentacle Input Validation
====================================

  Scenario: Valid input within range
    Given the tentacle input field is present
    When the user enters "50" into the input field
    And the user clicks the "Send" button
    Then a "Success" message should be displayed

  Scenario: Valid input at lower boundary
    Given the tentacle input field is present
    When the user enters "10" into the input field
    And the user clicks the "Send" button
    Then a "Success" message should be displayed

  Scenario: Valid input at upper boundary
    Given the tentacle input field is present
    When the user enters "100" into the input field
    And the user clicks the "Send" button
    Then a "Success" message should be displayed

  Scenario: Invalid input below minimum
    Given the tentacle input field is present
    When the user enters "5" into the input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Invalid input above maximum
    Given the tentacle input field is present
    When the user enters "105" into the input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Invalid input as a string
    Given the tentacle input field is present
    When the user enters "abc" into the input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Empty input
    Given the tentacle input field is present
    When the user leaves the input field empty
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Input with decimal numbers
    Given the tentacle input field is present
    When the user enters "25.5" into the input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Input with negative numbers
    Given the tentacle input field is present
    When the user enters "-10" into the input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Valid input as a string representation of a number
    Given the tentacle input field is present
    When the user enters "20" (as a string) into the input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Input with spaces
    Given the tentacle input field is present
    When the user enters "   30   " into the input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Input with special characters
    Given the tentacle input field is present
    When the user enters "!@#$" into the input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed
 */
