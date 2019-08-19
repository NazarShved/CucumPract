package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src\\test\\resources\\features",
        glue = "steps",
        format = {"pretty", "html:target/test-output", "json:target/json_output/cucumber.json","junit:target/junit_xml_output/cucumber.xml"},
        dryRun = false,
        monochrome = true,
 //       strict = false,
        tags = "@project"
        //tags = {"@SanityTest, @End2End"} Execute test cases that are a part of any of both
        //tags = {"@SanityTest", "@End2End"} Execute test cases that are part of BOTH at the same time
        //tags = {"~@End2End"}//ignore specified scenario
        // tags={"~@End2End", "~@SanityTest"}//ignore tests that are part of either
)

public class Runner {
}
