 // define the variables here before we move on to functions
let dictionaryData, userInput;

const $input = $("input[type='text']");
const $definition = $(".definition");
const $word = $(".word");
const $type = $(".type");
const $example = $(".example");
const $alphabet = $(".alphabet"); // hoping to grab the alphabet in the background and change color


$("form").on("submit", grabData);





$alphabet.html(`<p class="alpha">${randomAlphabet(26)}</p>`);

const $color = $(".alpha")



function grabData(event) { // This line will use the ajax method to retrieve data from OwlBot Api
    
    event.preventDefault();
    
    userInput = $input.val();
    
    $.ajax({
        url: `https://owlbot.info/api/v4/dictionary/${userInput}`, // this line will allow the string from user imput to be interpolated
        headers: {Authorization: "Token 5360733aa2702e396f4b3487abe34ca32d93afad"}

        
    }).then(
        (data) => {
            dictionaryData = data;
            console.log("data", data);
            render();
            changeColor();
        },
        (error) => {
            console.log("error", error);
        }
    )

};

// establish a function that populates the dom.


function render() {
    $word.html(`<h2>${dictionaryData.word}</h2>`);
    $definition.html(`<h4>${dictionaryData.definitions[0].definition}</h4>`);
    $type.html(`<h3>${dictionaryData.definitions[0].type}</h3>`);
    $example.html(`<h3>${dictionaryData.definitions[2].example}</h3>`);
    userInput = $input.val(""); // this line will reset the value in the input bar.
     // this line changes the color of the selected items
    
};

function changeColor() {
    $color.on("submit", $color.css("color", "gold"));  // this line changes the color of the selected items
};

function randomAlphabet(len) {
    var text = "";
    
    var charset = "A:B 'C D ;E *F xG ßH αI öJ K ΩL M N O P Q R S T U V W X Y Z";
    
    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    
    return text;
  };
  
//   function example() {
//       for(let i = 0; i < dictionaryData.)
//   }
  