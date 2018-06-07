package br.com.kendi.avenuecode.appToDo.steps;

import br.com.kendi.avenuecode.appToDo.pages.HomePage;
import cucumber.api.java.en.When;

public class HomePageSteps extends DriverFactory{
	

	@When("^she click on link My Tasks$")
	public void she_click_on_the_link_my_tasks() throws Throwable {
		new HomePage(driver).she_click_on_the_link_my_tasks();
	}


}
