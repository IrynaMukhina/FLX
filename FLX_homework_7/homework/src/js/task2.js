let gameData = {
  maxRandomNum: 5,
  gameAttempts: 3,
  maxPrize: 10,
  currentPrize: 10,
  totalPrize: 0
}

let startGame = confirm('Do you want to play a game?');
if (startGame) {
  while (gameData.gameAttempts >= 1) {
    let randomNum = Math.floor(Math.random() * (gameData.maxRandomNum + 1));
    let userNum = prompt(
`Please enter a number from 0 to ${gameData.maxRandomNum}
Attempts left: ${gameData.gameAttempts}
Total prize: ${gameData.totalPrize}
Possible prize on current attempt: ${gameData.currentPrize}`);
    if (!userNum) {
      alert('You did not become a millionaire, but can.');
      break;
    }
    if (parseFloat(userNum) === randomNum) {
      gameData.totalPrize += gameData.currentPrize;
      gameData.gameAttempts = 3;
      gameData.maxRandomNum *= 2;
      gameData.currentPrize *= 3;
      let wantContinue = confirm(`Congratulation! Your prize is: ${gameData.totalPrize}
Do you want to continue?`);
      if (wantContinue) {
        gameData.maxPrize *= 3;
				gameData.currentPrize = gameData.maxPrize;
			} else {
				alert(`Thank you for a game. Your prize is: ${gameData.totalPrize}`);
				let playAgain = confirm('Do you wants to play again?');
				if (playAgain) {
					gameData.gameAttempts = 3;
					gameData.maxRandomNum = 5;
					gameData.maxPrize = 10;
					gameData.currentPrize = 10;
					gameData.totalPrize = 0;
        }
      }
    } else {
      gameData.gameAttempts--;
			gameData.currentPrize = Math.floor(gameData.currentPrize/2);
			if (gameData.gameAttempts === 0) {
				alert(`Thank you for a game. Your prize is: ${gameData.totalPrize}`);
				let playAgain = confirm('Do you wants to play again?');
				if (playAgain) {
					gameData.gameAttempts = 3;
					gameData.maxRandomNum = 5;
					gameData.maxPrize = 10;
					gameData.currentPrize = 10;
					gameData.totalPrize = 0;
				}
			}
    }
  }
} else {
  alert('You did not become a millionaire, but can.');
}