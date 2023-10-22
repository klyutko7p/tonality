<template>
    <div>
        <h1 class="text-4xl" v-if="!isAll">{{ header }} (Метка: {{ wordList[0].tag }})</h1>
        <h1 class="text-4xl" v-else>{{ header }}</h1>
        <h1 class="text-2xl">Общее количество слов: {{ wordList.length }}</h1>
    </div>
</template>

<script setup lang="ts">

defineProps({
    wordList: { type: Array<Tonality>, required: true },
    header: { type: String, required: true },
    isAll: { type: Boolean, default: false }
})

</script>
