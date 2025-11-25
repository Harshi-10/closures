function createBankAccount(initialBalance = 0) {
  let balance = initialBalance; // private

  return {
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be positive");
        return;
      }
      balance += amount;
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
        return;
      }
      balance -= amount;
      console.log("Withdrawn:", amount);
      return balance;
    },
    getBalance() {
      console.log("Current balance:", balance);
      return balance;
    }
  };
}
