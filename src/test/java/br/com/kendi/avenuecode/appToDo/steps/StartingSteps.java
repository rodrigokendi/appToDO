package br.com.kendi.avenuecode.appToDo.steps;

import org.openqa.selenium.chrome.ChromeDriver;

import br.com.kendi.avenuecode.appToDo.pages.StartingPage;
import cucumber.api.java.en.Given;

public class StartingSteps extends DriverFactory {

	@Given("^she is on app page$")
	public void setup() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rodrigo.k.pereira\\Desktop\\drivers\\chromedriver.exe");

		driver = new ChromeDriver();
		driver.get("https://qa-test.avenuecode.com");
		driver.manage().window().maximize();
		new StartingPage(driver).doLogin();

	}

}
