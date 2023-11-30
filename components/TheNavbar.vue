<template>
    <div
        class="flex items-center shadow-2xl justify-between py-5 px-24 max-md:px-10 max-sm:px-3 border-b-2 border-hover-color">
        <div class="flex items-center gap-10 max-sm:gap-3">
            <NuxtLink to="/">
                <img src="../assets/imgs/klyutko-logo.svg"
                    class="max-w-[200px] max-sm:max-w-[100px] max-[400px]:max-w-[75px]" alt="">
            </NuxtLink>
            <NuxtLink to="/">
                <img src="../assets/imgs/liza.svg" class="max-w-[130px] max-sm:max-w-[75px] max-[400px]:max-w-[50px]"
                    alt="">
            </NuxtLink>
        </div>
        <div>
            <NuxtLink class="font-bold text-xl max-sm:text-base duration-200 hover:text-hover-color" to="/tonality"
                active-class="text-red-600">
                Тональность текста
            </NuxtLink>
        </div>
    </div>
</template>
