let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    let src = img1.src;
    img1.src = img2.src;
    img2.src = src;
});
