package utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class DriverSetup {

    private DriverSetup(){

    }

    private static WebDriver driver;


    public static WebDriver getDriver() {
        if (driver == null) {
            switch (ConsAPI.config.getProperty("browser")) {
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driver = new FirefoxDriver();
                    break;
                default:
                    ChromeOptions options = new ChromeOptions();
                    options.addArguments("headless");
                    options.addArguments("window-size=1200x600");
                    WebDriverManager.chromedriver().setup();
                    driver = new ChromeDriver(options);
            }

            driver.manage().timeouts().implicitlyWait(12, TimeUnit.SECONDS);
            driver.manage().window().maximize();

        }
        return driver;
    }



    public static void quitDriver() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }


    }


}
