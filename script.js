// Task 1
//way 1
function palindrom(txt) {
  const newtxt = txt.split("").reverse().join("");

  return newtxt == txt ? true : false;
  // console.log(newtxt);
}

console.log(palindrom("level"));

// End way 1

//Way 2

function palindrom(txt) {
  let newtxt = "";
  for (let i = txt.length - 1; i >= 0; i--) {
    newtxt += txt[i];
  }

  return newtxt == txt ? true : false;
}
console.log(palindrom("madam"));

//End way 2

// End task 1

//Task 2

function firstNotDup(text) {
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) === text.lastIndexOf(text[i])) {
      return text[i];
    }
  }
  return "All symbols are dups";
}
console.log(firstNotDup("goodmorning"));

//End task 2

// Task 3

function camelCase(text) {
  let splitted = text.split(" ");

  result = splitted[0];
  for (let i = 1; i < splitted.length; i++) {
    result += splitted[i].charAt(0).toUpperCase(splitted[i]) + splitted[i].slice(1);
  }

  // console.log(result);
  return result;
}
console.log(camelCase("go to the mars"));

//End task 3

// Task 4

function normilize(n) {
  let lastNum = n % 10;
  switch (true) {
    case lastNum === 1:
      return n + "st";
    case lastNum === 2:
      return n + "nd";
    case lastNum === 3:
      return n + "rd";

    default:
      return n + "th";
  }
}

console.log(normilize(128));

//End task 4

// Task 5
function mostrep(...arr) {
  let newarr = arr.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else acc[cur] = 1;

    return acc;
  }, {});

  // let arra = Object.values(newarr);
  // let objectkeys = Object.keys(newarr);
  // let max = Math.max(...arra);
  // let findkey = arra.indexOf(max);

  // console.log(`${objectkeys[findkey]}-${max} is most repeated `);
}

mostrep(3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3);

// End task 5

// Task 6

let array1 = [1, 2, 3, 3, 4, 1];
let array2 = [2, 30, 1];
var a = array1.concat(array2);

// console.log([...new Set(a)]);

//Saba
let newarr = [];

function con(...arr) {
  // console.log(arr.sort());
  // console.log(newarr);
  console.log(arr);
  return arr.sort().reduce((acc, cur) => {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

console.log(con(...array1, ...array2));

// [1,2,3,30]
// End task 6

// Task 7
function readyToPutInTheDOM(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log("hello");
    return `<h1>${arr[i].name}</h1><h2>${arr[i].age}</h2>"`;
  }
}

// function readyToPutInTheDOM(arr) {
//   return arr.map((el) => {
//     return `<h1>${el.name}</h1><h2>${el.age}</h2>`;
//   });
// }

console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

// End Task 7

// Task 8

lett = [2, 1, 10, 15, 11];
sum = 0;
function sumOfDifferences(lett) {
  lett.sort((a, b) => b - a);

  for (let i = 0; i < lett.length - 1; i++) {
    sum += lett[i] - lett[i + 1];
  }

  console.log(sum);
}

console.log(sumOfDifferences(lett));

// End Task 8
