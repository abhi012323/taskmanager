const bcrypt = require('bcryptjs');

async function createHash() {
  const password = 'azad1234';  // Replace with the plain text password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log('Hashed Password:', hash);
}

createHash();

