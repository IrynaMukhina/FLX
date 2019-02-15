function getCurrentTime() {
  return new Date().toLocaleString('en-GB');
}

function userCard(key) {
  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];

  return {
    getCardOptions: function() {
      return {
        balance,
        historyLogs,
				key,
				transactionLimit
      }
    },
    putCredits: function(credit) {
      balance += credit;
      historyLogs.push({
      operationType: 'Received credit',
      credits: credit,
      operationTime: getCurrentTime()
			});
    },
    takeCredits: function(credit) {
      if(credit < balance && credit < transactionLimit) {
        balance -= credit;
        historyLogs.push({
        operationType: 'Withdrawal of credits',
        credits: credit,
        operationTime: getCurrentTime()
        });
      } else {
				console.log(`Error. You could not take a credit.
				 Transaction limit is exeeded or your balance is not enough`);
      }
    },
    setTransactionLimit: function(limit) {
      transactionLimit = limit;
      historyLogs.push({
      operationType: 'Transaction limit change',
      credits: limit,
      operationTime: getCurrentTime()
      });
    },
    transferCredits: function(credit, card) {
      let tax = 0.005;
      let creditWithTax = credit + credit * tax;
      if(creditWithTax < balance && creditWithTax < transactionLimit) {
        this.takeCredits(creditWithTax);
        card.putCredits(credit);
      } else {
				console.log('Transaction limit is exeeded or your balance is not enough for transfering');
			}
    }
  }
}

class UserAccount {
  constructor(name) {
    this.name = name;
		this.cards = [];
		this.maxKey = 3;
  }
  addCard() {
    let cardKey = this.cards.length + 1;
    if(cardKey > this.maxKey) {
      console.log('Number of created cards is exceeded')
    } else {
      const newUserCard = userCard(cardKey);
      this.cards.push(newUserCard);
    }
  }
  getCardByKey(key) {
    if(key < 1 || key > this.maxKey) {
      console.log('This key does not exist')
    } else {
      return this.cards[key - 1];
    }
  }
}