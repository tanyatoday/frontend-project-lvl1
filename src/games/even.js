import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// определяем чётность числа
const isEven = (num) => num % 2 === 0;

// задание
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// игра
const evenGame = () => {
  const taskEven = () => {
    const randomNum = getRandomNum(100);
    const question = `${randomNum}`;
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  game(description, taskEven);
};

export default evenGame;
