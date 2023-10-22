<script setup lang="ts">
import { useAlgorithmsStore } from '../../../store/algorithms'
const storeAlgorithms = useAlgorithmsStore()
const isLoading = ref(true)

const props = defineProps({
    wordList: { type: Array<Tonality>, required: true },
    header: { type: String, required: true },
    isAll: { type: Boolean, default: false }
})

const columns = [
    { field: 'term', label: 'Слово или словосочетание' },
    { field: 'value', label: 'Значение' },
    { field: 'pstv', label: 'Доля голосов за положительную тональность' },
    { field: 'neut', label: 'Доля голосов за нейтральную тональность' },
    { field: 'ngtv', label: 'Доля голосов за отрицательную тональность' },
    { field: 'dunno', label: 'Доля голосов "не знаю"' },
    { field: 'antonym', label: 'Антоним' },
] as { field: keyof Tonality, label: string }[]

const perPage = 20
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(props.wordList.length / perPage))

const allWords = ref<Tonality[]>([])
const filteredData = ref<Tonality[]>([])

function sortAndFilterData(flag: string, fieldName: keyof Tonality | null = null) {
    let sortedData = [...filteredData.value]

    if (fieldName !== 'term') {
        sortedData = storeAlgorithms.mergeSort(sortedData, flag === '+', fieldName)
    } else {
        sortedData = storeAlgorithms.quickSortByAlphabet(sortedData, flag === '+')
    }

    filteredData.value = sortedData
    currentPage.value = 1
    updateCurrentPageData()
}

function updateCurrentPageData() {
    const startIndex = (currentPage.value - 1) * perPage
    const endIndex = startIndex + perPage
    allWords.value = filteredData.value.slice(startIndex, endIndex)
}

watch(currentPage, updateCurrentPageData)


const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
    }
}

onMounted(async () => {
    filteredData.value = props.wordList
    updateCurrentPageData()
    isLoading.value = false
})

</script>

<template>
    <div class="mb-10">
        <div class="flex px-5 items-center justify-between mb-10">
            <TonalityWordListDescription :header="header" :word-list="wordList" :is-all="isAll" />
            <div v-if="allWords.length > 0">
                <h1 class="text-xl mb-2 text-center">Страница: {{ currentPage }} из {{ totalPages }}</h1>
                <div class="flex items-center justify-center gap-2">
                    <button @click="prevPage(), updateCurrentPageData()" :disabled="currentPage === 1"
                        class="disabled:bg-hover-color duration-150 bg-primary-color border-2 border-hover-color flex items-center justify-center rounded-sm p-3">
                        <Icon name="material-symbols:arrow-back-ios-new-rounded" />
                    </button>
                    <button @click="nextPage(), updateCurrentPageData()" :disabled="currentPage === totalPages"
                        class="disabled:bg-hover-color duration-150 bg-primary-color border-2 border-hover-color flex items-center justify-center rounded-sm p-3">
                        <Icon name="material-symbols:arrow-forward-ios-rounded" />
                    </button>
                </div>
            </div>
        </div>

        <div v-if="isLoading === false">
            <div class="grid grid-cols-7 text-center mb-3 pb-3">
                <div v-for="column in columns" class="flex items-center justify-center gap-3">
                    <h1>{{ column.label }}</h1>
                    <div v-if="column.field !== 'antonym'">
                        <Icon @click="sortAndFilterData('+', column.field)"
                            class="hover:text-hover-color duration-300 cursor-pointer" name="ic:baseline-keyboard-arrow-up"
                            size="24" />
                        <Icon @click="sortAndFilterData('-', column.field)"
                            class="hover:text-hover-color duration-300 cursor-pointer"
                            name="material-symbols:keyboard-arrow-down-rounded" size="24" />
                    </div>
                </div>
            </div>
            <TonalityWordListCollection :all-words="allWords.slice(0, 20)" v-if="allWords.length > 0" />
            <div v-else class=" flex items-center justify-center flex-col text-4xl mt-10">
                <h1>Данное слово или словосочетание <span class="text-hover-color">не найдено!</span> </h1>
                <Icon name="fluent-emoji:sad-but-relieved-face" size="56" class="mt-5" />
            </div>
        </div>
        <div v-else>
            <UISpinner />
        </div>
    </div>
</template>