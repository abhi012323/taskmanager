const bcrypt = require('bcryptjs');

async function testPassword() {
  const plainTextPassword = 'your_password';  // Replace with the actual plain text password
  const hashedPassword = '$2a$10$EGo/jKe4MFF1FZoQp/JvHuCdl1/jQB1PGBlRkgMKMpAgbo7XrgOtu';  // The hash stored in MongoDB

  const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
  console.log('Password match:', isMatch);
}

testPassword();
