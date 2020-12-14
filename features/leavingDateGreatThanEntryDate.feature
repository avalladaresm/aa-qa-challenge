Feature: Setting entry and leaving date and time

  Scenario Outline: As a website admin, I want to make sure the user doesn't select a leaving date and time that is before its entry date and time

    Given I go to the website
    When I select <parking_lot>
    And I set an entry date and time
    And I set a leaving date and time
    And I press the Calculate button
    Then the leaving date and time should be after the entry date and time

    Examples:
      | parking_lot                 |
      | 'Valet Parking'             |