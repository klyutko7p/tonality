<script setup lang="ts">
defineProps({
    flag: { type: String, required: true },
    textOfTonality: { type: Array as PropType<Tonality[]>, required: true },
})
</script>

<template>
    <div v-if="flag === '+' && textOfTonality.length > 0" class="container mx-auto mt-12 mb-10">
        <h1 class="text-2xl text-center mb-10 max-sm:px-3">Если вы хотите повысить тональность своего текста, то уберите или
            замените
            следующие слова:</h1>
        <div class="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 p-3 gap-10">
            <div v-for="word in textOfTonality.filter((a) => +a.value <= -0.35)">
                <div class="flex py-5 px-3 flex-col text-center border-2 border-hover-color">
                    <h1 class=" text-lg text-red-600 font-bold">{{ word.term }} ({{
                        (+word.value * 100).toFixed(0) }}%)</h1>
                    <h1 class="text-4xl text-white">
                        <Icon name="material-symbols:arrow-circle-down" />
                    </h1>
                    <h1 class="text-lg mt-3 text-green-600 font-bold">
                        {{ word.antonym !== '-' ? word.antonym : 'Антоним не найден' }}
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <div v-if="flag === '+-' && textOfTonality.length > 0" class="container mx-auto mt-12 mb-10">
        <h1 class="text-2xl text-center mb-10 max-sm:px-3">Нейтральные слова
        </h1>
        <div class="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 p-3 gap-10">
            <div v-for="word in textOfTonality.filter((a) => +a.value < 0.55 && +a.value > -0.35)">
                <div class="flex py-5 px-3 flex-col text-center border-2 border-hover-color">
                    <h1 class=" text-lg text-gray-300 font-bold">{{ word.term }} ({{
                        (+word.value * 100).toFixed(0) }}%)</h1>
                    <h1 class="text-4xl text-white">
                        <Icon name="material-symbols:arrow-circle-down" />
                    </h1>
                    <h1 class="text-lg mt-3 text-gray-300 font-bold">
                        {{ word.antonym !== '-' ? word.antonym : 'Антоним не найден' }}
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <div v-if="flag === '-' && textOfTonality.length > 0" class="container mx-auto mt-12 mb-10">
        <h1 class="text-2xl text-center mb-10 max-sm:px-3">Чтоб текст стал более отрицательным, уберите или замените
            следующие слова:
        </h1>
        <div class="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 p-3 gap-10">
            <div v-for="word in textOfTonality.filter((a) => +a.value >= 0.55)">
                <div class="flex py-5 px-3 flex-col text-center border-2 border-hover-color">
                    <h1 class=" text-lg text-green-600 font-bold">{{ word.term }} ({{
                        (+word.value * 100).toFixed(0) }}%)</h1>
                    <h1 class="text-4xl text-white">
                        <Icon name="material-symbols:arrow-circle-down" />
                    </h1>
                    <h1 class="text-lg mt-3 text-red-600 font-bold">
                        {{ word.antonym !== '-' ? word.antonym : 'Антоним не найден' }}
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>
