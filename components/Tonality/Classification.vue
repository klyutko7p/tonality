<script lang="ts" setup>

defineProps({
    characterizationOfTonality: { type: String, required: true },
})

</script>

<template>
    <div class="container mx-auto mt-5">
        <h1 class="text-4xl text-center mb-5">Классификация тональности</h1>
        <h1 class="whitespace-pre-line text-xl">
            {{ characterizationOfTonality }}
        </h1>
    </div>
</template>
