<script setup lang="ts">
import { useTonalityStore } from '../../store/tonality'

const storeTonality = useTonalityStore()
const allWords: Tonality[] = storeTonality.dataSetOfTonality
</script>


<template>
    <Head>
        <Title>Список слов с их тональностью</Title>
    </Head>
    <TonalityWordListHeader class="mb-10" />
    <TonalityWordList :is-all="true" :header="'Список слов с их тональностью'" :word-list="allWords" />
</template>