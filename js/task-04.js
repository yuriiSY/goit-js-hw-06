// updateCounterValue();
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueSpan = document.querySelector("#value");

let value = Number(valueSpan.textContent);

function increment() {
  value += 1;
  valueSpan.textContent = value;
}

function decrement() {
  if (value > 0) {
    value -= 1;
    valueSpan.textContent = value;
  }
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
