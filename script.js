const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchBox = document.querySelector(".search-box input");
const partofspeech = document.getElementById("pos");
const phonetic = document.getElementById("phonetic");
const word_meaning = document.getElementById("word_meaning");
const word_example = document.getElementById("word_example");
const input_word = document.getElementById("input_word");
const result = document.getElementById("result");

function playAudio() {
  sound.play();
}

async function searchWord(word) {
  //console.log("hello");
  const response = await fetch(url + word);
  var data = await response.json();
  console.log(data);
  input_word.innerHTML = data[0].word;
  partofspeech.innerHTML = data[0].meanings[0].partOfSpeech;
  phonetic.innerHTML = data[0].phonetic;
  word_meaning.innerHTML = data[0].meanings[0].definitions[0].definition;
  word_example.innerHTML = data[0].meanings[0].definitions[0].example + " ";
  sound.setAttribute("src", data[0].phonetics[0].audio);
}
document.getElementById("search-btn").addEventListener("click", () => {
  //searchWord(searchBox.value);
  let input_word = document.getElementById("inp-word").value;
  //console.log(input_word);
  searchWord(input_word);
});
