// Задание
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам
// и методам объекта.


const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};

console.log(pizzaPalace.order('Аль Копчино')); // 'Заказ принят, готовим пиццу «Аль Копчино».'.
console.log(pizzaPalace.order('Четыре нарезона'));// 'Заказ принят, готовим пиццу «Четыре нарезона».'
console.log(pizzaPalace.order('Биг майк')); //'В ассортименте нет пиццы с названием «Биг майк».'.
console.log(pizzaPalace.order('Венская')); // 'В ассортименте нет пиццы с названием «Венская».'.
