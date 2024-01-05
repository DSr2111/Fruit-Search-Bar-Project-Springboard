const input = document.querySelector("input[name='fruit']"); // Update the selector to use attribute selector for the input's name
const suggestions = document.querySelector(".suggestions ul");

suggestions.addEventListener("click", useSuggestion);

input.addEventListener("keyup", searchHandler);

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

function search(keywordInput) {
  let results = [];
  if (keywordInput.length) {
    results = fruit.filter((keyword) => {
      return keyword.toLowerCase().includes(keywordInput.toLowerCase());
    });
  }
  return results;
}

function searchHandler(e) {
  const keywordInput = input.value;
  if (!/^[a-zA-Z]+$/.test(keywordInput)) {
    alert("You can only search using letters!"); // Alert user that only letters can be used in the search box
    return;
  }
  const results = search(keywordInput); // Call the search function to get the results
  showSuggestions(results); // Call showSuggestions with the results
}

function showSuggestions(results, inputVal) {
  const listOfSuggestions = results.map((inputVal) => {
    return `<li> ${inputVal} </li>`;
  });
  suggestions.innerHTML = `<ul> ${listOfSuggestions} </ul>`;
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    //if LI
    input.value = e.target.textContent;
    suggestions.innerHTML = ""; // Clear the suggestions after using one
  }
}
