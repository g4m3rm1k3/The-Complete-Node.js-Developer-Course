const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Middleton New Hampshire", (error, data) => {
	const { longitude, latitude, location } = data;
	forecast(longitude, latitude, (error, res) => {
		console.log(res, location);
	});
});

// forecast({ lat: 44.1545, long: -75.7088 }, (error, data) => {
// 	console.log("Error", error);
// 	console.log("Data", data);
// });
