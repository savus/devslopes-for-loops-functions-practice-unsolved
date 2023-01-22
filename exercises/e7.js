// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  const client = [];
  let leastBalance = 0;
  
  //GET LARGEST VALUE FIRST TO STAY ABOVE 0 AND LOWEST BALANCE
  for (const value of array) {
    if (leastBalance < value['balance']) {
      leastBalance = value['balance'];
    }
  }

  //REDUCE LARGEST BALANCE TO LEAST BALANCE WHILE KEEPING ABOVE 0
  for (const value of array) {
    if( leastBalance > value['balance'] && value['balance'] > 0) {
      client[0] = value;
    }
  }

  return client;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
