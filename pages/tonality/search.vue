<script setup lang="ts">
import { useTonalityStore } from '../../store/tonality'
const storeTonality = useTonalityStore()
const filterTerm = ref('')
const filteredWords = ref<Tonality[]>([])
const click = ref(0)

function searchWord() {
    click.value += 1
    const termToMatch = filterTerm.value.toLowerCase().trim()
    const dataSet: Tonality[] = storeTonality.dataSetOfTonality
    const filtered: Tonality[] = []

    for (const item of dataSet) {
        const term: string = item.term.toLowerCase()

        if (term.startsWith(termToMatch)) {
            filtered.push(item)
        }
    }

    if (filtered.length === 0) {
        for (const item of dataSet) {
            const term: string = item.term.toLowerCase()

            if (term.includes(termToMatch)) {
                filtered.push(item)
            }
        }
    }

    filteredWords.value = filtered.slice(0, 40)
}
</script>

<template>
    <Head>
        <Title>Поиск слова и его тональность</Title>
    </Head>
    <TonalityWordListHeader class="mb-10" />
    <div class="flex items-center justify-center mb-10">
        <div class="flex items-center justify-end gap-3 mb-3">
            <input class="text-lg p-1 w-full px-5 rounded-full bg-transparent border-2 border-hover-color" type="text"
                id="filterInput" v-model="filterTerm" required />
            <Icon name="material-symbols:search" @click="searchWord()"
                class="hover:animate-none animate-pulse hover:text-hover-color cursor-pointer duration-300" size="40" />
        </div>
    </div>

    <div v-if="filteredWords.length > 0">
        <div v-if="filteredWords.length > 0">
            <TonalityWordListCollection :all-words="filteredWords" class="px-3" />
        </div>
    </div>
    <div v-else-if="filteredWords.length === 0 && click === 0" class="text-center">
        <h1 class="text-2xl">Введите в текстовое поле своё слово или словосочетание <br> и получите информацию о
            его <span class="text-hover-color font-bold">тональности!</span> <br>
            (не забудьте нажать на кнопочку)
        </h1>
        <Icon name="openmoji:cat-with-wry-smile" size="120" class="mt-10 animate-bounce" />
    </div>
    <div v-else class="text-center">
        <h1 class="text-2xl">
            Извините, мы не нашли данное слово или словосочетание. <br>
            Попробуйте снова!
        </h1>
        <Icon name="fluent-emoji:sad-but-relieved-face" size="120" class="mt-10 animate-pulse" />
    </div>
</template>