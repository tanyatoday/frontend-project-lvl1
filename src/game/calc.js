import game from '../index.js';
import getRandomInt from '../getRandomInt.js';

// задание
const description = 'What is the result of the expression?';

const calcGame = () => {
  const task = () => {
    const num1 = getRandomInt(50);
    const num2 = getRandomInt(50);

    // математические символы
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(2)];

    // вопрос
    const question = `${num1} ${operator} ${num2}`;

    // арифметические операции
    let result = 0;
    switch (operator) {
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
