package steps;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import pages.PurchasesPage;
import org.openqa.selenium.WebDriver;
import utilities.ConsAPI;
import utilities.DriverSetup;

public class BaseTest extends ConsAPI {
    public static Logger log = LogManager.getLogger(BaseTest.class.getName());


    public PurchasesPage purchases;

    public BaseTest(){
        purchases = new PurchasesPage();
    }


    @Override
    public WebDriver getWebDriver() {
        return DriverSetup.getDriver();
    }
}
