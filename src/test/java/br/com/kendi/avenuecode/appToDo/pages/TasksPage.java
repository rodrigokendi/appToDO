package br.com.kendi.avenuecode.appToDo.pages;


import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TasksPage {

	WebDriver driver;
	

	@FindBy(id = "new_task")
	private WebElement newTaskTextBox;
	


	public TasksPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void she_provides_the_new_task_as(String newTask) throws Throwable {
		newTaskTextBox.sendKeys(newTask);
		newTaskTextBox.submit();
	}
	
	public void she_should_be_appended_on_the_list_created_task() throws Throwable {
		boolean task = driver.getPageSource().contains("Test tasket");
		Assert.assertTrue(task);

	}
	
	public void validate_the_task_did_not_created() throws Throwable {
		boolean task = driver.getPageSource().contains("empty");
		Assert.assertFalse(task);

	}
	
	public void validate_the_task_with_more_than_250_chars_did_not_created() throws Throwable {
		boolean task = driver.getPageSource().contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		Assert.assertFalse(task);

	}
	
	public void validate_the_msg_on_the_top_part_with_username() throws Throwable {
		boolean msg = driver.getPageSource().contains("Hey Rodrigo, this is your to do list for today:");
		Assert.assertTrue(msg);

	}
	
	

}
