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

    dataset.forEach((item) => {
      tonalityMap[item.term] = item;
    });

    let resultArray: Tonality[] = [];

    arr.forEach((word) => {
      if (tonalityMap[word]) {
        const tonality = tonalityMap[word];
        resultArray.push(tonality);
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

  return {
    quickSortByAlphabet,
    mergeSort,
    splitSentenceIntoWords,
    getTonalityWords,
    calculateAverageValue,
  };
});
