package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {

	LoginPage loginPage;

	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);

	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/");

	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginPage.enterUserName(username);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPage.enterPassword(password);

	}

	@When("^User cliks on sign in button$")
	public void user_cliks_on_sign_in_button() {
		loginPage.clickSignInButton();

	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);

	}

	@When("^User clicks on BankCash button$")
	public void user_cliks_on_bankcash_button() {
		loginPage.clickBankCashButton();
	}

	@When("^User clicks on NewAccount button$")
	public void user_clicks_on_NewAccount_button() {
		loginPage.clickNewAccountButton();
	}

	@When("^User enters accountTitle as \"([^\"]*)\"$")
	public void user_enters_accountTitle_as(String accountTitle) {
		loginPage.enterAccountTitle(accountTitle);

	}

	@When("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String accountDescription) {
		loginPage.enterAccountDescription(accountDescription);

	}
	@When("^User enters initialBalance as \"([^\"]*)\"$")
	public void user_enters_initialBalance_as(String initialBalance) {
		loginPage.enterInitialBalance(initialBalance);

	}
	@When("^User enters accountNumber as \"([^\"]*)\"$")
	public void user_enters_accountNumber_as(String accountNumber) {
		loginPage.enterAccountNumber(accountNumber);
	}

	@When("^User enters contactPerson as \"([^\"]*)\"$")
	public void user_enters_contactPerson_as(String contactPerson) {
	   loginPage.enterContactPerson(contactPerson);
	}

	@When("^User enters PhoneNumber as \"([^\"]*)\"$")
	public void user_enters_PhoneNumber_as(String phoneNumber) {
	   loginPage.enterPhoneNumber(phoneNumber);
	}

	@When("^User enters internetBankingURL \"([^\"]*)\"$")
	public void user_enters_internetBankingURL(String internetBankingURL){
	    loginPage.enterInternetBankingURL(internetBankingURL);
	}

	@When("^User clicks on Submit button$")
	public void user_clicks_on_Submit_button(){
	    loginPage.clickOnSubmit();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully(){
		String expectedTitle1 = "Accounts- iBilling";
		String actualTitle1 = loginPage.getPageTitle1();
		Assert.assertEquals(expectedTitle1, actualTitle1);
	   
	}
	
	// @After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}


