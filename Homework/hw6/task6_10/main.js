// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const cardsSuit = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];
for (const cardSuit of cardsSuit) {
    for (const value of values) {
        let color;
        if (cardSuit === 'heart' || cardSuit === 'diamond') {
            color = 'red';
        } else {
            color = 'black';
        }
        deck.push({
            cardSuit: cardSuit,
            value: value,
            color: color
        });
    }
}
console.log(deck);


// - знайти піковий туз
let findSpadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(findSpadeAce);

// - всі шістки
let filterSixes = deck.filter(card => card.value === '6');
console.log(filterSixes);

// - всі червоні карти
let filterReds = deck.filter(card => card.color === 'red');
console.log(filterReds);

// - всі буби
let filterDiamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(filterDiamonds);

// - всі трефи від 9 та більше
let filterClubs = deck.filter(card => card.cardSuit === 'clubs');
let filterClubsFrom9AndUp = filterClubs.filter(card => {
    return values.indexOf(card.value) >= values.indexOf('9');
});
console.log(filterClubsFrom9AndUp);


//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduceSuits = deck.reduce((cardsSuit, card) => {
    switch (card.cardSuit) {
        case 'spade':
            cardsSuit.spades.push(card);
            break;
        case 'diamond':
            cardsSuit.diamonds.push(card);
            break;
        case 'heart':
            cardsSuit.hearts.push(card);
            break;
        case 'clubs':
            cardsSuit.clubs.push(card);
            break;
    }
    return cardsSuit;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduceSuits);
