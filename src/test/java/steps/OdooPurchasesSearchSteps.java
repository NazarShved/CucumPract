package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utilities.Conditions;


public class OdooPurchasesSearchSteps extends BaseTest{
    public String testInput = config.getProperty("testSearchInput");

    @Given("^go to odoo, log in and go to purcases$")
    public void go_to_odoo_log_in_and_go_to_purcases() {
        purchases.goToPurchases();
        log.info("User logged in and in Purchases module");
    }


    @Given("^user is on odoo purchases/products module$")
    public void user_is_on_odoo_purchases_products_module() {
        purchases.switchTab("Products");
        log.info("Tab switched to Products");
    }

    @When("^user enters a word \"([^\"]*)\" into a search box$")
    public void user_enters_a_word_into_a_search_box(String input){
        purchases.search(input);
        log.info("Searching for " + input);
    }


    @Then("^system should display results that contain the word \"([^\"]*)\"$")
    public void system_should_display_results_that_contain_the_word(String input){
        assertThat(Conditions.textToBePresentInElementsLocatedIgnoreCase(byCss(".o_kanban_record_title"), input));
        log.info("Word " + input +" is present in search results");
    }

    @Then("^a small tab with the word \"([^\"]*)\" appears in the search box$")
    public void a_small_tab_with_the_word_appears_in_the_search_box(String input){
        assertThat(Conditions.textToBePresentInElementLocatedIgnoreCase(byXpath("(//*[@class = 'o_facet_values']/span)[2]"), input));
        log.info("Word " + input + " is present in search field as a tab");
    }

    //---------> 2nd SCENARIO <----------------

    @Given("^user clicks on the search icon$")
    public void user_clicks_on_the_search_icon() {
        if(!purchases.searchOptinsTab.isDisplayed()) purchases.showHideSearchFilters();
        log.info("User clicked on search icon");
    }


    @Then("^advanced search options should display$")
    public void advanced_search_options_should_display() {
        assertThat(ExpectedConditions.visibilityOf(purchases.searchOptinsTab));
        log.info("Advanced search options tab appeared");
    }

    @When("^user clicks on the search icon again$")
    public void user_clicks_on_the_search_icon_again()  {
        purchases.showHideSearchFilters();
        log.info("User clicks again on the icon ");
    }

    @Then("^advanced search options should disappear$")
    public void advanced_search_options_should_disappear()  {
        assertThat(ExpectedConditions.invisibilityOf(purchases.searchOptinsTab));
        log.info("Advanced search tab is invisible");
    }

}
