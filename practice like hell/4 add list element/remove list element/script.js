let list = document.querySelectorAll('form input[type="text"]');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
     event.preventDefault();

     for (let i = 0; i < list.length; i++) {
         if (list[i].value.trim() === '') {
             list[i].style.backgroundColor = "red";
             list[i].style.color = "white";
         } else {
             list[i].style.backgroundColor = ""; // Reset background
             list[i].style.color = ""; // Reset text color
         }
     }
});