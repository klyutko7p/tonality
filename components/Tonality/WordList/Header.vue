<script lang="ts" setup>
const links = [
    { link: "/tonality", title: "Тональность текста", },
    { link: "/tonality/all-words", title: "Все слова", },
    { link: "/tonality/positive-words", title: "Положительные слова", },
    { link: "/tonality/neutral-words", title: "Нейтральные слова", },
    { link: "/tonality/negative-words", title: "Отрицательные слова", },
    { link: "/tonality/search", title: "Поиск", },
]

let isActive = ref(false)
</script>


<template>
    <div class="flex items-center justify-between">
        <div class="px-10">
            <TonalityWordListHelper />
        </div>
        <div class="flex items-center gap-5 justify-end px-10 max-lg:hidden">
            <NuxtLink v-for="link in links" active-class="text-hover-color" :to="link.link"
                class="hover:text-hover-color duration-200 font-bold">
                <h1>{{ link.title }}</h1>
            </NuxtLink>
        </div>
        <div class="px-10 max-lg:block hidden" v-if="!isActive">
            <Icon name="material-symbols:list-rounded" size="42" @click="isActive = true" />
        </div>
        <div v-if="isActive" class="text-right px-3 max-w-[400px]">
            <div class="px-10 max-lg:block hidden" v-if="isActive">
                <Icon name="material-symbols:list-rounded" size="42" @click="isActive = false" />
            </div>
            <div class="text-right">
                <NuxtLink v-for="link in links" active-class="text-hover-color" :to="link.link"
                    class="hover:text-hover-color text-white duration-200 font-bold">
                    <h1 class="mb-1">{{ link.title }}</h1>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
