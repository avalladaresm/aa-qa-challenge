Feature: Correct date formats
  
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