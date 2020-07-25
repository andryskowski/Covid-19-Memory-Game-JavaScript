//variables from HTML
const POINTS = document.querySelector('.points');
let cards = document.querySelectorAll('.card_back');
const CARDS = [...cards];
const WAITING_CARDS = [];
//counters
let counter_of_click = 1;
let counter_if_found = 0;
let counter_timer = 0;
let winner_time = 1000;
//array for backgrounds of cards
let backgrounds_cards = [];

//fuction onload
window.onload = function () {
    set_interval_for_game();
    shuffleArray(CARDS);
    CARDS[0].style.backgroundImage = 'url(img/gloves.svg)';
    CARDS[1].style.backgroundImage = 'url(img/injection.svg)';
    CARDS[2].style.backgroundImage = 'url(img/tissue-paper.svg)';
    CARDS[3].style.backgroundImage = 'url(img/goggles.svg)';
    CARDS[4].style.backgroundImage = 'url(img/hand-sanitizer.svg)';
    CARDS[5].style.backgroundImage = 'url(img/hand-sanitizer-2.svg)';
    CARDS[6].style.backgroundImage = 'url(img/face-mask.svg)';
    CARDS[7].style.backgroundImage = 'url(img/coronavirus.svg)';
    CARDS[8].style.backgroundImage = 'url(img/hand-sanitizer-2.svg)';
    CARDS[9].style.backgroundImage = 'url(img/gloves.svg)';
    CARDS[10].style.backgroundImage = 'url(img/injection.svg)';
    CARDS[11].style.backgroundImage = 'url(img/tissue-paper.svg)';
    CARDS[12].style.backgroundImage = 'url(img/goggles.svg)';
    CARDS[13].style.backgroundImage = 'url(img/hand-sanitizer.svg)';
    CARDS[14].style.backgroundImage = 'url(img/coronavirus.svg)';
    CARDS[15].style.backgroundImage = 'url(img/face-mask.svg)';
    make_array_for_backgrounds(backgrounds_cards);
    setTimeout(function () { CARDS.forEach(CARD => CARD.style.backgroundImage = 'url(img/card.svg)') }, 2000);
};

//function 'click' for each card
CARDS.forEach(CARD => CARD.addEventListener('click', function (index) {
    
    if (WAITING_CARDS.length < 2) {
        move_card(CARD)
    }
//when there are the same cards
    if ((WAITING_CARDS.length == 2) && (WAITING_CARDS[0].getAttribute('data-if_active') == 'active' && WAITING_CARDS[1].getAttribute('data-if_active') == 'active') 
    && (WAITING_CARDS[0].style.backgroundImage == WAITING_CARDS[1].style.backgroundImage) 
    && (WAITING_CARDS[0].getAttribute('data-index') != WAITING_CARDS[1].getAttribute('data-index'))) {

        WAITING_CARDS[0].style.opacity = 0;
        WAITING_CARDS[1].style.opacity = 0;
        WAITING_CARDS.length=0;
        counter_if_found += 2;
        console.log(counter_if_found);
        if (counter_if_found == 16) {
            you_win();
        }
    }
}))

//function to moving card
function move_card(CARD) {
    CARD.style.backgroundImage = backgrounds_cards[CARDS.indexOf(CARD)];
    CARD.classList.add('active');
    CARD.setAttribute('data-if_active', 'active');
    WAITING_CARDS.push(CARD);
    console.log(WAITING_CARDS);
    //hide_card
    setTimeout(() => {
        CARD.style.backgroundImage = 'url(img/card.svg)';
        CARD.setAttribute('data-if_active', 'inactive');
        WAITING_CARDS.pop(CARD);
    }, 2000);
}

//shuffle array 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//it's necessary to save backgrounds before setting all cards backwards
function make_array_for_backgrounds(backgrounds_cards) {
    for (let i = 0; i < CARDS.length; i++) {
        backgrounds_cards[i] = CARDS[i].style.backgroundImage;
    }
    return backgrounds_cards;
}

//set time for function showTime
function set_interval_for_game() {
    setInterval(showTime, 1000);
}

//setting inscription with counter of seconds
function showTime() {
    if (counter_timer < winner_time) {
        POINTS.innerHTML = '<h2 class="points">Your score is ' + counter_timer + ' seconds!</h2>';
        counter_timer += 1;
    }
    else {
        POINTS.innerHTML = 'Reload page if you want play again. ;)';
    }
}

//what if user win
function you_win() {
    alert("Congratulation! :D You win! Your time is " + counter_timer + " seconds");
    winner_time = counter_timer;
    POINTS.innerHTML = 'Reload page if you want play again. ;)';
}


