import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// определяем чётность числа
const isEven = (num) => num % 2 === 0;

// задание
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// игра
const evenGame = () => {
  const taskEven = () => {
    const number = getRandomNum(100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [`${number}`, correctAnswer];
  };
  game(description, taskEven);
};

export default evenGame;
