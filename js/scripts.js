// scripts.js
var a = 5;
var b = 6;
var value = (a * a) - (2 * a * b) - (b * b);
var dodatni = 'wynik dodatni';
var ujemny = 'wynik ujemny';
var zero = 0;
console.log(value);
if (value > zero) {
    console.log(dodatni);
}
else if (value < zero) {
    console.log(ujemny);
}
else {
    console.log('Właśnie wyszło 0, zachowaj spokój i licz dalej');
}