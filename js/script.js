 
let dictionaryData, userInput;

const $input = $("input[type='text']");
const $definition = $(".definition");
const $word = $(".word");

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




function render() {
    $word.html(`<h3>${dictionaryData.word}</h3>`);
    $definition.html(`<h4>${dictionaryData.definitions[0].definition}</h4>`);
    
};