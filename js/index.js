let popup = document.querySelector(".popup");
let listItem = document.querySelectorAll(".container > ul > li");
let modalClose = document.querySelector(".popup__close-btn");

let popupHeader = document.querySelector(".popup__header");
let popupContent = document.querySelector(".popup__content");
let popupCode = document.querySelector(".popup__code");

//
//
// data for list items in JSON
//
//
let data = {
  items: {
    slice: {
      name: "Метод slice",
      itemText: `<p>Имеет следующий синтаксис:</p> <pre><code class=\"popup__code language-js\">arr.splice(index[, deleteCount, elem1, ..., elemN])</code></pre>
      <p><span>index</span> - выступает в роли стартовой позиции, <span>deleteCount</span> - количество удаляемых элементов, а <span>elem1, ..., elemN</span> - элементы вставляемые вместо удалённых.</p>
      <p>Пример:</p>`,
      codeExample:
`let array = ["One", "Two", "Three", "Four", "Five",];
console.log(array); // (5) ["One", "Two", "Three", "Four", "Five"]

/* Удаляем первые 3 элемента и обновляем,
при этом возвращая удалённые элементы в removed */
let removed = array.splice(0, 3, "1", "2", "3",);

console.log(removed); // (3) ["One", "Two", "Three"]
console.log(array); // (5) ["1", "2", "3", "Four", "Five"]`,
    },

    splice: {
      name: "Метод splice",
      itemText: `<p>Метод возвращает копию массива от индекса <span>start</span> и до <span>end</span>(не включая его).</p>
      <p>Синтаксис:</p>
      <pre><code class=\"popup__code language-js\">array.slice([start], [end]);</code></pre>
      
      <p>Если указать <span>start</span> с отрицательным индексом, копирование будет произведенно с конца.</p>
      <p>Также можно использовать и вовсе без аргументов <code>array.slice()</code>, в таком случае метод создаст копию массива.</p>
      <p>Такой подход часто используют для копирования массива и дальнейших операций с ним, не затрагивающих родительский массив.</p>
      <p>Пример:</p>`,
      codeExample: 
`let array  = ["Apple", "Banana", "Pineapple", "Raspberry",];
let sliced = array.slice(-2); // (2) ["Pineapple", "Raspberry"]

let arrCopy = array.slice();
arrCopy.push('Kiwi');
console.log(array); // (4) ["Apple", "Banana", "Pineapple", "Raspberry"]
console.log(arrCopy); // (5) ["Apple", "Banana", "Pineapple", "Raspberry", "Kiwi"]`,
    },

    map: {
      name: "Метод map",
      itemText: `<p>Один из наиболее часто используемых методов - <span>array.map</span>.</p>
      <p>Метод вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.</p>
      <p>Синтаксис:</p>
      <pre><code>let result = array.map(() = > {
        // возвращается новое значение вместо элемента
      });</code></pre>
      <p>Пример:</p>`,
      codeExample: `let array = ["Chapter", "Chapter", "Chapter"];

let i = 1;
let result = array.map(item => {
    item += \` \${[i]}\`;
    i++;
    return item;
});

console.log(result); // (3) ["Chapter 1", "Chapter 2", "Chapter 3"]`,
    },

    forEach: {
      name: "Метод forEach",
      itemText: `<p>Метод схожий с <span>array.map</span> - <span>array.forEach</span>.</p>
      <p>Он всё так же выполняет функцию для каждого элемента массива, разве что, результат функции(если он вообще есть) не возвращается.</p>
      <p>Синтаксис:</p>
      <pre><code>array.forEach((item, index, array);</code></pre>
      <p>Пример:</p>`,
      codeExample: `let countToTen = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

countToTen.forEach(item => console.log(item));
`,
    },

    filter: {
      name: "Метод filter",
      itemText: `<p>Метод <span>array.filter</span> возвращает новый массив элементов удовлетворяющих требованиям передоваемой функции.</p>
      <p>Если не один элемент не пройдет проверку, метод вернёт пустой массив.</p>
      <p>Элементы не прошедшие проверку отбрасываются, <span>array.filter</span> их не возвращает и не включает в новый массив.</p>
      <p>Метод не изменяет родительский массив.</p>
      <p>Синтаксис:</p>
      <pre><code class=\"popup__code language-js\">array.filter(callback(element[, index, [array]])[, thisArg]);</code></pre>
      <p>Пример:</p>`,
      codeExample: `let array = ["1", "1122", "342", "0", "-2", "99", "9.9", "1.2", "10", "5"];

let result = array.filter((item) => {
  return item % 2 == 0;
});

console.log(result); // ["1122", "342", "0", "-2", "10"]`,
    },

    reduce: {
      name: "Метод reduce",
      itemText: `<p>Применяет передоваемую функцию каждому элементу массива и возвращает один результат работы всего метода.</p>
      <p>Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.</p>
      <p>Синтаксис:</p>
      <pre><code  class=\"popup__code language-js\">array.reduce(callback[, initialValue]);</code></pre>
      <p>Пример:</p>
      `,
      codeExample: `let array = [1, 2, 3, 4, 5, 6, 7, 8];

let result = array.reduce((prevResult, current) => prevResult + current, 0);
      
alert(result); // 36`,
    },

    sort: {
      name: "Метод sort",
      itemText: `<p>Метод сортирует массив "на месте" и возвращает отсортированный массив. Это значит что метод не создаёт копию массива.</p>
      <p>По умолчанию, метод сортирует массив согласно порядку кодовых точек Unicode и если мы хотим исправить это, нам нужно передать свою функцию в качестве аргумента.</p>
      <p>Синтаксис:</p>
      <pre><code  class=\"popup__code language-js\">array.sort([compareFunction])</code></pre>
      <p>Пример:</p>
      
<pre><code>// сортировка по умолчанию
let digits = [1, 2, 10, 21];
scores.sort(); // [1, 10, 2, 21]</code></pre>`,
      codeExample: `// "нормальная сортировка" с помощью нашей функции
let digits = [4, 1, 122, -21];
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
      
digits.sort(compare); // (4) [-21, 1, 4, 122]`,
    },

    some: {
      name: "Метод some",
      itemText: `<p>Метод проверяет, удовлетворяет ли какой-либо элемент массива условию, которое мы передаём в функции.</p>
      <p>Метод возвращает <span>true</span>, если хоть один елемент удовлетворяет условию, иначе - <span>false</span>.</p>
      <p>Синтаксис:</p>
      <pre><code  class=\"popup__code language-js\">array.some(callback(element[, index[, array]])[, thisArg]);</code></pre>
      <p>Пример:</p>`,
      codeExample: `let digits = [4, 1, 122, -21];
function findEven(el) {
  return el % 2 === 0;
}
  
digits.some(findEven); // true

let falsy = [-1, -0.5, -100.3, 101];
falsy.some(findEven); // false`,
    },

    every: {
      name: "Метод every",
      itemText: `<p>Метод делат всё то же что и метод <span>some</span>, но вернёт <span>true</span> только если каждый елемент пройдет проверку, иначе <span>false</span>.</p>
      <p>Также метод возвращает <span>true</span> для пустых массивов. Так как все элементы пустого множества удовлетворяют любому заданному значению.</p>
      <p>Синтаксис:</p>
      <pre><code  class=\"popup__code language-js\">array.every(callback(currentValue[, index[, array]])[, thisArg])</code></pre>
      <p>Пример:</p>`,
      codeExample: `let digits = [4, 1, 122, -21];
function findEven(el) {
  return el % 2 === 0;
}

digits.every(findEven); // false

let truthy = [2, -2, 128, 256]; // true`,
    },
  },
};

// listen for list item click
listItem.forEach((item) => {
  item.addEventListener("click", () => {
    function fillContent(itemId) {
      popupHeader.innerHTML = data["items"][`${item.id}`]["name"];
      popupContent.innerHTML = data["items"][`${item.id}`]["itemText"];
      popupCode.innerHTML = data["items"][`${item.id}`]["codeExample"];

      hljs.highlightAll();
    }

    if (!popup.classList.contains(".popup--active")) {
      popup.classList.add("popup--active");
      // dynamic content change
      switch (item.id) {
        case `${item.id}`:
          let itemId = item.id;
          fillContent(itemId);
          break;
      }
    }
  });
});

// close popup on hitting cross
modalClose.addEventListener("click", () => {
  if (popup.classList.contains("popup--active")) {
    popup.classList.remove("popup--active");
  }
});

// close popup on hitting Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (popup.classList.contains("popup--active")) {
      popup.classList.remove("popup--active");
    }
  }
});

popup.addEventListener("click", (e) => {
  if (e.currentTarget === e.target) {
    popup.classList.remove("popup--active");
  }
});
