import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

// задание
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// определяем простое ли число
function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const primeGame = () => {
  const prime = () => {
    const number = getRandomNum(50);
    const question = `${number}`;
    const result = isPrime(number) ? 'yes' : 'no';
    return [question, result];
  };
  game(description, prime);
};

export default primeGame;
