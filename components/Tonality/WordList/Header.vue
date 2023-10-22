<script lang="ts" setup>
const links = [
    { link: "/tonality", title: "Тональность текста", },
    { link: "/tonality/all-words", title: "Все слова", },
    { link: "/tonality/positive-words", title: "Положительные слова", },
    { link: "/tonality/neutral-words", title: "Нейтральные слова", },
    { link: "/tonality/negative-words", title: "Отрицательные слова", },
    { link: "/tonality/search", title: "Поиск", },
]
</script>


<template>
    <div class="flex items-center justify-between">
        <div class="px-10">
            <TonalityWordListHelper />
        </div>
        <div class="flex items-center gap-5 justify-end px-10">
            <NuxtLink v-for="link in links" active-class="text-hover-color" :to="link.link"
                class="hover:text-hover-color duration-200 font-bold">
                <h1>{{ link.title }}</h1>
            </NuxtLink>
        </div>
    </div>
</template>
