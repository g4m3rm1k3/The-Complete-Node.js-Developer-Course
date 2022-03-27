// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log("Unable to connect to database!");
		}
		const db = client.db(databaseName);

		db.collection("users").findOne(
			{ _id: new ObjectID("623fad7150d1034978d1bbd7") },
			(error, user) => {
				if (error) {
					return console.log("Unable to fetch");
				}
				console.log(user);
			}
		);
		db.collection("users")
			.find({ age: 27 })
			.toArray((error, users) => {
				if (error) {
					return console.log("unable to fetch users");
				}
				console.log(users);
			});

		db.collection("users")
			.find({ age: 27 })
			.count((error, count) => {
				if (error) {
					return console.log("unable to fetch users");
				}
				console.log(count);
			});

		db.collection("tasks").findOne(
			{ _id: new ObjectID("624039a7a85726338c05e8b1") },
			(error, task) => {
				if (error) {
					return console.log("unable to fetch tasks");
				}
				console.log(task);
			}
		);
		db.collection("tasks")
			.find({ completed: false })
			.toArray((error, task) => {
				if (error) {
					return console.log("unable to find tasks");
				}
				console.log(task);
			});
	}
);
