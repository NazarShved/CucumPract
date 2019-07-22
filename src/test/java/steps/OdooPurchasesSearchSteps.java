package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utilities.Conditions;
import utilities.DriverSetup;

public class OdooPurchasesSearchSteps extends BaseTest{
    public String testInput = config.getProperty("testSearchInput");

    @After
    public void tearDown(){
        DriverSetup.quitDriver();
    }


    @Given("^user is on odoo purchases/products module$")
    public void user_is_on_odoo_purchases_products_module() {
        purchases.switchTab("Products");
    }

    @When("^user enters a word into a search box$")
    public void user_enters_a_word_into_a_search_box()  {

        purchases.search(testInput);
    }


    @Then("^system should display results that contain the word user searched for$")
    public void system_should_display_results_that_contain_the_word_user_searched_for() {
        assertThat(Conditions.textToBePresentInElementsLocatedIgnoreCase(byCss(".o_kanban_record_title"), testInput));
    }

    @And("^a small tab with the word appears in the search box$")
    public void a_small_tab_with_the_word_appears_in_the_search_box()  {
        assertThat(Conditions.textToBePresentInElementLocatedIgnoreCase(byXpath("(//*[@class = 'o_facet_values']/span)[2]"), testInput));
    }

    //---------> 2nd SCENARIO <----------------

    @Given("^user clicks on the search icon$")
    public void user_clicks_on_the_search_icon() {
        if(!purchases.searchOptinsTab.isDisplayed()) purchases.showHideSearchFilters();
    }


    @Then("^advanced search options should display$")
    public void advanced_search_options_should_display() {
        assertThat(ExpectedConditions.visibilityOf(purchases.searchOptinsTab));
    }

    @When("^user clicks on the search icon again$")
    public void user_clicks_on_the_search_icon_again()  {
        purchases.showHideSearchFilters();
    }

    @Then("^advanced search options should disapear$")
    public void advanced_search_options_should_disapear()  {
        assertThat(ExpectedConditions.invisibilityOf(purchases.searchOptinsTab));
    }

}
