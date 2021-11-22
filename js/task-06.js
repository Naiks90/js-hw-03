const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
// console.log(products[0].name);

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const products of allProdcuts) {
    const valuesProducts = Object.values(products);
    for (let i = 0; i < valuesProducts.length; i += 1) {
      if (valuesProducts[i] === productName) {
        return valuesProducts[i + 1] * valuesProducts[i + 2];
      }
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
