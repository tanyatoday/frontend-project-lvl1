import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// задание
const description = 'What is the result of the expression?';

// математические символы
const operators = ['+', '-', '*'];
const randomOperator = operators[getRandomNum(2)];

// арифметические операции
const calculation = (operator, num1, num2) => {
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

  return result.toString();
};

const calcGame = () => {
  const task = () => {
    // вопрос
    const randomNum1 = getRandomNum(30);
    const randomNum2 = getRandomNum(30);
    const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
    const correctAnswer = calculation(randomOperator, randomNum1, randomNum2);

    return [question, correctAnswer];
  };

  game(description, task);
};

export default calcGame;
