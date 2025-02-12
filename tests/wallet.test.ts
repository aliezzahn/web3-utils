import { WalletUtils } from "../src";
import { describe, expect, test } from "bun:test";

describe("WalletUtils", () => {
  test("generateWallet should return a valid wallet", () => {
    const wallet = WalletUtils.generateWallet();
    expect(wallet.mnemonic).toBeString();
    expect(wallet.privateKey).toBeString();
    expect(wallet.publicKey).toBeString();
    expect(wallet.address).toBeString();
  });

  test("restoreWalletFromMnemonic should return a valid wallet", () => {
    const mnemonic =
      "test test test test test test test test test test test junk";
    const wallet = WalletUtils.restoreWalletFromMnemonic(mnemonic);
    expect(wallet.privateKey).toBeString();
    expect(wallet.publicKey).toBeString();
    expect(wallet.address).toBeString();
  });

  test("restoreWalletFromPrivateKey should return a valid wallet", () => {
    const privateKey =
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const wallet = WalletUtils.restoreWalletFromPrivateKey(privateKey);
    expect(wallet.publicKey).toBeString(); // Ensure publicKey is a string
    expect(wallet.address).toBeString();
  });
});