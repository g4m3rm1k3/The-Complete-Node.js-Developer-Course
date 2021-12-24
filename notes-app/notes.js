const fs = require("fs");
const chalk = require("chalk");

const readNote = (title) => {
	const notes = loadNotes();
	const foundNote = notes.find((note) => title === note.title);
	if (foundNote) {
		const { body } = foundNote;
		console.log(`${title}: ${body}`);
		return foundNote;
	} else {
		console.log(chalk.red("Note not found"));
		return null;
	}
};

const addNote = (title, body) => {
	const notes = loadNotes();
	const foundNote = readNote(title);
	if (foundNote) {
		console.log(chalk.red("Note already exist"));
		return;
	} else {
		notes.push({ title, body });
	}
	saveNotes(notes);
	console.log(chalk.green.bold.inverse("Note added"));
};

const removeNote = (title) => {
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

const updateNote = (title, body) => {
	const notes = loadNotes();
	const noteToUpdate = notes.find((note) => title === note.title);
	if (noteToUpdate) {
		noteToUpdate.body = body;
		saveNotes(notes);
		console.log(chalk.green("Note updated"));
	} else {
		console.log(chalk.red("Note not found"));
		return null;
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch {
		return [];
	}
};

const listNotes = () => {
	const notes = loadNotes();
	notes.forEach(({ title, body }) => {
		console.log(`title: ${title}\nBody: ${body}`);
	});
};

module.exports = {
	addNote,
	removeNote,
	listNotes,
	readNote,
	updateNote,
};
