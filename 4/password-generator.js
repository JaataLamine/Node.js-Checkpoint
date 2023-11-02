const generator = require("generate-password");

// Define the properties of the password
const password = generator.generate({
  length: 20,
  numbers: true,
  symbols: "-!@#$%&*_",
  uppercase: true,
  strict: true,
});

// Display the password on the console
console.log(password);
