let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');

let btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    //button animation
    btn.style.transition='transform 0.1s ease-in-out';
    btn.style.scale='0.9';
    setTimeout(function(){
        btn.style.scale='1';
    },100)

    //image swap
    let temp =  img1.getAttribute('src');
    img1.setAttribute('src',img2.getAttribute('src'));
    img2.setAttribute('src',temp);
})
