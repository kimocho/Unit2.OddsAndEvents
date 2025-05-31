const state = {
  bank: [],
  odd: [],
  even: []
}

const appDiv = document.querySelector('#app');
appDiv.innerHTML = `
  <h1>Odds and Evens</h1>
  <form>
    <label>Add a number to the banks</label><input />
    <button id="addNum">Add number</button>
    <button id="sort1">Sort 1</button>
    <button id="sortAll">Sort All</button>
  </form>

  <h2>Bank</h2>
  <output id="bankOutput"></output>

  <h2>Odds</h2>
  <output id="oddsOutput"></output>

  <h2>Evens</h2>
  <output id="evensOutput"></output>
`;
const bankStorage = document.querySelector('#bankOutput');
const oddsStorage = document.querySelector('#oddsOutput');
const evensStorage = document.querySelector('#evensOutput');

//add number button
const addNum = document.querySelector('#addNum');
addNum.addEventListener('click', (event) => {
  event.preventDefault();
  const input = document.querySelector('input');
  state.bank.push(input.value);
  bankStorage.innerText = state.bank;
  input.value = '';
});

//created function that sorts even and odd numbers & pushs them to correct array and updates output.
//used in sort1 and sort all
const sortingFunc = (num) => {
  if (num % 2 === 0) {
    state.even.push(num);
    evensStorage.innerText = state.even;
  }
  else {
    state.odd.push(num);
    oddsStorage.innerText = state.odd;
  }
}

//sort1 button
const sort1 = document.querySelector('#sort1');
sort1.addEventListener('click', (event) => {
  event.preventDefault();
  const firstNum = state.bank.shift();
  bankStorage.innerText = state.bank;
  sortingFunc(firstNum);
});

//sort all button
const sortAll = document.querySelector('#sortAll');
sortAll.addEventListener('click', (event) => {
  event.preventDefault();
  state.bank.forEach(sortingFunc);
  bankStorage.innerText = "";
});

