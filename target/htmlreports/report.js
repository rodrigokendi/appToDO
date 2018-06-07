$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NewSubTaskWorkflow.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a ToDo App user\r\nI should be able to create a subtask\r\nSo I can break down my tasks in smaller pieces",
  "id": "",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "she is on app page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "she click on link My Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "she creates a new task as Test tasket",
  "keyword": "And "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 19920937026,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.she_click_on_the_link_my_tasks()"
});
formatter.result({
  "duration": 4040225641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test tasket",
      "offset": 26
    }
  ],
  "location": "TasksPageSteps.she_provides_the_new_task_as(String)"
});
formatter.result({
  "duration": 170249847,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create a new valid subtask",
  "description": "",
  "id": ";create-a-new-valid-subtask",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "she clicks on the button Manage Subtasks",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "she types SubTask Description as Test SubsTask",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "she type SubTask Duedate as 06/07/2018",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "she clicks on the button Add",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "she should be appended on the list of created subtask",
  "keyword": "Then "
});
formatter.match({
  "location": "SubTasksSteps.she_clicks_on_the_button_Manage_Subtasks()"
});
formatter.result({
  "duration": 177749334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test SubsTask",
      "offset": 33
    }
  ],
  "location": "SubTasksSteps.she_types_SubTask_Description(String)"
});
formatter.result({
  "duration": 164699487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2018",
      "offset": 28
    }
  ],
  "location": "SubTasksSteps.she_types_due_date(String)"
});
formatter.result({
  "duration": 196860308,
  "status": "passed"
});
formatter.match({
  "location": "SubTasksSteps.she_clicks_on_the_button_add()"
});
formatter.result({
  "duration": 115266872,
  "status": "passed"
});
formatter.match({
  "location": "SubTasksSteps.she_should_be_appended_on_the_list_of_created_subtask()"
});
formatter.result({
  "duration": 17409231,
  "status": "passed"
});
formatter.after({
  "duration": 855152000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "she is on app page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "she click on link My Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "she creates a new task as Test tasket",
  "keyword": "And "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 18680922666,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.she_click_on_the_link_my_tasks()"
});
formatter.result({
  "duration": 3206493539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test tasket",
      "offset": 26
    }
  ],
  "location": "TasksPageSteps.she_provides_the_new_task_as(String)"
});
formatter.result({
  "duration": 194296615,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Create a new subtask without fields required",
  "description": "",
  "id": ";create-a-new-subtask-without-fields-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "she clicks on the button Manage Subtasks",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "she clicks on the button Add",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "she should not be appended on the list of created subtask empty",
  "keyword": "Then "
});
formatter.match({
  "location": "SubTasksSteps.she_clicks_on_the_button_Manage_Subtasks()"
});
formatter.result({
  "duration": 142174770,
  "status": "passed"
});
formatter.match({
  "location": "SubTasksSteps.she_clicks_on_the_button_add()"
});
formatter.result({
  "duration": 226534564,
  "status": "passed"
});
formatter.match({
  "location": "SubTasksSteps.she_should_not_be_appended_on_the_list_of_created_subtask_empty()"
});
formatter.result({
  "duration": 9682461,
  "status": "passed"
});
formatter.after({
  "duration": 915565949,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "she is on app page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "she click on link My Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "she creates a new task as Test tasket",
  "keyword": "And "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 17356409025,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.she_click_on_the_link_my_tasks()"
});
formatter.result({
  "duration": 3218880410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test tasket",
      "offset": 26
    }
  ],
  "location": "TasksPageSteps.she_provides_the_new_task_as(String)"
});
formatter.result({
  "duration": 218513230,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validate field with task description is read only",
  "description": "",
  "id": ";validate-field-with-task-description-is-read-only",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "she clicks on the button Manage Subtasks",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "she should verify that field task description is read only",
  "keyword": "Then "
});
formatter.match({
  "location": "SubTasksSteps.she_clicks_on_the_button_Manage_Subtasks()"
});
formatter.result({
  "duration": 159937231,
  "status": "passed"
});
formatter.match({
  "location": "SubTasksSteps.she_should_verify_that_field_task_description_is_read_only()"
});
formatter.result({
  "duration": 44840205,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertNotNull(Assert.java:712)\r\n\tat org.junit.Assert.assertNotNull(Assert.java:722)\r\n\tat br.com.kendi.avenuecode.appToDo.pages.SubTasksPage.she_should_verify_that_field_task_description_is_read_only(SubTasksPage.java:72)\r\n\tat br.com.kendi.avenuecode.appToDo.steps.SubTasksSteps.she_should_verify_that_field_task_description_is_read_only(SubTasksSteps.java:43)\r\n\tat ✽.Then she should verify that field task description is read only(NewSubTaskWorkflow.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 872502974,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "she is on app page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "she click on link My Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "she creates a new task as Test tasket",
  "keyword": "And "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 19406765539,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.she_click_on_the_link_my_tasks()"
});
formatter.result({
  "duration": 3403746462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test tasket",
      "offset": 26
    }
  ],
  "location": "TasksPageSteps.she_provides_the_new_task_as(String)"
});
formatter.result({
  "duration": 193007179,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Create a subtask with more than max characters",
  "description": "",
  "id": ";create-a-subtask-with-more-than-max-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "she clicks on the button Manage Subtasks",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "she types SubTask Description as aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "she type SubTask Duedate as 06/07/2018",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "she clicks on the button Add",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "she should not be appended on the list of created subtask",
  "keyword": "Then "
});
formatter.match({
  "location": "SubTasksSteps.she_clicks_on_the_button_Manage_Subtasks()"
});
formatter.result({
  "duration": 152009436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "offset": 33
    }
  ],
  "location": "SubTasksSteps.she_types_SubTask_Description(String)"
});
formatter.result({
  "duration": 1300114872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2018",
      "offset": 28
    }
  ],
  "location": "SubTasksSteps.she_types_due_date(String)"
});
formatter.result({
  "duration": 156788923,
  "status": "passed"
});
formatter.match({
  "location": "SubTasksSteps.she_clicks_on_the_button_add()"
});
formatter.result({
  "duration": 100047590,
  "status": "passed"
});
formatter.match({
  "location": "SubTasksSteps.she_should_not_be_appended_on_the_list_of_created_subtask()"
});
formatter.result({
  "duration": 14382359,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat br.com.kendi.avenuecode.appToDo.pages.SubTasksPage.she_should_not_be_appended_on_the_list_of_created_subtask(SubTasksPage.java:78)\r\n\tat br.com.kendi.avenuecode.appToDo.steps.SubTasksSteps.she_should_not_be_appended_on_the_list_of_created_subtask(SubTasksSteps.java:49)\r\n\tat ✽.Then she should not be appended on the list of created subtask(NewSubTaskWorkflow.feature:41)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 861703385,
  "status": "passed"
});
formatter.uri("NewTaskWorkflow.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a ToDo App user\r\nI should be able to create a task\r\nSo I can manage my tasks",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Create a new valid task",
  "description": "",
  "id": ";create-a-new-valid-task",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "she is on app page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "she click on link My Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "she creates a new task as Test tasket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she should be appended on the list of created task",
  "keyword": "Then "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 18248581744,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.she_click_on_the_link_my_tasks()"
});
formatter.result({
  "duration": 3349483898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test tasket",
      "offset": 26
    }
  ],
  "location": "TasksPageSteps.she_provides_the_new_task_as(String)"
});
formatter.result({
  "duration": 175660718,
  "status": "passed"
});
formatter.match({
  "location": "TasksPageSteps.she_should_be_appended_on_the_list_created_task()"
});
formatter.result({
  "duration": 6582975,
  "status": "passed"
});
formatter.after({
  "duration": 821006359,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create a task with more than max characters",
  "description": "",
  "id": ";create-a-task-with-more-than-max-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "she is on app page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "she click on link My Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "she types a new task as aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the task with more than max characters did not created",
  "keyword": "Then "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 17569218461,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.she_click_on_the_link_my_tasks()"
});
formatter.result({
  "duration": 3327911385,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "TasksPageSteps.validate_the_task_with_more_than_max_chars_did_not_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 828890257,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Create a empty task",
  "description": "",
  "id": ";create-a-empty-task",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "she is on app page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "she click on link My Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "she do not types a new task",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the task did not created",
  "keyword": "Then "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 17520120615,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.she_click_on_the_link_my_tasks()"
});
formatter.result({
  "duration": 3137798975,
  "status": "passed"
});
formatter.match({
  "location": "TasksPageSteps.she_do_not_type_new_task()"
});
formatter.result({
  "duration": 151935590,
  "status": "passed"
});
formatter.match({
  "location": "TasksPageSteps.validate_the_task_did_not_created()"
});
formatter.result({
  "duration": 15272205,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat br.com.kendi.avenuecode.appToDo.pages.TasksPage.validate_the_task_did_not_created(TasksPage.java:38)\r\n\tat br.com.kendi.avenuecode.appToDo.steps.TasksPageSteps.validate_the_task_did_not_created(TasksPageSteps.java:28)\r\n\tat ✽.Then the task did not created(NewTaskWorkflow.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 852995282,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate message on the top part",
  "description": "",
  "id": ";validate-message-on-the-top-part",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "she is on app page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "she click on link My Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "should see a correct message on the top part",
  "keyword": "Then "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 18286582975,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.she_click_on_the_link_my_tasks()"
});
formatter.result({
  "duration": 3502472205,
  "status": "passed"
});
formatter.match({
  "location": "TasksPageSteps.validate_the_msg_on_the_top_part_with_username()"
});
formatter.result({
  "duration": 13200000,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat br.com.kendi.avenuecode.appToDo.pages.TasksPage.validate_the_msg_on_the_top_part_with_username(TasksPage.java:50)\r\n\tat br.com.kendi.avenuecode.appToDo.steps.TasksPageSteps.validate_the_msg_on_the_top_part_with_username(TasksPageSteps.java:38)\r\n\tat ✽.Then should see a correct message on the top part(NewTaskWorkflow.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1507273847,
  "status": "passed"
});
});