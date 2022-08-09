class Calculadora {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "," && this.currentOperand.includes(",")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.updateDisplay();
    if (operation === "x") {
      this.operation = "*";
    }
    console.log(operation);
  }

  compute() {
    let resultat;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        resultat = prev + current;
        break;
      case "-":
        resultat = prev - current;
        break;
      case "*":
        resultat = prev * current;
        break;
      case "÷":
        resultat = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = resultat;
    this.operation = undefined;
    this.previousOperand = "";
    console.log("computed");
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
  }
}
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculadora = new Calculadora(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculadora.appendNumber(button.innerText);
    calculadora.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculadora.chooseOperation(button.innerText);
  });
});

equalsButton.addEventListener("click", (button) => {
  calculadora.compute();
  calculadora.updateDisplay();
});
