package br.com.kendi.avenuecode.appToDo.steps;

import br.com.kendi.avenuecode.appToDo.pages.SubTasksPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SubTasksSteps extends DriverFactory {

	@Given("^she clicks on the button Manage Subtasks$")
	public void she_clicks_on_the_button_Manage_Subtasks() throws Throwable {
		new SubTasksPage(driver).she_clicks_on_the_button_Manage_Subtasks();
	}

	@When("^she types SubTask Description as ([^\"]*)$")
	public void she_types_SubTask_Description(String newTask) throws Throwable {
		new SubTasksPage(driver).she_types_SubTask_Description(newTask);
	}

	@And("^she type SubTask Duedate as ([^\"]*)$")
	public void she_types_due_date(String dueDate) throws Throwable {
		new SubTasksPage(driver).she_types_due_date(dueDate);
	}

	@And("^she clicks on the button Add$")
	public void she_clicks_on_the_button_add() throws Throwable {
		new SubTasksPage(driver).she_clicks_on_the_button_add();
	}

	@Then("^she should be appended on the list of created subtask$")
	public void she_should_be_appended_on_the_list_of_created_subtask() throws Throwable {
		new SubTasksPage(driver).she_should_be_appended_on_the_list_of_created_subtask();
	}

	@Then("^she should not be appended on the list of created subtask empty$")
	public void she_should_not_be_appended_on_the_list_of_created_subtask_empty() throws Throwable {
		new SubTasksPage(driver).she_should_not_be_appended_on_the_list_of_created_subtask_empty();
	}

	@Then("^she should verify that field task description is read only$")
	public void she_should_verify_that_field_task_description_is_read_only() throws Throwable {
		new SubTasksPage(driver).she_should_verify_that_field_task_description_is_read_only();

	}
	
	@Then("^she should not be appended on the list of created subtask$")
	public void she_should_not_be_appended_on_the_list_of_created_subtask() throws Throwable {
		new SubTasksPage(driver).she_should_not_be_appended_on_the_list_of_created_subtask();
	}

}
