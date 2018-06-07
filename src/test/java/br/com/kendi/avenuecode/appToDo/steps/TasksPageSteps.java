package br.com.kendi.avenuecode.appToDo.steps;

import br.com.kendi.avenuecode.appToDo.pages.TasksPage;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class TasksPageSteps extends DriverFactory {

	@And("^she creates a new task as ([^\"]*)$")
	public void she_provides_the_new_task_as(String newTask) throws Throwable {
		new TasksPage(driver).she_provides_the_new_task_as(newTask);
	}

	@Then("^she should be appended on the list of created task$")
	public void she_should_be_appended_on_the_list_created_task() throws Throwable {
		new TasksPage(driver).she_should_be_appended_on_the_list_created_task();
	}

	@And("^she do not types a new task$")
	public void she_do_not_type_new_task() throws Throwable {
		new TasksPage(driver).she_provides_the_new_task_as("");
	}

	@Then("^the task did not created$")
	public void validate_the_task_did_not_created() throws Throwable {
		new TasksPage(driver).validate_the_task_did_not_created();
	}

	@Then("^the task with more than max characters did not created$")
	public void validate_the_task_with_more_than_max_chars_did_not_created() throws Throwable {
		new TasksPage(driver).validate_the_task_with_more_than_250_chars_did_not_created();
	}

	@Then("^should see a correct message on the top part$")
	public void validate_the_msg_on_the_top_part_with_username() throws Throwable {
		new TasksPage(driver).validate_the_msg_on_the_top_part_with_username();
	}

	@After
	public void tearDown() {
		//new SubTasksPage(driver).clearTask();
		driver.quit();
	}

}
