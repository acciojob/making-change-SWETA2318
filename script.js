// Function to make change
const makeChange = (cents) => {
  // Initialize coin values
  const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  // Initialize coin counts
  let quarters = Math.floor(cents / quarterValue);
  cents %= quarterValue;

  let dimes = Math.floor(cents / dimeValue);
  cents %= dimeValue;

  let nickels = Math.floor(cents / nickelValue);
  cents %= nickelValue;

  let pennies = cents;

  // Create and return the result object
  const result = {
    q: quarters,
    d: dimes,
    n: nickels,
    p: pennies,
  };

  return result;
};

// Prompt user for input
const userInput = prompt("Enter c: ");
const inputCents = parseInt(userInput);

// Display the result
alert(JSON.stringify(makeChange(inputCents)));