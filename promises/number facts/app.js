let number = 4;
let URL = 'httt://numbersapi.com'

$.getJSON(`${URL}/${number}?json`, function(data) {
    console.log(data);
});

let numbers = [4, 6, 11];
$.getJSON(`${URL}/${number}?json`, function(data){
    console.log(data);
});

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${URL}/${number}?json`);
    })
).then(facts => {
    facts.forEach(data => $('body').append(`<p>${data.text}</p>`))
});