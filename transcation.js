function createBankAccountWithHistory(initialBalance = 0) {
  let balance = initialBalance; // private
  const transactionHistory = []; // private

  function record(type, amount) {
    transactionHistory.push({
      type,
      amount,
      balanceAfter: balance,
      time: new Date().toISOString()
    });
  }

  return {
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be positive");
        return;
      }
      balance += amount;
      record("deposit", amount);
      console.log("Deposited:", amount);
      return balance;
    },
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive");
        return;
      }
      if (amount > balance) {
        console.log("Insufficient balance");
        record("failed-withdrawal", amount);
        return;
      }
      balance -= amount;
      record("withdraw", amount);
      console.log("Withdrawn:", amount);
      return balance;
    },
    getBalance() {
      console.log("Current balance:", balance);
      return balance;
    },
    getTransactionHistory() {
      // return a shallow copy so caller can't mutate internal array directly
      return transactionHistory.slice();
    }
  };
}
