package com.atlas.app.dvla.vechicle;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


// runner class

@RunWith(Cucumber.class)
@CucumberOptions(format={"html:output"},
        features = {"src/resources"})

public class Runner {


}
