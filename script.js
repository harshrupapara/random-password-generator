function generatePassword(length = document.getElementById("passLen").value) {
  let password = "";
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = length;

  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
  }

  for (let i = 0; i < passwordLength; i++) {
    password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
  }

  console.log(password);
  document.getElementById("passwordShow").value = password;
  return password;
}
