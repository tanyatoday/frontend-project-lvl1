import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// задание
const description = 'What is the result of the expression?';

// математические символы
const operators = ['+', '-', '*'];
const operator = operators[getRandomNum(2)];

const calcGame = () => {
  const task = () => {
    const randomNum1 = getRandomNum(50);
    const randomNum2 = getRandomNum(50);

    // вопрос
    const question = `${randomNum1} ${operator} ${randomNum2}`;

    // арифметические операции
    let result = 0;
    switch (operator) {
      case '+':
        result = randomNum1 + randomNum2;
        break;
      case '-':
        result = randomNum1 - randomNum2;
        break;
      case '*':
        result = randomNum1 * randomNum2;
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
