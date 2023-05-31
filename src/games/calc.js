import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// задание
const description = 'What is the result of the expression?';

// математические символы
const operators = ['+', '-', '*'];
const randomOperator = operators[getRandomNum(2)];

const calcGame = () => {
  const task = () => {
    const num1 = getRandomNum(50);
    const num2 = getRandomNum(50);

    // вопрос
    const question = `${num1} ${randomOperator} ${num2}`;

    // арифметические операции
    let result = 0;
    switch (randomOperator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }
    result = result.toString();

    return [question, result];
  };
  game(description, task);
};

export default calcGame;
