<script setup lang="ts">

const showModal = ref(false)
const designations = [
    { term: "term", title: "Слово или словосочетание" },
    { term: "tag", title: "Метка тональности" },
    { term: "value", title: "Значение ('Тональность')" },
    { term: "pstv", title: "Доля голосов за положительную тональность" },
    { term: "neut", title: "Доля голосов за нейтральную тональность" },
    { term: "ngtv", title: "Доля голосов за негативную тональность" },
    { term: "dunno", title: "Доля голосов «не знаю»" },
]

</script>
<template>
    <div class="flex items-center gap-2 mt-3">
        <h1 @click="showModal = true" class="text-xl hover:text-hover-color font-bold duration-300 cursor-pointer">Cправка
            <Icon name="material-symbols:contact-support-outline" size="24" />
        </h1>
    </div>
    <div class="modal-overlay z-10" v-if="showModal">
        <div class="modal text-white overflow-auto border-2 border-hover-color">
            <h1 class="text-2xl mb-5 font-bold">Справка</h1>
            <div class="bg-hover-color m-5 py-3 px-5 rounded-xl">
                <h1 class="text-xl font-semibold mb-3">Обозначения</h1>
                <div>
                    <div v-for="designation in designations"
                        class="grid grid-cols-2 mb-3 border-b-2 border-primary-color py-5">
                        <h1 class="text-left">{{ designation.term }}</h1>
                        <h1 class="text-right">{{ designation.title }}</h1>
                    </div>
                </div>
            </div>
            <div class="bg-hover-color m-5 py-3 px-5 rounded-xl">
                <h1 class="text-xl font-semibold mb-3">Тональность</h1>
                <div>
                    <span class="font-bold">"Значение" (value)</span> в таблице – это скалярное значение
                    эмоционально-оценочного
                    заряда из
                    непрерывного диапазона [-1, 1],
                    где +1 соответствует слову с максимально положительной окраской, -1 — слову с максимально отрицательной
                    окраской, 0 — слову с нейтральной окраской (то же, что отсутствие окраски)
                </div>
                <div class="mt-5">
                    <h1 class="mb-2">Слово будет считаться положительным, если <br> значение >= 55% (0.55)</h1>
                    <h1 class="mb-2">Слово будет считаться нейтральным, если <br> значение &lt; 55% (0.55) и значение > -35%
                        (-0.35)
                    </h1>
                    <h1 class="mb-2">Слово будет считаться отрицательным, если <br> значение &lt;= -35% (-0.35)</h1>
                </div>
            </div>
            <div class="bg-hover-color m-5 py-3 px-5 rounded-xl">
                <h1 class="text-xl font-semibold mb-3">Исходная разметка</h1>
                <div>
                    <h1 class="mb-2">
                        Датасет размечается краудсорсингом. В процессе разметки отвечающему предлагается оценить то или иное
                        слово как нейтральное, положительное или отрицательное. Также предусмотрен ответ «не знаю».
                    </h1>

                    <h1>
                        Датасет содержит обобщённые данные исходной разметки, включающие количественное соотношение голосов,
                        отданных за каждый из вариантов. Сумма значений pstv, neut, ngtv и dunno равняется единице (100%
                        голосов).
                    </h1>
                </div>
            </div>
            <div class="bg-hover-color m-5 py-3 px-5 rounded-xl">
                <h1 class="text-xl font-semibold mb-3">Формулы</h1>
                <div>
                    <h1>Формула расчёта значения силы <br> эмоционально-оценочного заряда:</h1>
                    <h1 class="mb-1">value = +1 * z<sub>pstv</sub> + 0 * (z<sub>neut</sub> + z <sub>ngtv</sub>) <br> если
                        z<sub>pstv</sub> ≥
                        z<sub>ngtv</sub>
                    </h1>
                    <h1 class="mb-1">value = -1 * <sub>zngtv</sub> + 0 * (z<sub>neut</sub>sub> + z<sub>pstv</sub>) <br> если
                        z<sub>pstv</sub>
                        &lt;
                        z<sub>ngtv</sub>
                    </h1>
                    <h1>value – итоговое значение <br> z<sub>pstv</sub> – доля голосов за "Положительное" слово <br>
                        z<sub>neut</sub> – доля голосов за "Нейтральное" слово <br> z<sub>neut</sub> – доля голосов за
                        "Отрицательное" слово</h1>
                </div>
            </div>
            <div class="bg-hover-color m-5 py-3 px-5 rounded-xl">
                <h1 class="text-xl font-semibold mb-3">Объём</h1>
                <div class="grid grid-cols-2 mb-3 border-b-2 border-primary-color py-5">
                    <h1 class="text-left">Общий объём</h1>
                    <h1 class="text-right">46127 записей</h1>
                </div>
                <div class="grid grid-cols-2 mb-3 border-b-2 border-primary-color py-5">
                    <h1 class="text-left">Положительные слова</h1>
                    <h1 class="text-right">6215 записей</h1>
                </div>
                <div class="grid grid-cols-2 mb-3 border-b-2 border-primary-color py-5">
                    <h1 class="text-left">Нейтральные слова</h1>
                    <h1 class="text-right">11863 записей</h1>
                </div>
                <div class="grid grid-cols-2 mb-3 border-b-2 border-primary-color py-5">
                    <h1 class="text-left">Негативные слова</h1>
                    <h1 class="text-right">28049 записей</h1>
                </div>
            </div>
            <button class="border-2 border-hover-color font-bold duration-200 hover:bg-hover-color px-5 py-2 rounded-xl"
                @click="showModal = false">Я всё
                понял!</button>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    text-align: center;
    background-color: var(--primary-color);
    height: 75%;
    width: 600px;
    margin-top: 5%;
    padding: 30px 0;
    border-radius: 20px;
}

.close {
    margin: 10% 0 0 16px;
    cursor: pointer;
}

.close-img {
    width: 25px;
}

.check {
    width: 150px;
}
</style>
