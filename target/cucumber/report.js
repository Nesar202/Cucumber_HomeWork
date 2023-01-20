$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TechFiosLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios billing login page fuctionality validation",
  "description": "",
  "id": "techfios-billing-login-page-fuctionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credential",
  "description": "",
  "id": "techfios-billing-login-page-fuctionality-validation;user-should-be-able-to-login-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User cliks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on BankCash button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on NewAccount button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters PhoneNumber as \"\u003cphoneNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters internetBankingURL \"\u003cinterBankingURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "techfios-billing-login-page-fuctionality-validation;user-should-be-able-to-login-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phoneNumber",
        "interBankingURL"
      ],
      "line": 22,
      "id": "techfios-billing-login-page-fuctionality-validation;user-should-be-able-to-login-with-valid-credential;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Muhammad Uddinn",
        "Checking Account",
        "600",
        "563365",
        "Nesar Uddin",
        "855885",
        "https://www.bankofamerica.com"
      ],
      "line": 23,
      "id": "techfios-billing-login-page-fuctionality-validation;user-should-be-able-to-login-with-valid-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2132143100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to login with valid credential",
  "description": "",
  "id": "techfios-billing-login-page-fuctionality-validation;user-should-be-able-to-login-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User cliks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on BankCash button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on NewAccount button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters accountTitle as \"Muhammad Uddinn\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters description as \"Checking Account\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters initialBalance as \"600\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters accountNumber as \"563365\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters contactPerson as \"Nesar Uddin\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters PhoneNumber as \"855885\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters internetBankingURL \"https://www.bankofamerica.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1065999500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 2153513400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 2097948600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_cliks_on_sign_in_button()"
});
formatter.result({
  "duration": 5699454800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 15808500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_cliks_on_bankcash_button()"
});
formatter.result({
  "duration": 2103940300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_NewAccount_button()"
});
formatter.result({
  "duration": 2465222700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Muhammad Uddinn",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountTitle_as(String)"
});
formatter.result({
  "duration": 2153330700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking Account",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_as(String)"
});
formatter.result({
  "duration": 2155328400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_initialBalance_as(String)"
});
formatter.result({
  "duration": 2143098000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "563365",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountNumber_as(String)"
});
formatter.result({
  "duration": 2132704300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nesar Uddin",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactPerson_as(String)"
});
formatter.result({
  "duration": 2148267500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "855885",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_PhoneNumber_as(String)"
});
formatter.result({
  "duration": 2156732100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bankofamerica.com",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_internetBankingURL(String)"
});
formatter.result({
  "duration": 2180804900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 2482813700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 10916400,
  "status": "passed"
});
});