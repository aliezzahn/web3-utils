import { ethers } from "ethers";

export class WalletUtils {
  /**
   * Generate a new wallet with a mnemonic, private key, and public key.
   */
  static generateWallet(): {
    mnemonic: string;
    privateKey: string;
    publicKey: string;
    address: string;
  } {
    const wallet = ethers.Wallet.createRandom();
    return {
      mnemonic: wallet.mnemonic?.phrase || "", // Handle case where mnemonic might not exist
      privateKey: wallet.privateKey,
      publicKey: wallet.publicKey,
      address: wallet.address,
    };
  }

  /**
   * Restore a wallet from a mnemonic phrase.
   */
  static restoreWalletFromMnemonic(mnemonic: string): {
    privateKey: string;
    publicKey: string;
    address: string;
  } {
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    return {
      privateKey: wallet.privateKey,
      publicKey: wallet.publicKey,
      address: wallet.address,
    };
  }

  /**
   * Restore a wallet from a private key.
   */
  static restoreWalletFromPrivateKey(privateKey: string): {
    publicKey: string;
    address: string;
  } {
    const wallet = new ethers.Wallet(privateKey);
    return {
      publicKey: wallet.signingKey.publicKey, // Derive public key from signingKey
      address: wallet.address,
    };
  }
}