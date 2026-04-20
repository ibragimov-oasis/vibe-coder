/**
 * Credit calculation constants and utilities for workflow apps
 */

/**
 * Credit cost multiplier for calculating total cost from base credit usage
 * Total cost = base credit usage * CREDIT_COST_MULTIPLIER
 */
export const CREDIT_COST_MULTIPLIER = 1.2;

/**
 * Credit earnings multiplier for calculating earnings from total credit usage
 * Earnings = total credit usage * CREDIT_EARNINGS_MULTIPLIER
 */
export const CREDIT_EARNINGS_MULTIPLIER = 0.2;

/**
 * Calculate total credit cost from base credit usage
 * @param baseCreditUsage - Base credit usage value
 * @returns Total credit cost (rounded up)
 */
export function calculateCreditCost(baseCreditUsage: number | null | undefined): number {
  const usage = baseCreditUsage ?? 0;
  return usage > 0 ? Math.ceil(usage * CREDIT_COST_MULTIPLIER) : 0;
}

/**
 * Calculate credit earnings from total credit usage
 * @param totalCreditUsage - Total credit usage value
 * @returns Credit earnings (rounded up)
 */
export function calculateCreditEarnings(totalCreditUsage: number | null | undefined): number {
  const usage = totalCreditUsage ?? 0;
  return usage > 0 ? Math.ceil(usage * CREDIT_EARNINGS_MULTIPLIER) : 0;
}
