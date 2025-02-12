# Web3 Utils

A utility library for simplifying common Web3 tasks like generating wallets.

## Installation

```bash
bun add @aliezzahn/web3-utils
```

## Usage

```js
import { WalletUtils } from "@aliezzahn/web3-utils";

// Generate a new wallet
const wallet = WalletUtils.generateWallet();
console.log(wallet);

// Restore a wallet from a mnemonic
const restoredWallet = WalletUtils.restoreWalletFromMnemonic("your mnemonic here");
console.log(restoredWallet);

// Restore a wallet from a private key
const restoredWalletFromPrivateKey = WalletUtils.restoreWalletFromPrivateKey("your private key here");
console.log(restoredWalletFromPrivateKey);
```