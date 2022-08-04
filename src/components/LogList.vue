<script setup>
const props = defineProps({
	Log: Object
})
</script>

<template>
	<div class="container">
		<section :class="Log.type" class="date">{{ Log.date }}</section>
		<section class="text">{{ Log.text }}</section>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	margin-bottom: 1em;
}

.container:last-child {
	margin-bottom: 0;
}

section {
	padding: 0.7em;
}

.text {
	width: fit-content;
	background: var(--clr-faded);
	border-radius: 0.5em;
	margin-left: 0.5em;
}

.date {
	border-radius: 0.5em;
	white-space: nowrap;
}

/* Class names MUST correspond to a 'log.type' from the API */
.info {
	background-color: var(--clr-info);
}

.warning {
	background-color: var(--clr-warn);
}

.error {
	background-color: var(--clr-err);
}

@media (max-width: 800px) {
	.date {
		min-width: 35%;
		max-width: 35%;
		white-space: normal;
		word-break: keep-all;
	}
}
</style>
