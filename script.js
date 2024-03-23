function generateNumbers() {
    let bNumbers = generateColumnNumbers(1, 15, 'B');
    let iNumbers = generateColumnNumbers(16, 30, 'I');
    let nNumbers = generateColumnNumbers(31, 45, 'N');
    let gNumbers = generateColumnNumbers(46, 60, 'G');
    let oNumbers = generateColumnNumbers(61, 75, 'O');
  
    displayNumbers(bNumbers, iNumbers, nNumbers, gNumbers, oNumbers);
  }
  
  function generateColumnNumbers(minNumber, maxNumber, column) {
    let numbers = [];
    let excludeNumbers = [];
    
    let cells = document.querySelectorAll(`#bingoTable .${column}`);
    for (let i = 0; i < cells.length; i++) {
      let number;
      do {
        number = generateRandomNumber(minNumber, maxNumber);
      } while (excludeNumbers.includes(number));
      excludeNumbers.push(number);
      numbers.push(number);
    }
  
    return numbers;
  }
  
  function generateRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
  
  function displayNumbers(bNumbers, iNumbers, nNumbers, gNumbers, oNumbers) {
    let bCells = document.querySelectorAll('#bingoTable .B');
    let iCells = document.querySelectorAll('#bingoTable .I');
    let nCells = document.querySelectorAll('#bingoTable .N');
    let gCells = document.querySelectorAll('#bingoTable .G');
    let oCells = document.querySelectorAll('#bingoTable .O');
  
    bCells.forEach((cell, index) => cell.textContent = bNumbers[index]);
    iCells.forEach((cell, index) => cell.textContent = iNumbers[index]);
    nCells.forEach((cell, index) => cell.textContent = nNumbers[index]);
    gCells.forEach((cell, index) => cell.textContent = gNumbers[index]);
    oCells.forEach((cell, index) => cell.textContent = oNumbers[index]);
  }
  
  generateNumbers();