<template>
    <Head>
        <Title>Курсовая работа</Title>
    </Head>

    <div class="container mx-auto mt-24 text-center">
        <h1 class="text-4xl"><span class="text-hover-color font-bold">Тональность</span> Текста</h1>
        <h1 class="text-xl mt-5">Вы хотите понять, какое настроение скрывается за словами? Наш инновационный инструмент для
            анализа тональности текста поможет вам в этом. <br> Мы предлагаем уникальный подход к определению эмоциональной
            окраски текста, помогая вам понять, насколько текст позитивен, негативен или нейтрален.
        </h1>
        <div class="mt-10 flex text-hover-color items-center justify-center gap-10">
            <Icon name="pajamas:false-positive" size="48" />
            <Icon name="material-symbols:match-word" size="48" />
            <Icon name="material-symbols:format-color-text" size="48" />
            <Icon name="material-symbols:text-decrease" size="48" />
            <Icon name="material-symbols:text-increase" size="48" />
        </div>
        <NuxtLink to="/tonality">
            <UIMyButton>
                <h1>Начать!</h1>
            </UIMyButton>
        </NuxtLink>
    </div>
</template>
