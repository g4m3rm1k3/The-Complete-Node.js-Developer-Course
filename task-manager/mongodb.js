// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

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

		// db.collection("users").insertOne(
		// 	{
		// 		_id: id,
		// 		name: "Allison",
		// 		age: 35,
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to insert user");
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );

		// db.collection("users").insertMany(
		// 	[
		// 		{
		// 			name: "Jen",
		// 			age: 28,
		// 		},
		// 		{
		// 			name: "Gunther",
		// 			age: 27,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to insert documents");
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );
		// db.collection("tasks").insertMany(
		// 	[
		// 		{
		// 			description: "finish Node course",
		// 			completed: false,
		// 		},
		// 		{
		// 			description: "have a cup of coffee",
		// 			completed: true,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log(error);
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );
	}
);
