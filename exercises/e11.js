// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  const withdrawals = [];
  //FIRST ITERATE THROUGH OBJECTS
  for (const value of array) {
  //IF NO WITHDRAWAL EXISTS SET IT TO 0 
    if (value['withdrawals']) {
      //ITERATE THROUGH WITHDRAWALS ARRAY
      let withdrawalSum = 0;
      for ( const withdrawal of value['withdrawals']) {
        withdrawalSum += withdrawal;
      }

      withdrawals[withdrawals.length] = withdrawalSum;
    } else {
      withdrawals[withdrawals.length] = 0;
    }
  }
  return withdrawals;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
