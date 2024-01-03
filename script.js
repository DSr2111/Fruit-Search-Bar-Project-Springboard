const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

input.addEventListener("keyup", search);
suggestions.addEventListener("click", useSuggestion);

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search() {
  let results = [];
  let keywordInput = input.value;
  if (keywordInput.length) {
    //checking to ensure input is not a number or smth else
    results = fruit.filter((keyword) => {
      return keyword.toLowerCase().includes(keywordInput.toLowerCase()); //normalize the word written to lowercase, then filter through fruit list to match word
    });
  } else {
    alert("You can only search using letters!"); //alert user that only letters can be used in search box
  }
  console.log(results);
  return results;
}

function searchHandler(e) {}

function showSuggestions(results, inputVal) {
  const listOfSuggestions = results.map((list) => {
    return `<li> ${list} </li>`;
  });
  suggestions.innerHTML = `<ul> ${listOfSuggestions} </ul>`;
}

function useSuggestion(e) {
  // TODO
}

//input.addEventListener("keyup", searchHandler);
