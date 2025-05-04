let number = Number(prompt("Enter a number:"));
let sum = 0;
let i = 1;

while (i <= number) {
    sum = sum + i;
    i++;
}

alert("The sum of numbers from 1 to " + number + " is " + sum);
