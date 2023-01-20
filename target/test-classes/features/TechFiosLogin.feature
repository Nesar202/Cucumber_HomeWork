Feature: Techfios billing login page fuctionality validation

  Scenario Outline: User should be able to login with valid credential
    Given User is on the techfios login page
    When User enters username as "<username>"
    When User enters password as "<password>"
    When User cliks on sign in button
    Then User should land on dashboard page
    When User clicks on BankCash button
    When User clicks on NewAccount button
    When User enters accountTitle as "<accountTitle>"
    When User enters description as "<description>"
    When User enters initialBalance as "<initialBalance>"
    When User enters accountNumber as "<accountNumber>"
    When User enters contactPerson as "<contactPerson>"
    When User enters PhoneNumber as "<phoneNumber>"
    When User enters internetBankingURL "<interBankingURL>"
    When User clicks on Submit button
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | accountTitle   | description      | initialBalance | accountNumber | contactPerson | phoneNumber | interBankingURL               |
      | demo@techfios.com | abc123   | Muhammad Nesar Uddin | Checking Account |            600 |        563365 | Nesar Uddin   |      855885 | https://www.bankofamerica.com |
