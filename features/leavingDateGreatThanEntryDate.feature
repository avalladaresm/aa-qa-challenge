Feature: Setting entry and leaving date and time

  Scenario Outline: As a website admin, I want to make sure the user doesn't select a leaving date and time that is before its entry date and time

    Given I go to the website
    When I select <parking_lot>

    Examples:
      | parking_lot                 |
      | 'Valet Parking'             |