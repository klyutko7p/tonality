<script setup lang="ts">
import { useTonalityStore } from '../../store/tonality'

const storeTonality = useTonalityStore()
const negativeWords: Tonality[] = storeTonality.getNegativeWords()
</script>

<template>
    <Head>
        <Title>Негативные слова тональности</Title>
    </Head>
    <TonalityWordListHeader class="mb-10" />
    <TonalityWordList :header="'Негативные слова'" :word-list="negativeWords" />
</template>


