Feature: Calculating parking costs

  Scenario Outline: As a user, I want to see my total parking cost using Valet Parking

    Given I go to the website
    When I select <parking_lot>
    And I set an entry <entryDate> and <entryTime> <entryAMPM>
    And I set a leaving <leavingDate> and <leavingTime> <leavingAMPM>
    And I press the Calculate button
    Then I should see how much will the parking cost be $ <cost>

    Examples:
      | parking_lot     | entryDate    | entryTime | entryAMPM | leavingDate  | leavingTime | leavingAMPM | cost  |
      | 'Valet Parking' | '12/16/2020' | '06:00'   | 'PM'      | '12/16/2020' | '10:00'     | 'PM'        | '12'  |
      | 'Valet Parking' | '12/16/2020' | '06:00'   | 'PM'      | '12/18/2020' | '04:00'     | 'AM'        | '36'  |
      | 'Valet Parking' | '12/15/2020' | '01:50'   | 'PM'      | '12/20/2020' | '06:00'     | 'PM'        | '108' |
      | 'Valet Parking' | '12/15/2020' | '01:13'   | 'PM'      | '12/20/2020' | '09:01'     | 'AM'        | '90'  |
      | 'Valet Parking' | '04/28/2021' | '01:13'   | 'PM'      | '05/20/2021' | '09:01'     | 'AM'        | '396' |
      | 'Valet Parking' | '07/08/2021' | '10:05'   | 'PM'      | '08/08/2021' | '02:54'     | 'AM'        | '558' |
      | 'Valet Parking' | '10/11/2021' | '05:00'   | 'PM'      | '10/16/2021' | '04:00'     | 'PM'        | '90'  |

  Scenario Outline: As a user, I want to see my total parking cost using Short-Term Parking
    
    Given I go to the website
    When I select <parking_lot>
    And I set an entry <entryDate> and <entryTime> <entryAMPM>
    And I set a leaving <leavingDate> and <leavingTime> <leavingAMPM>
    And I press the Calculate button
    Then I should see how much will the parking cost be $ <cost>

    Examples:
      | parking_lot          | entryDate    | entryTime | entryAMPM | leavingDate  | leavingTime | leavingAMPM | cost  |
      | 'Short-Term Parking' | '12/16/2020' | '06:00'   | 'PM'      | '12/16/2020' | '10:00'     | 'PM'        | '8'   |
      | 'Short-Term Parking' | '12/16/2020' | '06:00'   | 'PM'      | '12/18/2020' | '04:00'     | 'AM'        | '44'  |
      | 'Short-Term Parking' | '12/15/2020' | '01:50'   | 'PM'      | '12/20/2020' | '06:00'     | 'PM'        | '129' |
      | 'Short-Term Parking' | '12/15/2020' | '01:13'   | 'PM'      | '12/20/2020' | '09:01'     | 'AM'        | '120' |
      | 'Short-Term Parking' | '04/28/2021' | '01:13'   | 'PM'      | '05/20/2021' | '09:01'     | 'AM'        | '528' |
      | 'Short-Term Parking' | '07/08/2021' | '10:05'   | 'PM'      | '08/08/2021' | '02:54'     | 'AM'        | '730' |
      | 'Short-Term Parking' | '10/11/2021' | '05:00'   | 'PM'      | '10/16/2021' | '04:00'     | 'PM'        | '120' |
  
  Scenario Outline: As a user, I want to see my total parking cost using Economy Parking
    
    Given I go to the website
    When I select <parking_lot>
    And I set an entry <entryDate> and <entryTime> <entryAMPM>
    And I set a leaving <leavingDate> and <leavingTime> <leavingAMPM>
    And I press the Calculate button
    Then I should see how much will the parking cost be $ <cost>

    Examples:
      | parking_lot       | entryDate    | entryTime | entryAMPM | leavingDate  | leavingTime | leavingAMPM | cost  |
      | 'Economy Parking' | '12/16/2020' | '06:00'   | 'PM'      | '12/16/2020' | '10:00'     | 'PM'        | '8'   |
      | 'Economy Parking' | '12/16/2020' | '06:00'   | 'PM'      | '12/18/2020' | '04:00'     | 'AM'        | '18'  |
      | 'Economy Parking' | '12/15/2020' | '01:50'   | 'PM'      | '12/20/2020' | '09:00'     | 'PM'        | '54'  |
      | 'Economy Parking' | '12/15/2020' | '01:13'   | 'PM'      | '12/20/2020' | '09:01'     | 'AM'        | '45'  |
      | 'Economy Parking' | '04/28/2021' | '01:13'   | 'PM'      | '05/20/2021' | '09:01'     | 'AM'        | '171' |
      | 'Economy Parking' | '07/08/2021' | '10:05'   | 'PM'      | '08/08/2021' | '01:54'     | 'AM'        | '242' |
      | 'Economy Parking' | '10/11/2021' | '05:00'   | 'PM'      | '10/16/2021' | '04:00'     | 'PM'        | '45'  |

  Scenario Outline: As a user, I want to see my total parking cost using Long-Term Garage Parking
    
    Given I go to the website
    When I select <parking_lot>
    And I set an entry <entryDate> and <entryTime> <entryAMPM>
    And I set a leaving <leavingDate> and <leavingTime> <leavingAMPM>
    And I press the Calculate button
    Then I should see how much will the parking cost be $ <cost>

    Examples:
      | parking_lot                 | entryDate    | entryTime | entryAMPM | leavingDate  | leavingTime | leavingAMPM | cost  |
      | 'Long-Term Garage Parking'  | '12/15/2020' | '12:50'   | 'AM'      | '12/20/2020' | '06:00'     | 'PM'        | '72'  |
      | 'Long-Term Garage Parking'  | '04/28/2021' | '01:13'   | 'PM'      | '05/20/2021' | '09:01'     | 'AM'        | '228' |
      | 'Long-Term Garage Parking'  | '07/08/2021' | '10:05'   | 'PM'      | '08/08/2021' | '02:54'     | 'AM'        | '322' |
      | 'Long-Term Garage Parking'  | '10/11/2021' | '05:00'   | 'PM'      | '10/16/2021' | '04:00'     | 'PM'        | '60'  |

  Scenario Outline: As a user, I want to see my total parking cost using Long-Term Surface Parking
    
    Given I go to the website
    When I select <parking_lot>
    And I set an entry <entryDate> and <entryTime> <entryAMPM>
    And I set a leaving <leavingDate> and <leavingTime> <leavingAMPM>
    And I press the Calculate button
    Then I should see how much will the parking cost be $ <cost>

    Examples:
      | parking_lot                 | entryDate    | entryTime | entryAMPM | leavingDate  | leavingTime | leavingAMPM | cost  |
      | 'Long-Term Surface Parking' | '12/15/2020' | '12:50'   | 'AM'      | '12/20/2020' | '06:00'     | 'PM'        | '60'  |
      | 'Long-Term Surface Parking' | '04/28/2021' | '01:13'   | 'PM'      | '05/20/2021' | '09:01'     | 'AM'        | '190' |
      | 'Long-Term Surface Parking' | '07/08/2021' | '10:05'   | 'PM'      | '08/08/2021' | '02:54'     | 'AM'        | '270' |
      | 'Long-Term Surface Parking' | '10/11/2021' | '05:00'   | 'PM'      | '10/16/2021' | '04:00'     | 'PM'        | '50'  |