let box = document.querySelector('#box');
let btn = document.querySelector('.btn');
let colorCode = document.querySelector('#colorCode');
let rotationAngle = 0;

btn.addEventListener('click', function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    rotationAngle += 1800;

    box.style.transform = `rotate(${rotationAngle}deg)`;
    colorCode.textContent = `RGB(${a},${b},${c})`;
    box.style.backgroundColor = `rgb(${a},${b},${c})`;
});