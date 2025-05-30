const state = {
  bank: [],
  odd: [],
  even: []
}

const sec = document.createElement('section');
const lowerPart = document.createElement('section');
sec.appendChild(lowerPart);

//form onlyyyy
const userInputForm = document.createElement('form');
sec.appendChild(userInputForm);
const myInput = document.createElement('input');
const inputValue = myInput.value;
userInputForm.appendChild(myInput);


//add a number button
const addNumberButton = document.createElement('button');
addNumberButton.innerText = 'Add number';
userInputForm.appendChild(addNumberButton);

//form onlyyy
addNumberButton.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('did it work?');
  state.bank.push(inputValue);
  console.log(state.bank);
});





//sort 1 button!!
const sort1Button = document.createElement('button');
sort1Button.innerText = 'Sort 1';
sort1Button.addEventListener('submit', (ev) => {
  ev.preventDefault();
  console.log('did it work?');
  const firstNum = bank.unshift();
  if (firstNum % 2 === 0) state.even.push(firstNum);
  else state.odd.push(firstNum);
});
userInputForm.appendChild(sort1Button);
console.log(state.bank);


const bankHeader = document.createElement('h2');
bankHeader.innerHTML = `
  <h2>Bank</h2>
  ${state.bank}
`;
lowerPart.appendChild(bankHeader);

const oddsHeader = document.createElement('h2');
oddsHeader.innerHTML = `
  <h2>Odds</h2>
  ${state.odd}
`;
lowerPart.appendChild(oddsHeader);

const evensHeader = document.createElement('h2');
evensHeader.innerHTML = `
  <h2>Evens</h2>
  ${state.even}
`;
lowerPart.appendChild(evensHeader);

//sortAll Button!!
const sortAllButton = document.createElement('button');
sortAllButton.innerText = 'Sort All';
sortAllButton.addEventListener('submit', (ev) => {
  ev.preventdefault();
  console.log('did it work?');
  bank.forEach(num => {
    if (num % 2 === 0) state.even.push(num);
    else state.odd.push(num);
  });
});
userInputForm.appendChild(sortAllButton);

//RENDER
const render = () => {
  const letsBegin = document.querySelector('#app');
  letsBegin.innerHTML = `
    <h1>Odds and Events</h1>
    <h3>Add a number to the bank<h3>
    <nonsense></nonsense>
  `;
  letsBegin.querySelector('nonsense').replaceWith(sec);
}

render();