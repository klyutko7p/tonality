<script lang="ts" setup>

defineProps({
    characterizationOfTonality: { type: String, required: true },
})

</script>

<template>
    <div class="container mx-auto mt-5">
        <h1 class="text-4xl text-center max-[400px]:text-2xl mb-5">Классификация тональности</h1>
        <h1 class="whitespace-pre-line text-xl p-3">
            {{ characterizationOfTonality }}
        </h1>
    </div>
</template>
