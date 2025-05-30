const state = {
  bank: [],
  odd: [],
  even: []
}

const sec = document.createElement('section');
const lowerPart = document.createElement('section');

sec.appendChild(lowerPart);
const miniHeader1 = document.createElement('h2');
miniHeader1.innerHTML = `
  <h2>Bank</h2>
  ${state.bank}
`;
lowerPart.appendChild(miniHeader1);

//form onlyyyy
const userInputForm = document.createElement('form');
sec.appendChild(userInputForm);
const inp = document.createElement('input');
userInputForm.appendChild(inp);
const inputValue = inp.value;
console.log(inputValue);
//add a number button
const addNumberButton = document.createElement('button');
addNumberButton.innerText = 'Add number';
userInputForm.appendChild(addNumberButton);
//what happens if you click add a number button
addNumberButton.addEventListener('click', (ev) => {
  ev.preventdefault();
  console.log(inputValue);
  state.bank.push(inputValue);

  miniHeader1.innerHTML = `
    <h2>Bank</h2>
    ${state.bank}
  `;
});
//form onlyyy

//sort 1 button
const sort1Button = document.createElement('button');
sort1Button.innerText = 'Sort 1';
sort1Button.addEventListener('submit', (ev) => {
  ev.preventdefault();
  const firstNum = bank.unshift();
  if (firstNum % 2 === 0) state.even.push(firstNum);
  else state.odd.push(firstNum);
});




const miniHeader2 = document.createElement('h2');
miniHeader2.innerText = `
  <h2>Odds</h2>
  ${state.odd}
`;

const miniHeader3 = document.createElement('h2');
miniHeader3.innerText = `
  <h2>Evens</h2>
  ${state.even}
`;





const returnForm = () => {
  return userInputForm;
}

const oddOrEvenUpdate = () => {

}

const emptyBank = () => {
  const but3 = document.createElement('button');
  but2.innerText = 'Sort All';
  but3.addEventListener('submit', (ev) => {
    ev.preventdefault();
    bank.forEach(num => {
      if (num % 2 === 0) state.even.push(num);
      else state.odd.push(num);
    });
  });
  fo.appendChild(but3);
}

console.log(state.bank);





const everything = () => {




};

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