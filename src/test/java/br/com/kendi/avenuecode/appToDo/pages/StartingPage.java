package br.com.kendi.avenuecode.appToDo.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StartingPage {
	
	WebDriver driver;
	
	@FindBy(linkText = "Sign In")
	private WebElement SignInLinkText;
	
	@FindBy(id = "user_email")
	private WebElement email;
	
	@FindBy(id = "user_password")
	private WebElement password;
	
	@FindBy(name = "commit")
	private WebElement commitBtn;

	
	public StartingPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}
	
	public void doLogin() throws Throwable {
		SignInLinkText.click();
		email.sendKeys("rodrigo.kendi@yahoo.com.br");
		password.sendKeys("avenuecode");
		commitBtn.click();
		
	}
}
