# Ganache-cli and Postman Collection

A simple example of ganache cli and postman for RPC requests to simulating an ethereum blockchain network.


## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.


## Install

    $ yarn install


## Configure

Create or copy a `.env` file in the root of your project

    $ cp .env.example .env


Generate a random mnemonic to initiate ganache-cli with same accounts

    $ yarn wallet


Change variables from `.env` file

```sh
NETWORK_ID=
PORT=
GAS_PRICE=
GAS_LIMIT=
BLOCK_TIME=
ETHER_BALANCE=
MNEMONIC="PASTE YOUR GENERATED MNEMONIC HERE"
```


## Running the project

    $ yarn ganache