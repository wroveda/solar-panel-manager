<template>
	<div class="temp-container">
		<fa-icon icon="fa-solid fa-temperature-high" />
		<div class="temperature"> {{ weather.temp }}</div>
	</div>
</template>

<script setup>
import wretch from "wretch";
import { ref } from "vue";
let weather = ref({})

wretch("https://api.openweathermap.org/data/2.5/onecall?lat=41.902782&lon=12.496366&units=metric&exclude=minutely,hourly,daily,alerts&appid=006e2bf402d1adf07010f5bbffdb1036")
	.get()
	.json(json => { weather.value = json.current })
</script>

<style scoped>
.temp-container {
	display: flex;
}
</style>
