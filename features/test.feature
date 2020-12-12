Feature: Webdriver.io website title

  Scenario Outline: As a website admin, check that webdriver.io website's title is correct

    When I go the webdriver.io website
    Then I should see the website's title as <title>

    Examples:
      | title                                                                             |
      | 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js' |
