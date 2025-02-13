# Web3 Utils 🚀

Welcome to **Web3 Utils**! This is a beginner-friendly utility library designed to simplify common Web3 tasks, such as generating wallets, signing messages, and interacting with smart contracts. Whether you're new to Web3 or an experienced developer, this library will make your life easier.

---

## Table of Contents
1. [What is Web3 Utils?](#what-is-web3-utils)
2. [Installation](#installation)
   - [From GitHub Packages](#from-github-packages)
   - [From npm (Optional)](#from-npm-optional)
3. [Usage](#usage)
   - [Generate a Wallet](#generate-a-wallet)
   - [Sign and Verify a Message](#sign-and-verify-a-message)
   - [Interact with a Smart Contract](#interact-with-a-smart-contract)
4. [FAQs](#faqs)
5. [Contributing](#contributing)
6. [License](#license)

---

## What is Web3 Utils?

Web3 Utils is a JavaScript library that helps you perform common Web3 tasks with minimal code. Here's what it can do:
- **Generate Wallets**: Create a new wallet with a mnemonic, private key, and public key.
- **Sign and Verify Messages**: Sign messages with a private key and verify the signature.
- **Interact with Smart Contracts**: Easily connect to and interact with Ethereum smart contracts.

---

## Installation

To use Web3 Utils in your project, follow the steps below.

### From GitHub Packages

This package is published to **GitHub Packages**. To install it:

1. **Create a `.npmrc` file**:
   In your project folder, create a file named `.npmrc` and add the following line:
   ```
   @aliezzahn:registry=https://npm.pkg.github.com
   ```

3. **Install the package**:
   Run the following command to install Web3 Utils:
   ```bash
   # Using Bun
   bun add @aliezzahn/web3-utils
   
   # Using npm
   npm install @aliezzahn/web3-utils
   
   # Using yarn
   yarn add @aliezzahn/web3-utils
   
   # Using pnpm
   pnpm add @aliezzahn/web3-utils
   ```

### From NPM (or Bun)

If the package is published to npm, you can install it directly:
```bash
npm install @aliezzahn/web3-utils
```

---

## Usage

Once the package is installed, you can start using it in your project. Here are some examples:

### Generate a Wallet

Generate a new wallet with a mnemonic, private key, and public key:
```javascript
import { WalletUtils } from "@aliezzahn/web3-utils";

const wallet = WalletUtils.generateWallet();
console.log("Mnemonic:", wallet.mnemonic);
console.log("Private Key:", wallet.privateKey);
console.log("Public Key:", wallet.publicKey);
console.log("Address:", wallet.address);
```

### Converting between units

Converting between units (wei, gwei, ether).

```typescript
import {
  weiToEther,
  etherToWei,
  weiToGwei,
  gweiToWei,
  gweiToEther,
  etherToGwei,
} from '@aliezzahn/web3-utils';
```

---

### Examples

#### Convert Wei to Ether

```typescript
const etherValue = weiToEther('1000000000000000000'); // 1.0
console.log(etherValue); // Output: 1.0
```

#### Convert Ether to Wei

```typescript
const weiValue = etherToWei('1.0'); // 1000000000000000000n (bigint)
console.log(weiValue.toString()); // Output: 1000000000000000000
```

#### Convert Wei to Gwei

```typescript
const gweiValue = weiToGwei('1000000000'); // 1.0
console.log(gweiValue); // Output: 1.0
```

#### Convert Gwei to Wei

```typescript
const weiValue = gweiToWei('1.0'); // 1000000000n (bigint)
console.log(weiValue.toString()); // Output: 1000000000
```

#### Convert Gwei to Ether

```typescript
const etherValue = gweiToEther('1000000000'); // 1.0
console.log(etherValue); // Output: 1.0
```

#### Convert Ether to Gwei

```typescript
const gweiValue = etherToGwei('1.0'); // 1000000000.0
console.log(gweiValue); // Output: 1000000000.0
```

---

## API Reference

### Functions

#### `weiToEther(wei: string | bigint): string`
Converts a value in **wei** to **ether**.

#### `etherToWei(ether: string | number): bigint`
Converts a value in **ether** to **wei**.

#### `weiToGwei(wei: string | bigint): string`
Converts a value in **wei** to **gwei**.

#### `gweiToWei(gwei: string | number): bigint`
Converts a value in **gwei** to **wei**.

#### `gweiToEther(gwei: string | number): string`
Converts a value in **gwei** to **ether**.

#### `etherToGwei(ether: string | number): string`
Converts a value in **ether** to **gwei**.

---


### Sign and Verify a Message (Soon)

Sign a message with a private key and verify the signature:
```javascript
const privateKey = "0xYourPrivateKey"; // Replace with your private key
const message = "Hello, Web3!";

// Sign the message
const signature = await WalletUtils.signMessage(privateKey, message);
console.log("Signature:", signature);

// Verify the signature
const recoveredAddress = await WalletUtils.verifyMessage(message, signature);
console.log("Recovered Address:", recoveredAddress);
```

### Interact with a Smart Contract (Soon)

Connect to a smart contract and call a function:
```javascript
import { ethers } from "ethers";
import { WalletUtils } from "@aliezzahn/web3-utils";

// Set up a provider (e.g., Infura)
const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

// Define the contract address and ABI
const contractAddress = "0xYourContractAddress"; // Replace with your contract address
const abi = ["function example() view returns (uint256)"]; // Replace with your contract ABI

// Get the contract instance
const contract = WalletUtils.getContract(contractAddress, abi, provider);

// Call a contract function
const result = await contract.example();
console.log("Result:", result);
```

---

## FAQs

### 1. What is a GitHub Personal Access Token (PAT)?
A PAT is a secure way to authenticate with GitHub services. It acts like a password but with specific permissions (e.g., read packages).

### 2. Do I need an npm account?
No, you don’t need an npm account to install this package from GitHub Packages. However, if the package is published to npm, you can install it directly using npm.

### 3. How do I generate a private key?
You can use the `WalletUtils.generateWallet()` method to generate a new wallet, which includes a private key.

### 4. What is an ABI?
An ABI (Application Binary Interface) is a JSON file that defines how to interact with a smart contract. It includes details about the contract's functions and parameters.

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

If you find this library useful, consider giving it a ⭐️ on [GitHub](https://github.com/aliezzahn/web3-utils). For any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/aliezzahn/web3-utils/issues).

---

## Author

- **Ali Ezzahn**  
  GitHub: [@aliezzahn](https://github.com/aliezzahn)  
  Email: [aliezzahn@gmail.com](aliezzahn@gmail.com)

---

Enjoy using **Web3 Utils**! 🚀
---