// Oppgave 1

const textToRemove = document.getElementById('remove');
const removeButton = document.getElementById('remove-btn');

removeButton.addEventListener ('click', () => {
    textToRemove.remove();
});

// Oppgave 2

const textToChange = document.getElementById('change');
const changeTextButton = document.getElementById('change-btn');

changeTextButton.addEventListener ('click', () => {
    textToChange.innerText = 'Haha! Jeg klarte det!';
});

// Oppgave 3

const input = document.getElementById('input');
const inputText = document.getElementById('input-text');

input.addEventListener('keypress', () => {
    inputText.innerText = input.value;
});

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const writeListButton = document.getElementById('write-list');
const ulList = document.getElementById('ul');

writeListButton.addEventListener('click', () => {
    myList.forEach(listItem => {
        ulList.innerHTML += `<li>${listItem}</li>`
    });
});

// Oppgave 5

const placeholder = document.getElementById('placeholder');
const select = document.getElementById('select');
const textInput = document.getElementById('text');
const createButton = document.getElementById('create');

createButton.addEventListener('click', () => {
    placeholder.innerHTML = `<${select.value}>${textInput.value}</${select.value}>`;
});

// Oppgave 6

const ul = document.getElementById('list');
const removeLi = document.getElementById('remove-li');

removeLi.addEventListener('click', () => {
    ul.removeChild(ul.lastElementChild);
});

// Oppgave 7

const nameInput = document.getElementById('name');
const orderButton = document.getElementById('order');

nameInput.addEventListener('keyup', () => {
    if (nameInput.value.length > 4) {
        orderButton.disabled = true;
        orderButton.style = 'border: 1px solid red;';
    }
    else {
        orderButton.disabled = false;
    }
});


// Oppgave 8

const parent = document.querySelector('.children');
const colorButton = document.getElementById('color');

colorButton.addEventListener('click', () => {
    Array.from(parent.children).forEach((li, index) => {
        if ((index + 1) % 2 === 0) {
          li.style = 'border: 3px solid pink;';
        } else {
          li.style = 'border: 3px solid green;';
        }
      });
});