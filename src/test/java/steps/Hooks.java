package steps;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.DriverSetup;

public class Hooks extends BaseTest{
    public static Logger log = LogManager.getLogger(BaseTest.class.getName());
    @Before()
    public void setUp(Scenario scenario){
       log.info("------>Starting to execute " + scenario.getName() + "<--------\n");
    }


    @After
    public void tearDown(Scenario scenario){
        System.out.println(scenario.getName());
        System.out.println(scenario.getStatus());
        if (scenario.isFailed()) {
            byte[] screenshot = ((TakesScreenshot)DriverSetup.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
            log.error(scenario.getName() + "Failed\n\n");
        }else log.info(scenario.getName() + " passed succesfully\n\n'");
       DriverSetup.quitDriver();
   }
}
