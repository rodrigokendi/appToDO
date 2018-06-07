Feature:
	As a ToDo App user
	I should be able to create a task
	So I can manage my tasks
	
Scenario: Create a new valid task

Given she is on app page
When she click on link My Tasks
And she creates a new task as Test tasket
Then she should be appended on the list of created task

Scenario: Create a task with more than max characters

Given she is on app page
When she click on link My Tasks
And she creates a new task as aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
Then the task with more than max characters did not created

Scenario: Create a empty task

Given she is on app page
When she click on link My Tasks
And she do not types a new task 
Then the task did not created

Scenario: Validate message on the top part 

Given she is on app page
When she click on link My Tasks
Then should see a correct message on the top part





