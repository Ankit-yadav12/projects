let size;
let btn1 = document.querySelector('#size #submit1');
let box2 = document.querySelector('#array');
let box3 = document.querySelector('#arrayDisplay');

let btn2 = document.querySelector('#array #submit2');
let inputLabel= document.querySelector('#array #inputLabel');

//takes the array size as input and makes the element input box visible
btn1.addEventListener('click', function(){
    size = Number(document.querySelector('#size #sizeInput').value);
    let box1 = document.querySelector('#size');
    box1.style.display = 'none';
    box2.style.display = 'block';
});

//takes the array elements as input and creates the array
let array = new Array(size);
let index = 1;

btn2.addEventListener('click', function(){
    //takes the array elements as input and creates the array
    let input= Number(document.querySelector('#array #arrayInput').value);
    array[index-1] = Number(input);
    
    //creating the element in html
    let newElement = document.createElement('div');
    newElement.className = 'element';
    newElement.id= `element${index}`;
    box3.appendChild(newElement);
    newElement.innerText = input;

    //creating the index elemnts in html
    let newI = document.createElement('i');
    newI.innerText = i;
    newI.className = 'element';
    newI.id= `i${index}`;
    box3.appendChild(newI);
    newI.innerText = input;

    let newJ = document.createElement('j');
    newJ.className = 'element';
    newJ.innerText = j;
    newJ.id= `j${index}`;
    box3.appendChild(newJ);
    newJ.innerText = input;

    //checks if all the elements are entered
    index++;
    if(index>size){
        box2.style.display = 'none';
        document.querySelector('#sortButton').style.display='block';
    }
    
    inputLabel.textContent = `Enter Element ${index}`;
});

// Helper function to introduce delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Modified bubble sort function with delays
async function bubbleSort() {
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            let elem1 = document.querySelector(`#arrayDisplay #element${j + 1}`);
            let elem2 = document.querySelector(`#arrayDisplay #element${j + 2}`);
            let indexI = document.querySelector('#i #i${i+1}')
            let indexJ = document.querySelector('#j #j${j+1}')
            let indexJ1 = document.querySelector('#j #j${j+2}')

            // Highlight elements being compared
            elem1.style.backgroundColor = 'red';
            elem2.style.backgroundColor = 'red';
            indexI.style.backgroundColor = 'cyan';
            indexI.innerText = `i=${i}`;
            indexJ.style.backgroundColor = 'cyan';
            indexJ.innerText = `j=${j}`;
            indexJ1.style.backgroundColor = 'cyan';
            indexJ1.innerText = `j=${j+1}`;

            await delay(800); // Add delay to show comparison

            if (array[j] > array[j + 1]) {
                // Swap elements in the array
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // Update the element text to show the swap
                elem1.innerText = array[j];
                elem2.innerText = array[j + 1];
            }

            // Reset colors after comparison
            elem1.style.backgroundColor = 'white';
            elem2.style.backgroundColor = 'white';

            await delay(500); // Add delay after swap/reset
        }

        // Highlight the sorted element at the end of each pass
        let endElem = document.querySelector(`#arrayDisplay #element${size - i}`);
        endElem.style.backgroundColor = 'green';
    }

    // Highlight the first element as sorted at the end
    let firstElem = document.querySelector(`#arrayDisplay #element1`);
    firstElem.style.backgroundColor = 'green';
}

document.querySelector('#sortButton').addEventListener('click', bubbleSort);