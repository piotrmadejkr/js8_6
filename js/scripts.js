// scripts.js
var a = prompt('podaj liczbę a');
var b = prompt('podaj liczbę b');
var value = (a * a) - (2 * a * b) - (b * b);
var dodatni = 'wynik dodatni';
var ujemny = 'wynik ujemny';
var zero = 0;
console.log(value);
if (value > zero) {
    alert(value);
    alert('wynik dodatni');
}
else if (value < zero) {
    alert(value);
    alert('wynik ujemny');
}
else {
    alert('Właśnie wyszło 0, zachowaj spokój i licz dalej');
}