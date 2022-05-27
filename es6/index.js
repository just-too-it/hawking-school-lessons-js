/** ДЗ № 2 (es6) */

/** 1. Удалите из массива дубликаты: const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];  */
export const getUniqueArray = (array) => {
    return [...new Set(array)];
}

/**Вывод в консоль */
console.log(getUniqueArray([1, 2, 3, 5, 1, 6, 2, 5, 6, 7]));



/** 2. Объедините 2 объекта в один: const obj1 = { id: 1, name: ‘userName’ } и const obj2 = { id: 1, password: ‘qwerty’ }  */
export const mergingObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

/**Вывод в консоль */
console.log(mergingObjects({ id: 1, name: 'userName' }, { id: 1, password: 'qwerty' }));



/** 3. Сократите объявление функции в одну строку, используя новый синтаксис ES6: 
const add = function (x, y) { return x + y 
} */
export const add = (x, y) => x + y;



/** 4. Напишите функцию, с помощью которой можно будет выполнять различные действия с задержкой Функция, которую нужно реализовать: 
const sleep = ms => { ... } 
Её использование для выполнения действия с задержкой 5 секунд 
sleep(5000).then(() => { console.log('Выполнилось через 5 секунд!'); 
}); */
export const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

/**Вывод в консоль */
sleep(5000).then(() => { console.log('Выполнилось через 5 секунд!') });