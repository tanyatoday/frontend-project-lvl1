import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// задание
const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const task = () => {
    const num1 = getRandomNum(50);
    const num2 = getRandomNum(50);

    const question = `${num1} ${num2}`;

    const getGcd = (n1, n2) => {
      if (n1 % n2 === 0) {
        return n2;
      }

      return getGcd(n2, n1 % n2);
    };

    const result = getGcd(num1, num2).toString();

    return [question, result];
  };

  game(description, task);
};

export default gcdGame;
