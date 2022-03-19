const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=0f1e9a392d9c0c3c50e5faee5d84ece9&query=43.443,-71.0925&units=f`;

const request = http.request(url, (response) => {
	//
	let data = "";
	response.on("data", (chunk) => {
		data = data + chunk.toString();
	});
	response.on("end", () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on("error", (error) => {
	console.log("An error", error);
});
request.end();
