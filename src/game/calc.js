import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// задание
const description = 'What is the result of the expression?';

const calcGame = () => {
  const task = () => {
    const num1 = getRandomNum(50);
    const num2 = getRandomNum(50);

    // математические символы
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNum(2)];

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
