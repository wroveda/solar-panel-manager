<script setup>
const props = defineProps({
	Log: Object
})
</script>

<template>
	<div class="container">
		<section :class="Log.type">{{ Log.date }}</section>
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
	flex: 1 1 1;
	width: auto;
	overflow: scroll;
	background: var(--clr-faded);
	border-radius: 0.5em;
	margin-left: 0.5em;
}

/* Class names MUST correspond to a 'log.type' from the API */
.info {
	background-color: var(--clr-info);
	border-radius: 0.5em;
}

.warning {
	background-color: var(--clr-warn);
	border-radius: 0.5em;
}

.error {
	background-color: var(--clr-err);
	border-radius: 0.5em;
}
</style>
