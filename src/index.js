import readlineSync from 'readline-sync';

const game = (description, runGame) => {
  // приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // задание
  console.log(description);

  // цикл вопросов
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = runGame();

    console.log(`Question: ${question}`);

    // ответ пользователя
    const yourAnswer = readlineSync.question('Your answer: ');

    // сравнение ответов
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
