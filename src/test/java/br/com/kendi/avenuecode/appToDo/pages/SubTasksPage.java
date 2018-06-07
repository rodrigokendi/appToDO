package br.com.kendi.avenuecode.appToDo.pages;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SubTasksPage {

	WebDriver driver;

	@FindBy(xpath = "//button[contains(text(), 'Manage')]")
	private WebElement manageSubTaskBtn;

	@FindBy(id = "new_sub_task")
	private WebElement newSubTaskText;

	@FindBy(id = "dueDate")
	private WebElement dueDateText;

	@FindBy(id = "add-subtask")
	private WebElement addBtn;

	@FindBy(id = "edit_task")
	private WebElement editTaskText;

	@FindBy(xpath = "//button[contains(text(), 'Close')]")
	private WebElement closeBtn;

	public SubTasksPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void she_clicks_on_the_button_Manage_Subtasks() throws Throwable {
		manageSubTaskBtn.click();
	}

	public void she_types_SubTask_Description(String newSubTask) throws Throwable {
		newSubTaskText.sendKeys(newSubTask);

	}

	public void she_types_due_date(String dueDate) throws Throwable {
		dueDateText.clear();
		dueDateText.sendKeys(dueDate);

	}

	public void she_clicks_on_the_button_add() throws Throwable {
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		addBtn.click();
	}

	public void she_should_be_appended_on_the_list_of_created_subtask() throws Throwable {
		boolean subTask = driver.getPageSource().contains("Test SubsTask");
		Assert.assertTrue(subTask);

	}

	public void she_should_not_be_appended_on_the_list_of_created_subtask_empty() throws Throwable {
		boolean subTask = driver.getPageSource().contains("empty");
		Assert.assertFalse(subTask);

	}

	public void she_should_verify_that_field_task_description_is_read_only() throws Throwable {
		Assert.assertNotNull(editTaskText.getAttribute("readonly"));

	}
	
	public void she_should_not_be_appended_on_the_list_of_created_subtask() throws Throwable {
		boolean subTask = driver.getPageSource().contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		Assert.assertFalse(subTask);

	}

	public void clearTask() {
		closeBtn.click();
	}

}
