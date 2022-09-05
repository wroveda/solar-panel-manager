<template>
	<div class="temp-container">
		<fa-icon class="icon" icon="fa-solid fa-temperature-high" />
		<div class="temperature"> {{ weather.temp }}°C</div>
	</div>
</template>


<script setup>
import wretch from "wretch"
import { ref } from "vue"
let weather = ref({})

// Fetch weather forecast from Openweather
function updateWeather() {
	wretch("https://api.openweathermap.org/data/2.5/onecall?lat=41.902782&lon=12.496366&units=metric&exclude=minutely,hourly,daily,alerts&appid=006e2bf402d1adf07010f5bbffdb1036")
		.get()
		.json(json => { weather.value = json.current })
}

updateWeather()
setInterval(updateWeather, 600000)
</script>


<style scoped>
.icon {
	margin: 0.25em 0;
}

.temp-container {
	display: flex;
}

.temperature {
	margin-left: 1em;
}
</style>
