package steps;

import cucumber.api.java.en.*;
import utilities.Conditions;

public class OdooPurchasesCreateNewVendorProfile extends BaseTest {
    @Given("^User is in vendors module$")
    public void user_is_in_vendors_module() {
        purchases.switchTab("Vendors");
    }
    @When("^User clicks on Create Vendor button$")
    public void user_clicks_on_Create_Vendor_button()  {
        $(".btn.btn-primary.btn-sm.o-kanban-button-new.btn-default").click();
    }

    @When("^User fills out the neede information$")
    public void user_fills_out_the_neede_information()  {

        $(".btn.btn-primary.btn-sm.o-kanban-button-new.btn-default").click();
        // typing the Vendor name in the nameBox
        $(".o_field_char.o_field_widget.o_input.o_required_modifier").sendKeys("Cybertek");
        //locating the Vendor Address
        inputToAfield(byXpath("(//input[@class='o_field_char o_field_widget o_input o_address_street'])[1]"), config.getProperty("VendorAddress"));
        //locating the City
        inputToAfield(byXpath("(//input[@class='o_field_char o_field_widget o_input o_address_city'])[1]"), config.getProperty("City"));
        //locating the State

        inputToAfield(byXpath( "(//input[@class='o_input ui-autocomplete-input'])[2]"), "ILLINOIS");
        //locating the ZIP Code
        inputToAfield(byXpath("(//input[@class='o_field_char o_field_widget o_input o_address_zip'])[1]"), config.getProperty("Zip") );
        //locating the Country

        inputToAfield(byXpath( "(//input[@class='o_input ui-autocomplete-input'])[3]"), "USA");
        //locating the vendor TIN

        inputToAfield(byXpath("(//input[@class='o_field_char o_field_widget o_input'])[1]"), config.getProperty("TIN"));
        //locating the TAG

        inputToAfield(byXpath( "(//input[@class='o_input ui-autocomplete-input'])[4]"), "Developer");

        //locating the Vendor Phone

        inputToAfield(byXpath("(//input[@class='o_field_phone o_field_widget o_input'])[1]"), config.getProperty("VendorPhone"));
        //locating the Vendor e-mail

        inputToAfield(byXpath("(//input[@class='o_field_email o_field_widget o_input'])[1]"),config.getProperty("VendorEmail") );
        //locating the Vendor website

        // $x("(//input[@class='o_field_url o_field_widget o_input'])[1]").sendKeys(config.getProperty("VendorWebsite"));
        inputToAfield(byXpath("(//input[@class='o_field_url o_field_widget o_input'])[1]"), config.getProperty("VendorWebsite") );
        //locating the Tittle

        inputToAfield(byXpath("(//input[@class='o_input ui-autocomplete-input'])[5]"), "IT");
        log.info("User filled the information needed");
    }

    @When("^Creates a note for profile$")
    public void creates_a_note_for_profile()  {
        //Leave a note
        $x("(//a[@data-toggle='tab'])[2]").click();
        inputToAfield(byCss(".o_field_text.o_field_widget.o_input"),config.getProperty("note") );
        log.info("User added a note");
    }

    @Then("^Message account is created should appear$")
    public void message_account_is_created_should_appear() {
        assertThat(Conditions.textToBePresentInElementLocatedIgnoreCase(byCss(".o_thread_message_content"), "Contact created"));
    }

}
