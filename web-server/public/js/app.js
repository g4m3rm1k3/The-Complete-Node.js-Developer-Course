const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
	messageOne.textContent = "Loading ...";
	messageTwo.textContent = "";
	e.preventDefault();
	const location = search.value;
	fetch(`/weather?address=${location}`).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				messageOne.textContent = data.error;
			} else {
				console.log(data.forecast);
				messageOne.textContent = data.location;
				messageTwo.textContent = `${data.forecast.weather_descriptions} temp: ${data.forecast.temperature} feels like: ${data.forecast.feelslike}`;
			}
		});
	});
	search.value = "";
});
