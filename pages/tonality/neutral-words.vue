<script setup lang="ts">
import { useTonalityStore } from '../../store/tonality'

const storeTonality = useTonalityStore()
const neutralWords: Tonality[] = storeTonality.getNeutralWords()
</script>

<template>
    <Head>
        <Title>Нейтральные слова тональности</Title>
    </Head>
    <TonalityWordListHeader class="mb-10" />
    <TonalityWordList :header="'Нейтральные слова'" :word-list="neutralWords" />
</template>


