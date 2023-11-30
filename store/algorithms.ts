import { defineStore } from "pinia";
export const useAlgorithmsStore = defineStore("algorithms", () => {
  function quickSortByAlphabet(
    arr: Array<Tonality>,
    descending = false
  ): Array<Tonality> {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)].term;
    const left: Tonality[] = [];
    const right: Tonality[] = [];

    for (const item of arr) {
      const compareResult = descending
        ? item.term.localeCompare(pivot)
        : pivot.localeCompare(item.term);

      if (compareResult > 0) {
        left.push(item);
      } else if (compareResult < 0) {
        right.push(item);
      }
    }

    return [
      ...quickSortByAlphabet(left, descending),
      ...arr.filter((item: Tonality) => item.term === pivot),
      ...quickSortByAlphabet(right, descending),
    ];
  }
  // * Сортировка массива по алфавиту (quick sort)

  function mergeSort(
    arr: Array<Tonality>,
    descending = false,
    fieldName: keyof Tonality
  ): Array<Tonality> {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
      mergeSort(left, descending, fieldName),
      mergeSort(right, descending, fieldName),
      fieldName,
      descending
    );
  }
  // * Сортировка массива методом слияния (merge sort)

  function merge(
    left: Tonality[],
    right: Tonality[],
    fieldName: keyof Tonality,
    descending: boolean
  ) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      const leftValue = parseFloat(left[leftIndex][fieldName]);
      const rightValue = parseFloat(right[rightIndex][fieldName]);

      if (!descending) {
        if (leftValue < rightValue) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      } else {
        if (leftValue > rightValue) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  // * Объединяет два массива в отсортированный массив (для merge sort).

  function splitSentenceIntoWords(text: string) {
    return text.split(/\s+/);
  }
  // * Разделение предложений на слова

  function getTonalityWords(arr: string[], dataset: Tonality[]): Tonality[] {
    const tonalityMap: { [key: string]: Tonality } = {};
    const alreadyNegatedWords: { [key: string]: boolean } = {};

    dataset.forEach((item) => {
      tonalityMap[item.term] = item;
    });

    let resultArray: Tonality[] = [];
    let wordsWithoutTonality: Tonality[] = [];

    arr.forEach((word, index) => {
      if (tonalityMap[word]) {
        if (word === "не") {
          const nextWord = arr[index + 1];
          const combinedWord = word + " " + nextWord;
          if (tonalityMap[nextWord]) {
            const tonality = tonalityMap[nextWord];
            const tonalityCopy = JSON.parse(JSON.stringify(tonality));
            tonalityCopy.antonym = tonality.term;
            tonalityCopy.term = combinedWord;
            tonalityCopy.value = (-Number(tonality.value)).toString();
            resultArray.push(tonalityCopy);
            alreadyNegatedWords[nextWord] = true;
          }
        } else if (word === "очень" || word === "более") {
          const nextWord = arr[index + 1];
          const combinedWord = word + " " + nextWord;
          if (tonalityMap[nextWord]) {
            const tonality = tonalityMap[nextWord];
            const tonalityCopy = JSON.parse(JSON.stringify(tonality));
            tonalityCopy.term = combinedWord;
            tonalityCopy.value = (
              Number(tonality.value) > 0
                ? Number(tonality.value) + 0.2
                : Number(tonality.value) - 0.2
            ).toString();
            tonalityCopy.value = Math.min(1, tonalityCopy.value);
            tonalityCopy.value = Math.max(-1, tonalityCopy.value);
            resultArray.push(tonalityCopy);
            alreadyNegatedWords[nextWord] = true;
          }
        } else if (word === "менее") {
          const nextWord = arr[index + 1];
          const combinedWord = word + " " + nextWord;
          if (tonalityMap[nextWord]) {
            const tonality = tonalityMap[nextWord];
            const tonalityCopy = JSON.parse(JSON.stringify(tonality));
            tonalityCopy.term = combinedWord;
            tonalityCopy.value = (
              Number(tonality.value) > 0
                ? Number(tonality.value) - 0.2
                : Number(tonality.value) + 0.2
            ).toString();
            resultArray.push(tonalityCopy);
            alreadyNegatedWords[nextWord] = true;
          }
        } else if (
          !alreadyNegatedWords[word] &&
          !resultArray.includes(tonalityMap[word])
        ) {
          const tonality = tonalityMap[word];
          resultArray.push(tonality);
        }
      } else {
        const tonality: Tonality = {
          term: word,
          value: "Нет информации",
          antonym: "Нет информации",
          tag: "Нет информации",
          pstv: "Нет информации",
          pstvNgtvDisagreementRatio: "Нет информации",
          ngtv: "Нет информации",
          neut: "Нет информации",
          dunno: "Нет информации",
        };
        wordsWithoutTonality.push(tonality);
      }
    });

    let uniqueArray = [...new Set(resultArray)];
    return uniqueArray;
  }
  // * Получение тональности каждого слова

  function calculateAverageValue(arr: Tonality[]): number {
    const sum = arr.reduce((total, word) => total + +word.value, 0);
    const average = sum / arr.length;
    return +average;
  }
  // * Получение средней тональности всего текста

  async function getResultTonality(query: string): Promise<string> {
    const dataToSend = query + "Расскажи про тональность данного текста.";
    try {
      const response = await fetch("http://localhost:5000/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        alert("Ошибка при выполнении запроса.");
        throw new Error("Ошибка при выполнении запроса.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка:", error);
      alert(error);
      throw error;
    }
  }
  // * Получение классификации тональности через сервер Flask на Python (Bard AI)

  return {
    quickSortByAlphabet,
    mergeSort,
    splitSentenceIntoWords,
    getTonalityWords,
    calculateAverageValue,
    getResultTonality,
  };
});
