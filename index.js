console.log("Hello World!");

//generateNumber(75);

let isB = false,
    isI = false,
    isN = false,
    isG = false,
    isO = false;

let BNumber, INumber, NNumber, GNumber, ONumber;

// function ; max is parameter
function generateNumber(max) {
    // Addition = +
    // Subtraction = -
    // Multiplication = *
    // Division = /
    // Remainder = %
    let randomNumber = Math.floor(Math.random() * max) + 1;

    // if ..... else if .... else
    // Gt >, GTE > =, LT <, LTE < =, EQ =, NEQ !=, AND &&, OR ||

    if (randomNumber <= 15) {
        isB = true; BNumber = randomNumber;
        console.log(`The Number ${randomNumber} is in B`);

    } else if (randomNumber >= 16 && randomNumber <= 30) {
        isI = true; INumber = randomNumber;
        console.log(`The Number ${randomNumber} is in I`);

    } else if (randomNumber >= 31 && randomNumber <= 45) {
        isN = true;  NNumber = randomNumber;
        console.log(`The Number ${randomNumber} is in N``);

    } else if (randomNumber >= 46 && randomNumber <= 60) {
        isG = true; GNumber = randomNumber;
        console.log('The Number' ${randomNumber} is in G);

    } else if (randomNumber >= 61 && randomNumber <= 75) {
        isO = true; ONumber = randomNumber;
        console.log('The Number' ${randomNumber} is in O);

    } else {
        console.log('The number is invalid');
    }

    if (isB == true && isI == true && isN == true && isG == true && isO == true) {
        console.log('BINGO!!');
        
        console.table({
            B: BNumber, 
            I: INumber, 
            N: NNumber, 
            G: GNumber, 
            O: ONumber,

        })

    }

    //return console.log(randomNumber);


// function generateNumber(max) {
// }
//Loops
let counter = 10;
// for (counter; counter > 0; counter -= 1) {
//    console.log('Counter is ${counter}');
//    generateNumber(75);
//    if (counter == 5) {
//        break;
//    }
// }

//while (counter > 0) {
//    console.log('Counter is ${counter}');
//    counter -= 1;
// }

while (
    
    isB == false ||
    isI == false ||
    isN == false ||
    isG == false ||
    isO == false 
    
    ) {
        generateNumber(75);

