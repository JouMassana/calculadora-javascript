class Calculadora {
  constructor(previousOperationTextElement, currentOperationTextElement) {
    this.previousOperationTextElement = previousOperationTextElement;
    this.currentOperationTextElement = currentOperationTextElement;
    this.clear();
  }

  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperationTextElement.innerText = this.currentOperand;
  }
}
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperationTextElement = document.querySelector("[data-previous-operand]");
const currentOperationTextElement = document.querySelector("[data-current-operand]");

const calculadora = new Calculadora(previousOperationTextElement, currentOperationTextElement);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculadora.appendNumber(button.innerText);
    calculadora.updateDisplay();
  });
});
