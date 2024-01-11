const input = document.querySelector("input[name='fruit']"); // Update the selector to use attribute selector for the input's name
const suggestions = document.querySelector(".suggestions ul");

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
  if (keywordInput.length) {
    //as soon as you start typing, results are generated
    results = fruit.filter((keyword) => {
      //using filter method to filter through fruit array
      return keyword.toLowerCase().includes(keywordInput.toLowerCase()); //normalizes input to lowercase
    });
  }
  return results;
}

function searchHandler(e) {
  const keywordInput = e.target.value;
  if (!/^[a-zA-Z]+$/.test(keywordInput) && keywordInput.length !== 0) {
    //without .length, annoying alert whenever you backspace
    alert("You can only search using letters!"); // Alert user that only letters can be used in the search box
    return;
  }
  const results = search(keywordInput); // Call the search function to get the results
  showSuggestions(results); // Call showSuggestions with the results
}

function showSuggestions(results) {
  const listOfSuggestions = results.map((inputVal) => {
    return `<li>${inputVal}</li>`; // new LI created
  });
  suggestions.innerHTML = listOfSuggestions.join(""); //joins the suggestions, was getting a random comma before
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    //if selected element is an LI, basically if you choose a suggestion
    input.value = e.target.textContent; //updates input val to selected fruit
    suggestions.innerHTML = ""; // Clear the suggestions after using one
  }
}

suggestions.addEventListener("click", useSuggestion);

input.addEventListener("keyup", searchHandler);
