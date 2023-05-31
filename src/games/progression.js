import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// задание

const description = 'What number is missing in the progression?';

const getStep = () => {
  const step1 = getRandomNum(10);

  return step1 === 0 ? getStep() : step1;
};

const getStartNum = () => {
  const sequence = [];

  const step = getStep();
  const num = getRandomNum(100);
  const limitNum = num + step * sequence.length;

  if (limitNum > 100) {
    return getStartNum();
  }

  return num;
};

const progressionGame = () => {
  const progression = () => {
    const sequence = [];
    const step = getStep();

    // первое число последовательности
    const startNum = getStartNum();

    // вся последовательность
    const sequenceGeneration = () => {
      for (let i = 0, nextNum = startNum; i < 10; i += 1, nextNum += step) {
        sequence.push(nextNum);
      }
    };

    sequenceGeneration();

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
