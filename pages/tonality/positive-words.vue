<script setup lang="ts">
import { useTonalityStore } from '../../store/tonality'

const storeTonality = useTonalityStore()
const positiveWords: Tonality[] = storeTonality.getPositiveWords()
</script>

<template>
    <Head>
        <Title>Позитивные слова тональности</Title>
    </Head>
    <TonalityWordListHeader class="mb-10" />
    <TonalityWordList :header="'Позитивные слова'" :word-list="positiveWords" />
</template>
