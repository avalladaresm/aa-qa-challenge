Feature: Choosing a parking lot

  Scenario Outline: As a website admin, I want to make sure an error displays correctly when a user only selects a parking lot but no entry or leaving date and time

    Given I go to the website
    When I select <parking_lot>
    And I press the Calculate button
    Then I should see the error 'ERROR! ENTER A CORRECTLY FORMATTED DATE'

    Examples:
      | parking_lot                 | result                                    |
      | 'Valet Parking'             | 'ERROR! ENTER A CORRECTLY FORMATTED DATE' |
      | 'Short-Term Parking'        | 'ERROR! ENTER A CORRECTLY FORMATTED DATE' |
      | 'Economy Parking'           | 'ERROR! ENTER A CORRECTLY FORMATTED DATE' |
      | 'Long-Term Garage Parking'  | 'ERROR! ENTER A CORRECTLY FORMATTED DATE' |
      | 'Long-Term Surface Parking' | 'ERROR! ENTER A CORRECTLY FORMATTED DATE' |
