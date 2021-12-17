console.log("Здравствуй мир!");

const userText = prompt("Введите текст!");
const firstText = document.querySelector('#firstText');
firstText.textContent = userText;
console.log("Заголовок h2 был изменен на " +userText);


