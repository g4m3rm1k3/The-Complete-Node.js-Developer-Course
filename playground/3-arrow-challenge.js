const chalk = require("chalk");
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the uncompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
	tasks: [
		{
			text: "Grocery shopping",
			completed: true,
		},
		{
			text: "Clean yard",
			completed: false,
		},
		{
			text: "Film course",
			completed: false,
		},
	],
	getTasksToDo() {
		this.tasks.forEach((task) => {
			console.log(
				`${task.text}: ${
					!task.completed ? chalk.red(task.text) : chalk.green("task Complete")
				}`
			);
		});
	},
};

tasks.getTasksToDo();
