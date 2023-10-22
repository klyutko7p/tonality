<template>
    <div v-for="word in allWords" class="grid grid-cols-7 text-center border-y-2 mb-5 border-hover-color pb-3 py-5">
        <h1>{{ word.term }}</h1>
        <h1>{{ (+word.value * 100).toFixed(1) }}% <br> ({{ word.value }})</h1>
        <h1>{{ (+word.pstv * 100).toFixed(1) }}% <br> ({{ word.pstv }})</h1>
        <h1>{{ (+word.neut * 100).toFixed(1) }}% <br> ({{ word.neut }})</h1>
        <h1>{{ (+word.ngtv * 100).toFixed(1) }}% <br> ({{ word.ngtv }})</h1>
        <h1>{{ (+word.dunno * 100).toFixed(1) }}% <br> ({{ word.dunno }})</h1>
        <h1>{{ word.antonym }}</h1>
    </div>
</template>

<script setup lang="ts">

defineProps({
    allWords: { type: Array<Tonality>, required: true },
})

</script>

<style scoped></style>