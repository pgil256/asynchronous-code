let number = 4;
let URL = 'httt://numbersapi.com'

$.getJSON(`${URL}/${number}?json`, function(data) {
    console.log(data);
});

let numbers = [4, 6, 11];
$.getJSON(`${URL}/${number}?json`, function(data){
    console.log(data);
});

let facts = [];
$.getJSON(`${URL}/${number}?json`, function(data){
    facts.push(data.text);
    $.getJSON(`${URL}/${number}?json`, function(data){
        facts.push(data.text);
        $.getJSON(`${URL}/${number}?json`, function(data){
            facts.push(data.text);
            $.getJSON(`${URL}/${number}?json`, function(data){
                facts.push(data.text);
                facts.forEach(fact => {
                    $('body').append(`<p>${fact}</p>`);
                });
            });
        });
    });
});