let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let body = document.querySelector('body');

let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');

let dil1 = document.querySelector('#dil1');
let dil2 = document.querySelector('#dil2');

//btn1
btn.addEventListener('click',function(){
    //button animation
    btn.style.scale='0.9';
    setTimeout(function(){
        btn.style.scale='1';
    },100);

    //image swapping
    let temp =  img1.getAttribute('src');
    img1.setAttribute('src',img2.getAttribute('src'));
    img2.setAttribute('src',temp);
})

img1.addEventListener('dblclick',function(){
    dil1.style.display='block';
    dil1.style.scale='0.8';
    setTimeout(function(){
        dil1.style.scale='1.2';
    },200);
    setTimeout(function(){
        dil1.style.scale='1';
        dil1.style.display='none';
    },350);
});

img2.addEventListener('dblclick',function(){
    dil2.style.display='block';
    dil2.style.scale='0.8';
    setTimeout(function(){
        dil2.style.scale='1.2';
    },150);
    setTimeout(function(){
        dil2.style.scale='.8';
        dil2.style.display='none';
    },300);
});

//btn2
btn2.addEventListener('click',function(){
    //button animation
    btn2.style.scale='0.9';
    setTimeout(function(){
        btn2.style.scale='1';
    },100);

    //image generation
    let x = Math.floor(Math.random() * 80);
    let y = Math.floor(Math.random() * 85);
    let z = Math.floor(Math.random() * 361);

    let img = document.createElement('img');
    img.setAttribute('src','juice.png');
    img.style.height = '80px';
    img.style.position = 'absolute';
    img.style.left = x +'%';
    img.style.top = y +'%';
    img.style.rotate = z + 'deg';
    body.appendChild(img);
});



btn.addEventListener('mouseover',function(){
    btn.style.boxShadow='0 0 15px cyan';
});
btn.addEventListener('mouseout', function () {
    btn.style.boxShadow = 'none';
});


//button glow effect
btn2.addEventListener('mouseover',function(){
    btn2.style.boxShadow='0 0 15px cyan';
});
btn2.addEventListener('mouseout', function () {
    btn2.style.boxShadow = 'none';
});

