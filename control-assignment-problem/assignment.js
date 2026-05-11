//Write code that shows an alert (with any message) when that number is greater than 0.7.
const randomNumber = Math.random();  
const randomNum = () => {
    if (randomNumber > 0.7) {
        // alert('number greater than 0.7!')
    }
};

// randomNum();

 //Create an array of numbers (any numbers of your choice) and loop through the array in two different ways - outputting the numbers inside of the loop.

const myArray = [1, 2, 3, 4, 5];

const loopArrOne = () => {
    for (let i = myArray[0]; i < myArray.length; i++) {
        console.log(i);
    }
}

const loopArrTwo = () => {
    const myArray = [1, 2, 3, 4, 5];
    let i = 0;
    while (i < myArray.length) {
        console.log(myArray[i])
        i++;
    }
}

// loopArrOne();
// loopArrTwo();

//Adjust one of the loops from the last task such that it actually starts at the end (last element) of the array and loops to the first element.

const loopArrOneBack = () => {
    for (let i = myArray.length - 1; i >= 0; i--) {
        console.log(myArray[i]);
    }
}

// loopArrOneBack();

//Create another random number (in a separate constant) and show an alert in two different scenarios: Both - are greater 0.7 OR at least one of the two is NOT greater than 0.2.

const randomNumberSecond = Math.random();

const checkRandomNums = () => {
    if (
        (randomNumber && randomNumberSecond > 0.7) ||
        (randomNumber < 0.2 || randomNumberSecond < 0.2)        
    ) {
        alert('final task!')
    }      
}

checkRandomNums()