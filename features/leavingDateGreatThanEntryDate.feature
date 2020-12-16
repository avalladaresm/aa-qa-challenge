Feature: Setting entry and leaving date and time

  Scenario Outline: As a website admin, I want to make sure the user doesn't select a leaving date and time that is before its entry date and time

    Given I go to the website
    When I select <parking_lot>
    And I set an entry <entryDate> and <entryTime>
    And I set a leaving <leavingDate> and <leavingTime>
    And I press the Calculate button
    Then the leaving date and time should be after the entry date and time

    Examples:
      | parking_lot                 | entryDate    | entryTime | leavingDate  | leavingTime |
      | 'Valet Parking'             | '12/15/2020' | '12:50'   | '12/20/2020' | '18:00'     |
      | 'Valet Parking'             | '04/28/2021' | '13:13'   | '05/20/2021' | '16:01'     |
      | 'Valet Parking'             | '07/02/2021' | '03:05'   | '06/13/2021' | '05:55'     |
      | 'Valet Parking'             | '10/11/2021' | '13:00'   | '10/10/2021' | '14:00'     |
      | 'Short-Term Parking'        | '12/15/2020' | '12:50'   | '12/20/2020' | '18:00'     |
      | 'Short-Term Parking'        | '04/28/2021' | '13:13'   | '05/20/2021' | '16:01'     |
      | 'Short-Term Parking'        | '07/02/2021' | '03:05'   | '06/13/2021' | '05:55'     |
      | 'Short-Term Parking'        | '10/11/2021' | '13:00'   | '10/10/2021' | '14:00'     |
      | 'Economy Parking'           | '12/15/2020' | '12:50'   | '12/20/2020' | '18:00'     |
      | 'Economy Parking'           | '04/28/2021' | '13:13'   | '05/20/2021' | '16:01'     |
      | 'Economy Parking'           | '07/02/2021' | '03:05'   | '06/13/2021' | '05:55'     |
      | 'Economy Parking'           | '10/11/2021' | '13:00'   | '10/10/2021' | '14:00'     |
      | 'Long-Term Garage Parking'  | '12/15/2020' | '12:50'   | '12/20/2020' | '18:00'     |
      | 'Long-Term Garage Parking'  | '04/28/2021' | '13:13'   | '05/20/2021' | '16:01'     |
      | 'Long-Term Garage Parking'  | '07/02/2021' | '03:05'   | '06/13/2021' | '05:55'     |
      | 'Long-Term Garage Parking'  | '10/11/2021' | '13:00'   | '10/10/2021' | '14:00'     |
      | 'Long-Term Surface Parking' | '12/15/2020' | '12:50'   | '12/20/2020' | '18:00'     |
      | 'Long-Term Surface Parking' | '04/28/2021' | '13:13'   | '05/20/2021' | '16:01'     |
      | 'Long-Term Surface Parking' | '07/02/2021' | '03:05'   | '06/13/2021' | '05:55'     |
      | 'Long-Term Surface Parking' | '10/11/2021' | '13:00'   | '10/10/2021' | '14:00'     |