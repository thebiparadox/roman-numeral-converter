const userInput = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("result");

function validCheck(str) {
  // if input is blank, alert user
  if (userInput.value === "") {
    alert("Please enter a valid number");
    return;
  }

  // if input is equal to or more than 4000, alert user
  else if (userInput.value >= 4000) {
    alert("Please enter a number less than or equal to 3999");
    return;
  }

  //if input is less than 0, alert user
  else if (userInput.value <= 0) {
    alert("Please enter a number greater than or equal to 1");
    return;
  }

  // isValid
  else {
    return true;
  }
}

function processNumeral(result, symbol, symbolValue) {
  while (result.value >= symbolValue) {
    result.numeral += symbol;
    result.value -= symbolValue;
  }
}

function convertToRoman(number) {
  let result = {
    value: number,
    numeral: ""
  };

  processNumeral(result, "M", 1000);
  processNumeral(result, "CM", 900);
  processNumeral(result, "D", 500);
  processNumeral(result, "CD", 400);
  processNumeral(result, "C", 100);
  processNumeral(result, "XC", 90);
  processNumeral(result, "L", 50);
  processNumeral(result, "XL", 40);
  processNumeral(result, "X", 10);
  processNumeral(result, "IX", 9);
  processNumeral(result, "V", 5);
  processNumeral(result, "IV", 4);
  processNumeral(result, "I", 1);

  return result;
}

function updateResultMsg() {
  const numStr = userInput.value;
  const int = parseInt(numStr, 10);

  if (validCheck(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
}

// button functionality
button.addEventListener("click", updateResultMsg);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    updateResultMsg();
  }
});
