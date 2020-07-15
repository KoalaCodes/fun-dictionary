 // define the variables here before we move on to functions
let dictionaryData, userInput;

const $input = $("input[type='text']");
const $definition = $(".definition");
const $word = $(".word");
const $type = $(".type");
const $example = $(".example");

$("form").on("submit", grabData);







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
            
        },
        (error) => {
            console.log("error", error);
        }
    )

};

// establish a function that populates the dom.


function render() {
    $word.html(`<h3>${dictionaryData.word}</h3>`);
    $definition.html(`<h4>${dictionaryData.definitions[0].definition}</h4>`);
    $type.html(`<h3>${dictionaryData.definitions[0].type}</h3>`);
    $example.html(`<h3>${dictionaryData.definitions[2].example}</h3>`);
    userInput = $input.val(""); // this line will reset the value in the input bar.
};