
function h2a(str) {
  hexString = str;
  strOut = '';
  for (x = 0; x < hexString.length; x += 2) {
    strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
  }
  return strOut;
}

console.log();
console.log();
console.log("#################################################################################################");
console.log("-------------------------------------------------------------------------------------------------");
console.log();
console.log(">>", h2a(process.argv[2]))
console.log();
console.log("-------------------------------------------------------------------------------------------------");
console.log("#################################################################################################");
console.log();
console.log();
