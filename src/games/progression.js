import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// задание

const description = 'What number is missing in the progression?';

const getStep = () => {
  const step1 = getRandomNum(10);

  return step1 === 0 ? getStep() : step1;
};

const progressionGame = () => {
  const progression = () => {
    // массив для последовательности чисел
    const sequence = [];

    const step = getStep();

    const getStartNum = () => {
      const num = getRandomNum(100);
      const limitNum = num + step * sequence.length;

      if (limitNum > 100) {
        return getStartNum();
      }

      return num;
    };

    // первое число последовательности
    const startNum = getStartNum();

    // вся последовательность
    for (let i = 0, nextNum = startNum; i < 10; i += 1, nextNum += step) {
      sequence.push(nextNum);
    }

    const randomIndex = getRandomNum(sequence.length);
    const replacedNum = sequence[randomIndex];

    let result = replacedNum;
    sequence[randomIndex] = '..';

    const question = sequence.join(' ');

    // переводим правильный ответ в строку
    result = result.toString();

    return [question, result];
  };

  game(description, progression);
};

export default progressionGame;
