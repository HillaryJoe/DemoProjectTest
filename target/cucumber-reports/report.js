$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/functionalTest/EndToEndTest.feature");
formatter.feature({
  "line": 1,
  "name": "AutomationPractise End to End Test",
  "description": "Description: This feature verifies the Purchasing order history details and update User FirsName from Account details",
  "id": "automationpractise-end-to-end-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Update Personal Information (First Name) from My Account",
  "description": "",
  "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user updates personal information \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "updated personal information should be displayed \"\u003cfirstName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account;",
  "rows": [
    {
      "cells": [
        "firstName"
      ],
      "line": 11,
      "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account;;1"
    },
    {
      "cells": [
        "SecondQA"
      ],
      "line": 12,
      "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 62710137091,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Update Personal Information (First Name) from My Account",
  "description": "",
  "id": "automationpractise-end-to-end-test;update-personal-information-(first-name)-from-my-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user updates personal information \"SecondQA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "updated personal information should be displayed \"SecondQA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SecondQA",
      "offset": 35
    }
  ],
  "location": "Steps.user_click_on_Logged_in_userName_from_Top_right_corner(String)"
});
formatter.result({
  "duration": 7434160150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SecondQA",
      "offset": 50
    }
  ],
  "location": "Steps.firstname_changed(String)"
});
formatter.result({
  "duration": 55597515,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 51429264187,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Customer Place an Order and verify history",
  "description": "",
  "id": "automationpractise-end-to-end-test;customer-place-an-order-and-verify-history",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the user orders T-Shirt",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user received Order confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the user should receive OrderId details from OrderHistory section",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_user_orders_T_Shirt()"
});
formatter.result({
  "duration": 25061061680,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title \u003d \u0027Proceed to checkout\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027JOSE-PC\u0027, ip: \u0027192.168.43.7\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\Jose\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49786}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: a5c258a4f08abcc7f03d7a820f2714e2\n*** Element info: {Using\u003dxpath, value\u003d//a[@title \u003d \u0027Proceed to checkout\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat stepDefinitions.Steps.the_user_orders_T_Shirt(Steps.java:146)\r\n\tat ✽.When the user orders T-Shirt(src/test/resources/functionalTest/EndToEndTest.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.the_user_received_Order_confirmation_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_verify_their_orderhistory_from_MyAccount_Page()"
});
formatter.result({
  "status": "skipped"
});
});