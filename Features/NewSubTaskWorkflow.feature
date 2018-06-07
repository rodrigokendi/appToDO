Feature:
	As a ToDo App user
	I should be able to create a subtask
	So I can break down my tasks in smaller pieces
	
	
Background:

Given she is on app page
When she click on link My Tasks
And she creates a new task as Test tasket

Scenario: Create a new valid subtask

Given she clicks on the button Manage Subtasks 
When she types SubTask Description as Test SubsTask
And she type SubTask Duedate as 06/07/2018
And she clicks on the button Add
Then she should be appended on the list of created subtask


Scenario: Create a new subtask without fields required

Given she clicks on the button Manage Subtasks 
When  she clicks on the button Add
Then she should not be appended on the list of created subtask empty


Scenario: Validate field with task description is read only

Given she clicks on the button Manage Subtasks 
Then she should verify that field task description is read only


Scenario: Create a subtask with more than max characters

Given she clicks on the button Manage Subtasks 
When she types SubTask Description as aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
And she type SubTask Duedate as 06/07/2018
And she clicks on the button Add
Then she should not be appended on the list of created subtask



