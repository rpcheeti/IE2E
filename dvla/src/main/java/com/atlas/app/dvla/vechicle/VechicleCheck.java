package com.atlas.app.dvla.vechicle;

import com.atlas.app.dvla.util.WebConnector;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.apache.log4j.Logger;


public class VechicleCheck {

    WebConnector selenium = WebConnector.getInstance();
    final static Logger logger = Logger.getLogger(VechicleCheck.class);

    @Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
    public void i_go_to_dvla_url(String URL, String browserType) {
        // Write code here that turns the phrase above into concrete actions
        logger.debug("URL: " + URL);
        logger.debug("browserType: " + browserType);

        selenium.openBrowser(browserType);
        selenium.navigate(URL);

    }

    @And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
    public void i_enter(String object, String text) {
        logger.debug("Enter in " + object + " : " + text );
        selenium.type(text, object);

    }



    @And("^I click on \"([^\"]*)\"$")
    public void i_click_on_continueButton(String object){
        logger.debug("Click on the " + object );
        selenium.click(object);

    }

    @Then("Make should be \"([^\"]*)\"$")
    public void make_should_be(String expectedResult) {
        String actualResult =  selenium.getText("make");
        logger.debug("Make: Expected Result: " + expectedResult + "  Actual: " + actualResult);
        Assert.assertEquals(expectedResult, actualResult);

    }


    @And("Colour should be \"([^\"]*)\"$")
    public void colour_should_be(String expectedResult) {
        String actualResult =  selenium.getText("colour");
        logger.debug("Colour: Expected Result: " + expectedResult + "  Actual: " + actualResult);
        Assert.assertEquals(expectedResult, actualResult);

    }
}
