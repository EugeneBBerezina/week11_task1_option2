let priceOne = Number(document.getElementById('price_1').textContent);
let priceTwo = Number(document.getElementById('price_2').textContent);
let priceThree = Number(document.getElementById('price_3').textContent);
let priceFour = Number(document.getElementById('price_4').textContent);
let summ = priceOne + priceTwo + priceThree + priceFour;

let inputTotal = document.getElementById('total');
inputTotal.textContent = String(summ) + ' руб.';

function salePrice() {
    document.getElementById('price_1').textContent = String(priceOne - (priceOne * 20 / 100));
    document.getElementById('price_2').textContent = String(priceTwo - (priceTwo * 20 / 100));
    document.getElementById('price_3').textContent = String(priceThree - (priceThree * 20 / 100));
    document.getElementById('price_4').textContent = String(priceFour - (priceFour * 20 / 100));
    inputTotal.textContent = String((priceOne - (priceOne * 20 / 100))+(priceTwo - (priceTwo * 20 / 100))+(priceThree - (priceThree * 20 / 100))+(priceFour - (priceFour * 20 / 100))) + ' руб.';
};

