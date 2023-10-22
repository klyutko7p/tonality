<script lang="ts" setup>
const words = [
    "Слово или словосочетание",
    "Значение",
    "Доля голосов за положительную тональность",
    "Доля голосов за нейтральную тональность",
    "Доля голосов за отрицательную тональность",
    "Доля голосов 'не знаю'",
    "Антоним"
]
</script>

<template>
    <div class="grid grid-cols-7 text-center mb-3 pb-3">
        <div v-for="word in words" class="flex items-center justify-center gap-3">
            <h1>{{ word }}</h1>
        </div>
    </div>
</template>
