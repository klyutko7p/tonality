import { defineStore } from "pinia";
import dataSet from "./kartaslovsent.json";
import mockupText from "./mockup.json";

export const useTonalityStore = defineStore("tonality", () => {
  const dataSetOfTonality: Tonality[] = dataSet;
  const textExamples = mockupText;

  const example1: string = textExamples[0].text;
  const example2: string = textExamples[1].text;
  const example3: string = textExamples[2].text;
  // * Константы текста для проверки тональности

  const POSITIVE_THRESHOLD = 0.55;
  const NEGATIVE_THRESHOLD = -0.35;
  // * Константы для значений негативной или положительной тональности

  function filterWordsByValue(
    data: Tonality[],
    minValue: number,
    maxValue: number
  ) {
    return data.filter(
      (word) => +word.value >= minValue && +word.value <= maxValue
    );
  }
  // * Фильтрация слов по их value (значение тональности)

  function getPositiveWords() {
    return filterWordsByValue(dataSetOfTonality, POSITIVE_THRESHOLD, 1);
  }
  // * Получение позитивных слов

  function getNeutralWords() {
    return filterWordsByValue(
      dataSetOfTonality,
      NEGATIVE_THRESHOLD,
      POSITIVE_THRESHOLD
    );
  }
  // * Получение нейтральных слов

  function getNegativeWords() {
    return filterWordsByValue(dataSetOfTonality, -1, NEGATIVE_THRESHOLD);
  }
  // * Получение негативных слов

  function getExampleText(numberOfExample: number) {
    const examples = [example1, example2, example3];
    return examples[numberOfExample - 1] || null;
  }
  // * Получение шаблонных текстов

  return {
    getPositiveWords,
    getNeutralWords,
    getNegativeWords,
    dataSetOfTonality,
    getExampleText,
  };
});
