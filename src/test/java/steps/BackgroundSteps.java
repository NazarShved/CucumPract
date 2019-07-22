package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import pages.PurchasesPage;

public class BackgroundSteps extends BaseTest{
    @Given("^go to odoo, log in and go to purcases$")
    public void go_to_odoo_log_in_and_go_to_purcases() {
        purchases.goToPurchases();
    }
}
