import { formatEther, parseEther, formatUnits, parseUnits } from 'ethers';

export function weiToEther(wei: string | bigint): string {
  return formatEther(wei);
}

export function etherToWei(ether: string | number): bigint {
  return parseEther(ether.toString());
}

export function weiToGwei(wei: string | bigint): string {
  return formatUnits(wei, 'gwei');
}

export function gweiToWei(gwei: string | number): bigint {
  return parseUnits(gwei.toString(), 'gwei');
}

export function gweiToEther(gwei: string | number): string {
  const wei = gweiToWei(gwei);
  return weiToEther(wei);
}

export function etherToGwei(ether: string | number): string {
  const wei = etherToWei(ether);
  return weiToGwei(wei);
}