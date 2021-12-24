const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

let location = "";
for (let i = 2; i < 5; i++) {
	if (process.argv[i]) {
		location = location + " " + process.argv[i];
	} else {
		i = 5;
	}
}

if (location) {
	geocode(location, (error, data) => {
		if (error) {
			console.log(error);
		} else {
			const { longitude, latitude, location } = data;
			console.log(longitude, latitude);
			forecast(longitude, latitude, (error, res) => {
				console.log(res, location);
			});
		}
	});
} else {
	console.log("Please input a location");
}
