package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement UserName;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement Password;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement SignInButton;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	WebElement BankCashButton;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement NewAccountButton;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement AccountDescription;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement InitialBalance;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement PhoneNumber;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement InternetBankingURL;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement Submit;
	
	

	// Methods to interact with the elements
	public void enterUserName(String username) {
		UserName.sendKeys(username);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterPassword(String password) {
		Password.sendKeys(password);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickSignInButton() {
		SignInButton.click();
		;
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

	public void clickBankCashButton() {
		BankCashButton.click();
		;
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickNewAccountButton() {
		NewAccountButton.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterAccountTitle(String accountTitle) {
		AccountTitle.sendKeys(accountTitle);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterAccountDescription(String accountDescription) {
		AccountDescription.sendKeys(accountDescription);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterInitialBalance(String initialBalance) {
		InitialBalance.sendKeys(initialBalance);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterContactPerson(String contactPerson) {
		ContactPerson.sendKeys(contactPerson);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterPhoneNumber(String phoneNumber) {
		PhoneNumber.sendKeys(phoneNumber);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterInternetBankingURL(String internetBankingURL) {
		InternetBankingURL.sendKeys(internetBankingURL);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void clickOnSubmit() {
		Submit.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public String getPageTitle1() {
		return driver.getTitle();
	}


}

