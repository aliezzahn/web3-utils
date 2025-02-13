import { describe, it, expect } from 'bun:test';
import {
  weiToEther,
  etherToWei,
  weiToGwei,
  gweiToWei,
  gweiToEther,
  etherToGwei,
} from '../src';

describe('Unit Conversions', () => {
  it('should convert wei to ether', () => {
    expect(weiToEther('1000000000000000000')).toBe('1.0');
  });

  it('should convert ether to wei', () => {
    expect(etherToWei('1.0').toString()).toBe('1000000000000000000');
  });

  it('should convert wei to gwei', () => {
    expect(weiToGwei('1000000000')).toBe('1.0');
  });

  it('should convert gwei to wei', () => {
    expect(gweiToWei('1.0').toString()).toBe('1000000000');
  });

  it('should convert gwei to ether', () => {
    expect(gweiToEther('1000000000')).toBe('1.0');
  });

  it('should convert ether to gwei', () => {
    expect(etherToGwei('1.0')).toBe('1000000000.0');
  });
});