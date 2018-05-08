Feature: Check Vechicle Make and Model



  Scenario Outline: Vechicle Make and Model Check

    Given I go to "dvlaURL" on "<Browser>"
    And I enter "vechicleregnumber" as "<RegNumber>"
    And I click on "continuebutton"
    Then Make should be "<Make>"
    And Colour should be "<Colour>"

  Examples:
  | Browser | RegNumber | Make    | Colour  |
  | Mozilla | WG16 BYB   | HYUNDAI | WHITE   |
  | Mozilla | PN66 TVA   | NISSAN  | RED     |
  | Mozilla | BW17 VVA   | BMW     | BLACK   |
  | Mozilla | DV67 ZYH   | AUDI    | GREY    |
