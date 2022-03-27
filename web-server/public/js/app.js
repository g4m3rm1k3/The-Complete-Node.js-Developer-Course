const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const location = search.value;

	messageOne.textContent = "Loading ...";
	messageTwo.textContent = "";

	fetch(`/weather?address=${location}`).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				messageOne.textContent = data.error;
			} else {
				messageOne.textContent = data.location;
				messageTwo.textContent = `${data.forecast.weather_descriptions} temp: ${data.forecast.temperature} feels like: ${data.forecast.feelslike}
				wind speed ${data.forecast.wind_speed}`;
			}
		});
	});
	search.value = "";
});
