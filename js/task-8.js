// Задание
// Выполни рефакторинг кода так, чтобы функция composeMessage(position) вызывалась методом apply.
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = orders.map((order, index) =>
//   composeMessage.call(order, index + 1)
// );

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = orders.map((order, index) =>
  composeMessage.apply(order, [index + 1])
);
 console.log(messages); // ["Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.", "Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.", "Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди."]