<script setup lang="ts">
defineProps({
    totalTonality: { type: Number, required: true }
})
</script>

<template>
    <div class="flex flex-col gap-1">
        <h1 class="text-4xl">Тип тональности</h1>
        <h1 class="text-3xl font-bold text-green-600" v-if="totalTonality >= 0.55">Положительный</h1>
        <h1 class="text-3xl font-bold text-gray-300" v-if="totalTonality < 0.55 && totalTonality > -0.35">Нейтральный
        </h1>
        <h1 class="text-3xl font-bold text-red-600" v-if="totalTonality <= -0.35">Отрицательный</h1>
    </div>
</template>
