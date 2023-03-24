import readlineSync from 'readline-sync';

// генерация случайного числа
const getRandomInt = (max) => Math.floor(Math.random() * max);

// определяем чётность числа
const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const description = 'Answer "yes" if number is even, otherwise answer "no".';
  console.log(description);

  const number = getRandomInt(100);
  const question = `Question: ${number}`;
  console.log(question);
  const yourAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  if (yourAnswer === correctAnswer) {
    return console.log('Correct!');
  }
  return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

export default evenGame;
