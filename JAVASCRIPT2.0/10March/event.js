let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello");
});

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('dblclick', () => {
    alert("Hyy");
});

let btn3 = document.querySelector('#btn3'); // Fixed to target #btn3
btn3.addEventListener('mouseenter', () => {
    alert("Hyy");
});

let btn4 = document.querySelector('#btn4'); // Fixed to target #btn4
btn4.addEventListener('mouseleave', () => {
    alert("Hyy");
});







