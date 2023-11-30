<script setup lang="ts">
defineProps({
    allWords: { type: Array<Tonality>, required: true },
})
</script>

<template>
    <div v-for="word in allWords"
        class="grid grid-cols-7 text-center border-y-2 mb-5 border-hover-color pb-3 py-5 max-lg:hidden">
        <h1>{{ word.term }}</h1>
        <h1>{{ (+word.value * 100).toFixed(1) }}% <br> ({{ word.value }})</h1>
        <h1>{{ (+word.pstv * 100).toFixed(1) }}% <br> ({{ word.pstv }})</h1>
        <h1>{{ (+word.neut * 100).toFixed(1) }}% <br> ({{ word.neut }})</h1>
        <h1>{{ (+word.ngtv * 100).toFixed(1) }}% <br> ({{ word.ngtv }})</h1>
        <h1>{{ (+word.dunno * 100).toFixed(1) }}% <br> ({{ word.dunno }})</h1>
        <h1>{{ word.antonym }}</h1>
    </div>
    <div v-for="word in allWords" class="hidden text-center border-y-2 mb-5 px-3 border-hover-color pb-3 py-5 max-lg:block">
        <div>
            <div class="grid grid-cols-2 mb-3">
                <h1 class="text-left">Слово или словосочетание: </h1>
                <h1 class="text-right">{{ word.term }}</h1>
            </div>
            <div class="grid grid-cols-2 mb-3">
                <h1 class="text-left">Значение: </h1>
                <h1 class="text-right">{{ (+word.value * 100).toFixed(1) }}% ({{ word.value }})</h1>
            </div>
            <div class="grid grid-cols-2 mb-3">
                <h1 class="text-left">Доля голосов за положительную тональность: </h1>
                <h1 class="text-right">{{ (+word.pstv * 100).toFixed(1) }}% ({{ word.pstv }})</h1>
            </div>
            <div class="grid grid-cols-2 mb-3">
                <h1 class="text-left">Доля голосов за нейтральную тональность: </h1>
                <h1 class="text-right">{{ (+word.neut * 100).toFixed(1) }}% ({{ word.neut }})</h1>
            </div>
            <div class="grid grid-cols-2 mb-3">
                <h1 class="text-left">Доля голосов за отрицательную тональность: </h1>
                <h1 class="text-right">{{ (+word.ngtv * 100).toFixed(1) }}% ({{ word.ngtv }})</h1>
            </div>
            <div class="grid grid-cols-2 mb-3">
                <h1 class="text-left">Доля голосов "не знаю": </h1>
                <h1 class="text-right">{{ (+word.dunno * 100).toFixed(1) }}% ({{ word.dunno }})</h1>
            </div>
            <div class="grid grid-cols-2 mb-3">
                <h1 class="text-left">Антоним: </h1>
                <h1 class="text-right">{{ word.antonym }}</h1>
            </div>
        </div>
    </div>
</template>
