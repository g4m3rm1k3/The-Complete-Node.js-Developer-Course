const fs = require("fs");
const chalk = require("chalk");

const yargs = require("yargs");
const yargsParser = require("yargs-parser");
const notes = require("./notes.js");

// Create add command
yargs.command({
	command: "add",
	description: "Add a new note",
	builder: {
		body: {
			description: "Note body",
			demandOption: true,
			type: "string",
		},
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler: ({ title, body }) => {
		notes.addNote(title, body);
	},
});

// Create remove command
yargs.command({
	command: "remove",
	describe: "remove a note",
	builder: {
		title: {
			describe: "Title of note to be removed",
			demandOption: true,
			type: "string",
		},
	},
	handler: ({ title }) => notes.removeNote(title),
});

yargs.command({
	command: "list",
	describe: "list your notes",
	handler: () => {
		console.log("listing out all notes");
	},
});

yargs.command({
	command: "read",
	describe: "read a note",
	handler: () => {
		console.log("reading a note");
	},
});

yargs.parse();
