const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
	res.send({ forecast: "snowing", date: "today" });
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
	console.log("Server is up on port 3000");
});
