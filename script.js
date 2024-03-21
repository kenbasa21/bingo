let generatedNumbers = [];

function generateRandomNumber() {
  let maxNumber = 75;

  try {
    // Generate unique numbers for each cell
    for (let i = 0; i < 25; i++) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
      } while (generatedNumbers.includes(randomNumber));

      generatedNumbers.push(randomNumber);
    }

    // Fill the cells with the generated numbers
    let cells = document.querySelectorAll('td');
    cells.forEach(function(cell, index) {
      cell.textContent = generatedNumbers[index];
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

window.onload = generateRandomNumber;