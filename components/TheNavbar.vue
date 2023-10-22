<template>
    <div class="flex items-center shadow-2xl justify-between py-5 px-24 border-b-2 border-hover-color">
        <div class="flex items-center gap-10">
            <NuxtLink to="/">
                <img src="../assets/imgs/klyutko-logo.svg" class="max-w-[200px]" alt="">
            </NuxtLink>
            <NuxtLink to="/">
                <img src="../assets/imgs/liza.svg" class="max-w-[130px]" alt="">
            </NuxtLink>
        </div>
        <div>
            <NuxtLink class="font-bold text-xl duration-200 hover:text-hover-color" to="/tonality"
                active-class="text-red-600">
                Тональность текста
            </NuxtLink>
        </div>
    </div>
</template>
