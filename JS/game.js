const grid = document.querySelector(".grid");

const char = [
  "card1",
  "card3",
  "card4",
  "card5",
  "card6",
  "card7",
  "card8",
  "card9",
  "card10",
  "card11",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const checkCards = ({ target }) => {};

const revealCard = (target) => {
  console.log(target);

  /* if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard == '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard == '') {
        
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }*/
};

const createCard = (personagem) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url(../imagens/${personagem}.jpg)`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", personagem);

  return card;
};

const loadGame = () => {
  const duplicateChar = [...char, ...char];

  const shuffledArray = duplicateChar.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

loadGame();
