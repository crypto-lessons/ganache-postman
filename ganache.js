const { exec } = require('child_process');
require('dotenv').config();

const MNEMONIC = process.env.MNEMONIC;
const ETHER_BALANCE = process.env.ETHER_BALANCE;
const NETWORK_ID = process.env.NETWORK_ID;
const GAS_PRICE = process.env.GAS_PRICE;
const GAS_LIMIT = process.env.GAS_LIMIT;
const BLOCK_TIME = process.env.BLOCK_TIME;
const PORT = process.env.PORT;

var strCommand = `ganache-cli -b=${BLOCK_TIME} -m="${MNEMONIC}" -e=${ETHER_BALANCE} -i ${NETWORK_ID} -g ${GAS_PRICE} -l ${GAS_LIMIT} -p ${PORT} -n -u 0 -u 1 -u 2 -u 3 -u 4 -u 5 -u 6 -u 7 -u 8 -u 9`;

var child = exec(strCommand,
  function (error) {
    if (error) {
      console.log(error.code);
    }
  }
);

child.stdout.on('data', function (data) {
  console.log(data.toString());
});
