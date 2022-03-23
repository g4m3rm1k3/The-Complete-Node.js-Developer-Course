const request = require("request");

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=pk.eyJ1IjoibW1sY2VhbiIsImEiOiJja3hrYThqNmUwZjNnMnZtd3B1cTd4a294In0.eGhiDCjQXRz0t5j_XEd0qQ&limit=1"`;
	request({ url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to location services", undefined);
		} else if (!response.body.features[0]) {
			callback("Unable to find location. Try another search", undefined);
		} else {
			const { center, place_name } = response.body.features[0];
			callback(undefined, {
				latitude: center[0],
				longitude: center[1],
				location: place_name,
			});
		}
	});
	//
};

module.exports = geocode;
