package br.com.kendi.avenuecode.appToDo.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {

	WebDriver driver;

	@FindBy(linkText = "My Tasks")
	private WebElement MyTasksLinkText;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	public void she_click_on_the_link_my_tasks() throws Throwable {
		MyTasksLinkText.click();
	}

}
