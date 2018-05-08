$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/resources/com/atlas/app/dvla/vehicle/VehicleCheck.feature");
formatter.feature({
  "name": "Check Vechicle Make and Model",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Vechicle Make and Model Check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"dvlaURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"vechicleregnumber\" as \"\u003cRegNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"continuebutton\"",
  "keyword": "And "
});
formatter.step({
  "name": "Make should be \"\u003cMake\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Colour should be \"\u003cColour\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Browser",
        "RegNumber",
        "Make",
        "Colour"
      ]
    },
    {
      "cells": [
        "Mozilla",
        "WG16 BYB",
        "HYUNDAI",
        "WHITE"
      ]
    },
    {
      "cells": [
        "Mozilla",
        "PN66 TVA",
        "NISSAN",
        "RED"
      ]
    },
    {
      "cells": [
        "Mozilla",
        "BW17 VVA",
        "BMW",
        "BLACK"
      ]
    },
    {
      "cells": [
        "Mozilla",
        "DV67 ZYH",
        "AUDI",
        "GREY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Vechicle Make and Model Check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"dvlaURL\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.match({
  "location": "VechicleCheck.i_go_to_dvla_url(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"vechicleregnumber\" as \"WG16 BYB\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.i_enter(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\u0027Vrm\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027UKLONPCHEETI01\u0027, ip: \u0027192.168.247.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 58.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 21480, moz:profile: C:\\Users\\pcheeti\\AppData\\Lo..., moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 10.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 059b28ef-8af6-43f3-9cbc-472c7fd50703\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027Vrm\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.atlas.app.dvla.util.WebConnector.type(WebConnector.java:93)\r\n\tat com.atlas.app.dvla.vechicle.VechicleCheck.i_enter(VechicleCheck.java:28)\r\n\tat ✽.I enter \"vechicleregnumber\" as \"WG16 BYB\"(src/resources/com/atlas/app/dvla/vehicle/VehicleCheck.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on \"continuebutton\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.i_click_on_continueButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Make should be \"HYUNDAI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VechicleCheck.make_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Colour should be \"WHITE\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.colour_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Vechicle Make and Model Check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"dvlaURL\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.match({
  "location": "VechicleCheck.i_go_to_dvla_url(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"vechicleregnumber\" as \"PN66 TVA\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.i_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"continuebutton\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.i_click_on_continueButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Make should be \"NISSAN\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VechicleCheck.make_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Colour should be \"RED\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.colour_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Vechicle Make and Model Check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"dvlaURL\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.match({
  "location": "VechicleCheck.i_go_to_dvla_url(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"vechicleregnumber\" as \"BW17 VVA\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.i_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"continuebutton\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.i_click_on_continueButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Make should be \"BMW\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VechicleCheck.make_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Colour should be \"BLACK\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.colour_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Vechicle Make and Model Check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"dvlaURL\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.match({
  "location": "VechicleCheck.i_go_to_dvla_url(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"vechicleregnumber\" as \"DV67 ZYH\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.i_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"continuebutton\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.i_click_on_continueButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Make should be \"AUDI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VechicleCheck.make_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Colour should be \"GREY\"",
  "keyword": "And "
});
formatter.match({
  "location": "VechicleCheck.colour_should_be(String)"
});
formatter.result({
  "status": "passed"
});
});