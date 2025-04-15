let main = document.querySelector('#main');

const users = [
    {
        name: "Ankit Yadav",
        image: "img1.jpg",
        followers: "12B",
        following: 2,
        status: "Strangers"
    },
    {
        name: "Rajesh Kumar",
        image: "img2.jpg",
        followers: "8M",
        following: 340,
        status: "Strangers"
    },
    {
        name: "Priya Sharma",
        image: "img3.jpg",
        followers: "15K",
        following: 87,
        status: "Strangers"
    },
    {
        name: "Amit Verma",
        image: "img4.jpg",
        followers: "500K",
        following: 1,
        status: "Strangers"
    },
    {
        name: "Sneha Patel",
        image: "img5.jpg",
        followers: "90M",
        following: 20,
        status: "Strangers"
    },
    {
        name: "Vikram Singh",
        image: "img6.jpg",
        followers: "1.2M",
        following: 234,
        status: "Strangers"
    },
    {
        name: "Rohit Mehta",
        image: "img7.jpg",
        followers: "220K",
        following: 89,
        status: "Strangers"
    },
    {
        name: "Simran Kaur",
        image: "img8.jpg",
        followers: "35K",
        following: 402,
        status: "Strangers"
    },
    {
        name: "Alok Choudhary",
        image: "img9.jpg",
        followers: "7M",
        following: 120,
        status: "Strangers"
    },
    {
        name: "Neha Gupta",
        image: "img10.jpg",
        followers: "150K",
        following: 53,
        status: "Strangers"
    }
];

function herofunction(){
    let idx = 0;
    let sum = ''
    users.forEach(function(curr){ sum = sum + `
        <div class="card">
            <img src="${curr.image}" alt="img">
            <h2>${curr.name}</h2>
            <h3>${curr.status}</h3>
            <div class="contents">
                <span class="followers">${curr.followers}</span>
                <span class="following">${curr.following}</span>
            </div>
            <button id="${idx}">Add Friends</button>
        </div>`;
        idx++;
    })

        main.innerHTML = sum;
};

herofunction();



main.addEventListener('click',function(targ){
    let gold = users[targ.target.id];
    let card = targ.target.parentElement; // Get the parent card element
    let statusElement = card.querySelector('h3');

    if(gold.status=='Strangers'){
        gold.status="Friends"
        statusElement.style.color="green";
    }else{
        gold.status="Strangers";
        statusElement.style.color="red";
    }
    statusElement.textContent = gold.status;
})
