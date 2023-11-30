<script setup lang="ts">
defineProps({
    totalTonality: { type: Number, required: true }
})
</script>


<template>
    <div class="mx-auto container text-center mt-10 mb-20 flex items-center justify-around max-md:flex-col gap-5">
        <div class="flex flex-col gap-1">
            <div class="flex text-center items-center text-4xl max-[400px]:text-2xl gap-3">
                <h1>Общая тональность</h1>
                <Icon name="material-symbols:percent" class="text-hover-color" />
            </div>
            <h1>
                <span class="text-3xl max-[400px]:text-xl font-bold"
                    :class="{ 'text-red-600': totalTonality <= -0.35, 'text-gray-300': totalTonality > -0.35 && totalTonality < 0.55, 'text-green-600': totalTonality >= 0.55 }">{{
                        (+totalTonality * 100).toFixed(0) }}%
                    ({{
                        totalTonality.toFixed(2) }})</span>
            </h1>
        </div>
        <div class="flex flex-col gap-1">
            <div class="flex text-center items-center text-4xl max-[400px]:text-2xl gap-3">
                <h1>Тип тональности</h1>
                <Icon name="ic:baseline-merge-type" class="text-hover-color" />
            </div>
            <h1 class="text-3xl max-[400px]:text-xl font-bold text-green-600" v-if="totalTonality >= 0.55">Положительный
            </h1>
            <h1 class="text-3xl max-[400px]:text-xl font-bold text-gray-300"
                v-if="totalTonality < 0.55 && totalTonality > -0.35">Нейтральный
            </h1>
            <h1 class="text-3xl max-[400px]:text-xl font-bold text-red-600" v-if="totalTonality <= -0.35">Отрицательный</h1>
        </div>
    </div>
</template>
