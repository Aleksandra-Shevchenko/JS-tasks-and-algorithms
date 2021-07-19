// Сортировка пузырьком — один из самых известных алгоритмов сортировки. Здесь нужно последовательно сравнивать значения соседних элементов и менять числа местами, если предыдущее оказывается больше последующего. Таким образом элементы с большими значениями оказываются в конце списка, а с меньшими остаются в начале.
// Нужно написать функцию sort, которая принимает два параметра массив и функцию сравнения двух элементов, и сортирует переданный массив по увеличению

//Вариант 1
myArr = [3, 67, 5, 89, 6, 2, 1, 15, 10, 7, 14, 8, 13, 55, 32, 4]

function sort(arr) {
    for (j = arr.length - 1; j > 0; j--) {
        for (i = 0; i < j; i++) {

            if (arr[i] > arr[i + 1]) {
                let num = arr[i];

                arr[i] = arr[i + 1];
                arr[i + 1] = num;
            }
        }
    }
    return arr;
}

console.log(sort(myArr));