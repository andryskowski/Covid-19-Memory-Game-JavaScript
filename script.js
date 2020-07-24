const pierwsza = document.querySelectorAll('.pierwsza');
const coronavirus = document.querySelector('.coronavirus');

let counter_of_click = 1;
let cards = document.querySelectorAll('.pierwsza');
cards = [...cards];
console.log(cards);

shuffleArray(cards);

cards.forEach(card => card.style.opacity = 1);

let backgrounds_cards = [];

window.onload = function () {
    cards[0].style.backgroundImage = 'url(img/gloves.svg)';
    cards[1].style.backgroundImage = 'url(img/injection.svg)';
    cards[2].style.backgroundImage = 'url(img/tissue-paper.svg)';
    cards[3].style.backgroundImage = 'url(img/goggles.svg)';
    cards[4].style.backgroundImage = 'url(img/hand-sanitizer.svg)';
    cards[5].style.backgroundImage = 'url(img/hand-sanitizer-2.svg)';
    cards[6].style.backgroundImage = 'url(img/face-mask.svg)';
    cards[7].style.backgroundImage = 'url(img/coronavirus.svg)';
    cards[8].style.backgroundImage = 'url(img/hand-sanitizer-2.svg)';
    cards[9].style.backgroundImage = 'url(img/gloves.svg)';
    cards[10].style.backgroundImage = 'url(img/injection.svg)';
    cards[11].style.backgroundImage = 'url(img/tissue-paper.svg)';
    cards[12].style.backgroundImage = 'url(img/goggles.svg)';
    cards[13].style.backgroundImage = 'url(img/hand-sanitizer.svg)';
    cards[14].style.backgroundImage = 'url(img/hand-sanitizer-2.svg)';
    cards[15].style.backgroundImage = 'url(img/face-mask.svg)';
    shuffleArray(cards);
    make_array_for_backgrounds(backgrounds_cards);
    setTimeout(function () { cards.forEach(card => card.style.backgroundImage = 'url(img/card.svg)') }, 100);
};

cards.forEach(card => card.addEventListener('click', function (index) {
    // const number = BTN[i].getAttribute('data-letter');
    // BTN[i].style.display = 'none';
    // check(number);

    // pierwsza.classList.add('hidden');
    // coronavirus.classList.add('visible');
    console.log(counter_of_click);

    // if (counter_of_click % 2 == 1) {
    //     console.log("pierwsza petla");
    //     show_front_card(card);
    //     counter_of_click += 1;
    // }
    // else if (counter_of_click % 2 == 0) {
    //     console.log();
    //     show_back_card(card);
    //     counter_of_click += 1;
    // }
    show_front_card(card);
}))

function show_front_card(card) {
    card.style.backgroundImage = backgrounds_cards[cards.indexOf(card)];
    // setTimeout(function(){ alert("Hello"); }, 3000);
    card.classList.add('active');
    card.setAttribute('data-if_active', 'active');
    console.log(card.getAttribute('data-if_active'));

    //ODWRACANIE KARTY
    setTimeout(function(){ card.style.backgroundImage = 'url(img/card.svg)';
    card.setAttribute('data-if_active', 'inactive');
    console.log(card.getAttribute('data-if_active'));}, 1000);
}



// function show_back_card(card) {
//     card.style.backgroundImage = 'url(img/card.svg)';
//     console.log("mmm weszlo");
// }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function make_array_for_backgrounds(backgrounds_cards) {

    for (let i = 0; i < cards.length; i++) {
        backgrounds_cards[i] = cards[i].style.backgroundImage;
    }
    console.log(backgrounds_cards);
    return backgrounds_cards;
}