$(function() {
    let URL = 'https://deckofcardsapi.com/api/deck';

    $.getJSON(`${URL}/new/draw/`, function(data){
        let { suit, value } = data.cards[0];
        console.log(`${value.toLowerCase()} if ${suit.toLowerCase()}`);
        });

    let card1 = null
    $.getJSON(`${URL}/new/draw/`)
        .then(data => {
            card1 = data.cards[0];
            let deckId = data.deck_id;
            return $.getJSON(`${URL}/${deckId}/draw/`);
        })

        .then(data => {
        let card2 = data.card[0];
            [card1, card2].forEach(function(card) {
                console.log(
                    `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
                );
        });
    });

    let deckId = null; 
    let $button = $('button');
    let $cardDiv = $('#card-div');

    $.getJSON(`${URL}/new/shuffle/`, function(data) {
        deckId = data.deck_id;
        $btn.show();
    }); 

    $button.on(`click`, function(){
        $.getJSON(`${URL}/${deckId}/draw/`, function(data) {
            let cardSource = data.cards[0].image;
            $cardDiv.append(
                $('<img>', {
                    src: cardSource
                })
            );
            if (data.remaining === 0) $button.remove();
        });
    });

});
