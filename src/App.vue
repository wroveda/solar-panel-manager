<template>
	<header>
		<div class="logo-container">
			<img src="./assets/img/hotel-icon.svg">
		</div>
		<div class="weathercast-container">
			<WeatherCast />
			<div>{{ curConsumption }} kWh</div>
		</div>
	</header>
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


<script setup>
import wretch from "wretch"
import { ref } from "vue"
import InfoCard from "./components/InfoCard.vue"
import LogList from "./components/LogList.vue"
import WeatherCast from "./components/WeatherCast.vue"

let curConsumption = ref(0)
setInterval(() => { curConsumption.value += 1 }, 1000)

const panel = ref({})
const orderedLogs = ref([{}])

// Fetch info from the API and update panel and logs
function updatePanelInfo() {
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
}

updatePanelInfo()
setInterval(updatePanelInfo, 5000)
</script>


<style>
@font-face {
	font-family: iosevka-typewriter;
	src: url(./assets/font/iosevka-typewriter-regular.ttf);
}

* {
	--clr-fg: #403F3B;
	--clr-bg: #FCF8E8;
	--clr-accent: #ffcb6b;
	--clr-faded: #eeddcc;
	--clr-info: #eeddcc;
	--clr-warn: #ffcb6b;
	--clr-err: #DF7861;
	
	font-family: iosevka-typewriter;
}

body {
	color: var(--clr-fg);
	background-color: var(--clr-bg);
}

header {
	display: flex;
}

h2 {
	font-size: 1.8rem;
}

.logo-container {
	width: 100%;
	align-self: center;
	margin-left: 1em;
}

.weathercast-container {
	font-size: 2rem;
	background-color: var(--clr-faded);
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 1em;
	border-radius: 0.5em;
	margin: 0.5em;
}

.info-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0 0.5em;
}

.log-container {
	border-top: 4px solid var(--clr-faded);
	margin-top: 2em;
}

.log-container > h2 {
	margin-left: 1em;
	margin-top: 1em;
}

.log-container > ul {
	padding: 0 3em;
}


@media (max-width: 800px) {
	header {
		flex-direction: column;
	}
	
	.logo-container {
		margin: 0;
		padding: 0.2em;
	}
	
	.weathercast-container {
		padding: 0.2em 0.5em;
	}
	
	.logo-container > img {
		width: 100%;
	}
	
	.log-container > h2 {
		margin-left: 0.2em;
	}
	.log-container > ul {
		padding: 0.2em;
	}
}
</style>
