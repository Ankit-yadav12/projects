let btn = document.querySelector("button");
let p = document.querySelector("#section2 p");
let btn1 = document.querySelector("#section3 button");
let percent = document.querySelector("#section3 #percent");
let growth = document.querySelector("#section3 #progress #growth")

let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    p.innerHTML = "Request Sending...";
    p.style.color = "blue";
    setTimeout(function () {
      p.innerHTML = "Friends";
      p.style.color = "green";
      btn.textContent = "Remove Friend!";
    }, 2000);
    flag = 1;
  }else{
    p.innerHTML = "Stranger";
    p.style.color = "red";
    btn.textContent = "Add Friend!";
    flag = 0;
  }
});


var i = 0;
btn1.addEventListener("click", function () {
    var int = setInterval(function () {
        i++;
        percent.textContent = i + "%";
        growth.style.width=i+'%';
    },50);
    
    setTimeout(()=>{
        clearInterval(int);
    },5000);
    
});
