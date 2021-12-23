const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
	return "Your notes...";
};

const addNote = function (title, body) {
	const notes = loadNotes();
	const foundNote = notes.find((note) => title === note.title);
	if (foundNote) {
		foundNote.body = body;
		console.log(chalk.yellow.bold.inverse("Note updated"));
		saveNotes(notes);
		return;
	} else {
		notes.push({ title, body });
	}
	saveNotes(notes);
	console.log(chalk.green.bold.inverse("Note added"));
};

const removeNote = function (title) {
	const notes = loadNotes();
	const savedNotes = notes.filter((note) => note.title !== title);
	const notesDiff = notes.length - savedNotes.length;
	if (!notesDiff) {
		console.log(chalk.red.bold.inverse("Note not found"));
	} else {
		console.log(
			chalk.green.bold.inverse(
				`${notesDiff} note${notesDiff > 1 ? "s" : ""} removed`
			)
		);
	}
	saveNotes(savedNotes);
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch {
		return [];
	}
};

module.exports = {
	getNotes,
	addNote,
	removeNote,
};
