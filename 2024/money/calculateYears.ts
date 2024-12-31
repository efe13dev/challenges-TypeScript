export function calculateYears(
  principal: number,
  interest: number,
  tax: number,
  desired: number
): number {
  if (principal >= desired) return 0;

  let years = 0;
  let currentAmount = principal;

  while (currentAmount < desired) {
    const interestEarned = currentAmount * interest;
    const taxPaid = interestEarned * tax;
    currentAmount += interestEarned - taxPaid;
    years++;
  }

  return years;
}
