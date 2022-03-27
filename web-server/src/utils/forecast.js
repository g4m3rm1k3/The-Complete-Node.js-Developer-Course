const request = require("request");

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=0f1e9a392d9c0c3c50e5faee5d84ece9&query=${latitude},${longitude}&units=f`;
	request({ url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to weather service", undefined);
		} else if (response.body.error) {
			callback("Unable to find location", undefined);
		} else {
			const {
				temperature,
				weather_descriptions,
				feelslike,
				wind_dir,
				wind_speed,
				humidity,
				visibility,
			} = response.body.current;
			callback(undefined, {
				temperature,
				weather_descriptions: `${
					weather_descriptions ? weather_descriptions[0] : "no description"
				}`,
				feelslike,
				wind_dir,
				wind_speed,
				humidity,
				visibility,
			});
		}
	});
};

module.exports = forecast;
