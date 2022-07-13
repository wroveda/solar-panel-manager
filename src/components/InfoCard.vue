<script setup>
const props = defineProps({
	infoTitle: String,
	infoValue: String
})
</script>

<template>
	<div class="info">
		<h3 class="info__title">{{ props.infoTitle }}</h3>
		<p class="info__value">{{ props.infoValue }}</p>
	</div>
</template>

<style scoped>
.info {
	background-color: var(--clr-accent);
	padding: 2em;
	margin: 0.5em;
	border-radius: 1em;
	width: 100%;
}

.info__title {
	font-size: 1.8rem;
	margin: 0.2em 0;
}

.info__value {
	font-size: 1.5rem;
	margin-left: 0.2em;
}
</style>
