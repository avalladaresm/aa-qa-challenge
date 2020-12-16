Feature: Correct date/time formats
  
  Scenario Outline: As a website admin, I want to make sure the user enters an entry date in the correct format

    Given I go to the website
    Then I set an entry date <entryDate>

    Examples:
    | entryDate    |
    | '12/a5/2020' |
    | '04/28/2021' |
    | '07/02/202!' | 
    | '10/11-2019' |
    | '6/12/2019'  |
    | '9/12/219'   |

  Scenario Outline: As a website admin, I want to make sure the user enters a leaving date in the correct format

    Given I go to the website
    Then I set a leaving date <leavingDate>

    Examples:
    | leavingDate  |
    | '12/a5/2020' |
    | '04/28/2021' |
    | '07/02/202!' | 
    | '10/11-2019' |
    | '6/12/2019'  |
    | '9/12/219'   |

  Scenario Outline: As a website admin, I want to make sure the user enters an entry time in the correct format

    Given I go to the website
    Then I set an entry time <entryTime>

    Examples:
    | entryTime |
    | '3:e0'    |
    | '33:13'   |
    | 'a8:05'   | 
    | '24:50'   |
    | '23:67'   |
    | '16:11'   |
    | '35:55'   |
    | '14-00'   |
  
  Scenario Outline: As a website admin, I want to make sure the user enters a leaving time in the correct format

    Given I go to the website
    Then I set a leaving time <leavingTime>

    Examples:
    | leavingTime |
    | '3:e0'      |
    | '33:13'     |
    | 'a8:05'     | 
    | '24:50'     |
    | '23:67'     |
    | '16:11'     |
    | '35:55'     |
    | '14-00'     |