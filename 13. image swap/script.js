let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');

let btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    let temp =  img1.getAttribute('src');
    let temp2 = img2.getAttribute('src');

    img1.setAttribute('src',temp2);
    img2.setAttribute('src',temp);
})
