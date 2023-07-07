// to store the all number and caluclation
//  information to save that using class &
//   constructor which is takes all
//    caluclation & inputs

class Caluclator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = '';
    this.nextOperand = '';
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {}
  compute() {}
  updateDisplayedState() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const delteButton = document.querySelector('[data-delete]');
const allclearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

// to display the data
const caluclator = new Caluclator(
  previousOperandTextElement,
  currentOperandTextElement
);
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    caluclator.appendNumber(button.innerText);
    caluclator.updateDisplayedState();
  });
});
