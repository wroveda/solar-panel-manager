<script setup>
import wretch from "wretch";
import { ref } from "vue";
import InfoCard from "./components/InfoCard.vue";

const panel = ref({});

wretch()
	.url("https://ott-fogliata.github.io/vuejs-s2i-repository/solar-panels.json")
	.get()
	.json(json => {panel.value = json})
</script>

<template>
	<header>
	</header>
	<div class="info-container">
		<InfoCard infoTitle="Power Production" :infoValue="panel['power-production'] + ' kW'" />
		<InfoCard infoTitle="This Month's Energy" :infoValue="panel['month-energy'] + ' kWh'" />
		<InfoCard infoTitle="Today's Energy" :infoValue="panel['today-energy'] + ' kWh'" />
		<InfoCard infoTitle="Left Time Energy" :infoValue="panel['left-time-energy'] + ' kWh'" />
	</div>
</template>

<style>
* {
	--clr-fg: #403F3B;
	--clr-bg: #e4d9b4;
	--clr-accent: #ffdd6e;
	--clr-faded: #e4d295;
}

body {
	color: var(--clr-fg);
	background-color: var(--clr-bg);
}

.info-container {
	display: flex;
	width: 100%;
}
</style>
