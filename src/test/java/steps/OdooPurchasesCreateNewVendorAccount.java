package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.Conditions;

public class OdooPurchasesCreateNewVendorAccount extends BaseTest{

    @Given("^User is on Odoo Purchases/Vendor Bills module$")
    public void user_is_on_Odoo_Purchases_Vendor_Bills_module() throws Throwable {
            purchases.switchTab("Vendors");
            log.info("User in vendors module");
        }

    @When("^User clicks create button$")
    public void user_clicks_create_button() throws Throwable {
        $(".btn.btn-primary.btn-sm.o-kanban-button-new.btn-default").click();
        log.info("Create button clicked");
    }

        @When("^User types name$")
        public void user_types_name() throws Throwable {
            $(".o_field_char.o_field_widget.o_input.o_required_modifier").sendKeys("Tester1");
            log.info("Typed name into a field");
        }

    @When("^User clicks create button on the buttom of the page$")
    public void user_clicks_create_button_on_the_buttom_of_the_page() throws Throwable {
        $(".btn.btn-primary.btn-sm.o-kanban-button-new").click();
        log.info("Create button clicked");
    }



    @When("^User fills out form to create a new vendors account$")
    public void user_fills_out_form_to_create_a_new_vendors_account() throws Throwable {
        String inp = config.getProperty("contactName");
        $x("(//input[@class='o_field_char o_field_widget o_input o_required_modifier'])[2]").sendKeys(inp);
        $get(byCss(".o_input.ui-autocomplete-input"), 14).click();
        // selecting IT title
        $get(byCss(".ui-menu-item"), 6).click();
        // typing phoneNumber
        $x("(//input[@class='o_field_phone o_field_widget o_input'])[3]").sendKeys(config.getProperty("phoneNumber"));
        // making note for a new contact
        $x("(//textarea[@class='o_field_text o_field_widget o_input'])[2]").sendKeys(config.getProperty("note"));
        log.info("Information filled to create new vendors account");
    }

    @When("^User clicks Save&Close button$")
    public void user_clicks_Save_Close_button() throws Throwable {
        $x("(//button[@class='btn btn-sm btn-primary'])[1]").click();
        log.info("Save&Close button clicked");
    }



    @Then("^New contact info appears on the screen\\.$")
    public void new_contact_info_appears_on_the_screen() throws Throwable {
        String inp = config.getProperty("contactName");
        assertThat(Conditions.textToBePresentInElementLocatedIgnoreCase(byCss(".oe_kanban_details"),inp));
        log.info("New contact is created");

    }



}
