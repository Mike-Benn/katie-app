import { describe, it, expect } from 'vitest';
import { calculateDifferentialPay } from '@/app/(protected)/paycheck/_lib/calculatePay/calculateDifferentialPay';

describe('calculateDifferentialPay', () => {
  it('calculates pay with hours and differential', () => {
    expect(calculateDifferentialPay({ hours: '2', differential: 1 })).toBe(2);
  });

  it('handles non-numbered hours strings', () => {
    expect(calculateDifferentialPay({ hours: 'abc', differential: 1 })).toBe(0);
  });
});
