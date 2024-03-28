// Create your game here!
const app = document.getElementById("app");
var header = document.createElement("h1");
header.textContent = "Welcome to Our Game!";
app.appendChild(header);
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 2;
var guessesHeader = document.createElement("header");
app.appendChild(guessesHeader);

const rows = 10;
const cols = 10;

const table = document.createElement("table");

for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");
  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");
    td.innerHTML = r * 10 + (c + 1);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

app.appendChild(table);

console.log(randomNumber);

function updateGuessesHeader() {
  guessesHeader.innerHTML =
    "<h2>Guesses Left: " + (maxAttempts - attempts) + "</h2>";
}
setTimeout(() => {
  do {
    const guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;
    if (guess < 1 || guess > 100) {
      window.alert("Invalid input. Please enter a number between 1 and 100.");
      continue;
    } else {
      if (guess === randomNumber) {
        alert(
          `Congratulations! You guessed the number in ${attempts} attempts.`
        );
        break;
      } else if (guess < randomNumber) {
        table.querySelectorAll("tr > td").forEach((el) => {
            if (el.textContent <= guess) {
              el.style.backgroundColor = "red";
              console.log(el.textContent);
            }
          });
        alert("Too low. Try again.");
        // table.querySelectorAll("tr > td").forEach((el) => {
        //   if (el.textContent <= guess) {
        //     console.log(el.textContent);
        //   }
        //   //console.log(el.textContent);
        // });

        // const table = document.querySelector("table");
        // const rows = Array.from(table.rows);
        // const element = rows.find((row) => {
        //   console.log(row.querySelectorAll("td").textContent, guess);

        //   return row.querySelector("td").textContent == guess;
        // });
        // element.querySelector("td").style.backgroundColor = "red";
      } else {
        table.querySelectorAll("tr > td").forEach((el) => {
            if (el.textContent >= guess) {
              el.style.backgroundColor = "red";
              console.log(el.textContent);
            }
          });
        alert("Too high. Try again.");

      }
      updateGuessesHeader();
    }
  } while (attempts < maxAttempts);
}, 3000);
