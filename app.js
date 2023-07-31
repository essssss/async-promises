// let favNumber = 5;
// const baseURL = "http://numbersapi.com/";

// // 1
// axios.get(`${baseURL}${favNumber}?json`).then((res) => console.log(res.data));

// // 2
// let favNumbers = [1, 3, 18];
// axios.get(`${baseURL}${favNumbers}?json`).then((res) => {
//     console.log(res.data);
// });

// 3
// let request = axios.get(`${baseURL}${favNumber}?json`);

// let requestArr = [];

// for (let i = 0; i < 4; i++) {
//     requestArr.push(request);
// }

// Promise.all(requestArr).then((res) => {
//     res.forEach((fact) => {
//         console.log(fact.data.text);
//     });
// });

// Promise.all(
//     Array.from({ length: 4 }, () => {
//         return $.getJSON(`${baseURL}${favNumber}?json`);
//     })
// ).then((facts) => {
//     facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
// });

/************************************** */
let baseCardURL = "https://deckofcardsapi.com/api/deck/";
let deckID = "new";

// axios
//     .get(`${baseCardURL}${deckID}/draw/?count=1`)
//     .then((res) => {
//         console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
//         deckID = res.data.deck_id;
//         return axios.get(`${baseCardURL}${deckID}/draw/?count=1`);
//     })
//     .then((res) => {
//         console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
//     });

const btn = document.querySelector("button");
const cardArea = document.getElementById("card-area");

axios.get(`${baseCardURL}${deckID}/shuffle/`).then((res) => {
    console.log(res.data.deck_id);
    deckID = res.data.deck_id;
});
btn.addEventListener("click", (evt) => {
    evt.preventDefault;
    axios.get(`${baseCardURL}${deckID}/draw`).then((res) => {
        console.log(res.data.cards[0]);
        let cardSrc = res.data.cards[0].image;

        cardArea.insertAdjacentHTML("beforeend", `<img src="${cardSrc}">`);
        if (res.data.remaining === 0) btn.remove();
    });
});
