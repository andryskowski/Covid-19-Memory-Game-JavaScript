const pierwsza =document.querySelectorAll('.pierwsza');
const coronavirus =document.querySelector('.coronavirus');

let if_double_click = 1;
let cards = document.querySelectorAll('.pierwsza');
cards = [...cards];
console.log(cards);

cards.forEach(card => card.addEventListener('click', function () {
    // const number = BTN[i].getAttribute('data-letter');
    // BTN[i].style.display = 'none';
    // check(number);
    console.log("dziala");

    // pierwsza.classList.add('hidden');
    // coronavirus.classList.add('visible');
    console.log(if_double_click);
    if(if_double_click%2==1){
        console.log("pierwsza petla");
        show_front_card(card);
        if_double_click+=1;

    }
    else if(if_double_click%2==0){
        console.log("druga petla");
        show_back_card(card);
        if_double_click+=1;
    }
}))

function show_front_card(card){
    card.classList.add("visible");
    card.classList.remove("hidden");
    // coronavirus.classList.add("visible");
}

function show_back_card(card){
    card.classList.add("hidden");
    card.classList.remove("visible");
}
