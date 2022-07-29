<script setup>
import wretch from "wretch";
import { ref } from "vue";
import InfoCard from "./components/InfoCard.vue";
import LogList from "./components/LogList.vue";
import WeatherCast from "./components/WeatherCast.vue";

const panel = ref({});
const orderedLogs = ref([{}])

wretch()
	.url("https://ott-fogliata.github.io/vuejs-s2i-repository/solar-panels.json")
	.get()
	.json(json => {
		panel.value = json
		orderedLogs.value = panel
			.value
			.logs
			.sort((a, b) => {
				return new Date(b.date) - new Date(a.date)
			})
		})

</script>

<template>
	<header>
	</header>
	<div class="weathercast-container">
		<WeatherCast />
		<!-- kWh daility -->
	</div>
	<div class="info-container">
		<InfoCard infoTitle="Power Production" :infoValue="panel['power-production'] + ' kW'" />
		<InfoCard infoTitle="This Month's Energy" :infoValue="panel['month-energy'] + ' kWh'" />
		<InfoCard infoTitle="Today's Energy" :infoValue="panel['today-energy'] + ' kWh'" />
		<InfoCard infoTitle="Left Time Energy" :infoValue="panel['left-time-energy'] + ' kWh'" />
	</div>
	<div class="log-container">
		<h2>Logs</h2>
		<ul>
			<LogList v-for="(log, index) in orderedLogs" :key="index" :Log="log"/>
		</ul>
	</div>
</template>

<style>
* {
	--clr-fg: #403F3B;
	--clr-bg: #e4d9b4;
	--clr-accent: #ffdd6e;
	--clr-faded: #e4d295;
	--clr-info: #eeddcc;
	--clr-warn: #ffcb6b;
	--clr-err: #fb4934;
}

body {
	color: var(--clr-fg);
	background-color: var(--clr-bg);
}

ul {
	padding: 0 3em;
}

.weathercast-container {
	font-size: 2rem;
}

.info-container {
	display: flex;
	width: 100%;
}
</style>
