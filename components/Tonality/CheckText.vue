
<script lang="ts" setup>
import { useAlgorithmsStore } from '../../store/algorithms'
import { useTonalityStore } from '../../store/tonality'

const storeAlgorithms = useAlgorithmsStore()
const storeTonality = useTonalityStore()

const allText = ref<any>('')
const splitText = ref<string[] | null>(null)
const flag = ref('+')
const textOfTonality = ref<Tonality[]>([])
const totalTonality = ref(0)
const characterizationOfTonality = ref("")
const isLoading = ref(false)

async function getSplitText() {
    if (allText.value) {
        isLoading.value = true
        splitText.value = storeAlgorithms.splitSentenceIntoWords(allText.value.toLowerCase())
        textOfTonality.value = storeAlgorithms.getTonalityWords(splitText.value, storeTonality.dataSetOfTonality)
        totalTonality.value = storeAlgorithms.calculateAverageValue(textOfTonality.value)
        characterizationOfTonality.value = await storeAlgorithms.getResultTonality(allText.value)
        isLoading.value = false
    }
}
// Функция находит значения общей тональности и слова с их тональностью

function getExampleText(numberOfText: number) {
    allText.value = storeTonality.getExampleText(numberOfText)
    getSplitText()
}
// Функция вставляет нужный шаблон текста в textarea

</script>

<template>
    <div v-if="!isLoading">
        <div class="text-center mx-auto container">
            <div class="flex items-center justify-between max-md:block mb-5">
                <div class="flex items-center justify-center font-medium max-md:block max-md:text-left gap-5">
                    <h1 class="text-3xl max-md:text-center">Проверка тональности текста</h1>
                    <h1 @click="getExampleText(1)" class="hover:text-hover-color cursor-pointer duration-300">Пример 1</h1>
                    <h1 @click="getExampleText(2)" class="hover:text-hover-color cursor-pointer duration-300">Пример 2</h1>
                    <h1 @click="getExampleText(3)" class="hover:text-hover-color cursor-pointer duration-300">Пример 3</h1>
                </div>
                <select required v-model="flag"
                    class="bg-primary-color border-2 font-bold border-hover-color text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5">
                    <option value="+" selected>Положительная</option>
                    <option value="+-" selected>Нейтральная</option>
                    <option value="-">Негативная</option>
                </select>
            </div>
            <textarea id="message" rows="4"
                class="block p-2.5 h-96 w-full text-lg text-white  rounded-lg border-2 border-hover-color bg-secondary-color"
                placeholder="Напишите свой текст сюда..." v-model="allText">
        </textarea>
            <UIMyButton @click="getSplitText">
                Проверить
            </UIMyButton>
        </div>
        <div v-if="flag !== '' && textOfTonality.length > 0">
            <TonalityInformation :total-tonality="totalTonality" />
            <TonalityClassification :characterizationOfTonality="characterizationOfTonality" />
        </div>
        <TonalityWordAndAntonym :flag="flag" :text-of-tonality="textOfTonality" />
    </div>
    <div v-else>
        <UISpinner />
        <h1 class="text-center text-2xl">Обрабатываем ваш текст...</h1>
    </div>
</template>