package steps;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import pages.PurchasesPage;
import org.openqa.selenium.WebDriver;
import utilities.ConsAPI;
import utilities.DriverSetup;

public class BaseTest extends ConsAPI {

    public PurchasesPage purchases;

    public BaseTest(){
        purchases = new PurchasesPage();
    }


    @Override
    public WebDriver getWebDriver() {
        return DriverSetup.getDriver();
    }
}
