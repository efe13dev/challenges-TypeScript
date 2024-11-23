export function iterPi(epsilon: number): [number, number] {
  // Validate input
  if (epsilon <= 0) {
    console.warn('Epsilon must be a positive number');
  }

  let iterations = 0;
  let piApprox = 0;
  let denominator = 1;
  let sign = 1;

  // Using Leibniz formula: π/4 = 1 - 1/3 + 1/5 - 1/7 + ...
  while (true) {
    // Add next term in the series
    piApprox += sign * (1 / denominator);
    iterations++;

    // Calculate current PI approximation (multiply by 4 since series gives π/4)
    const currentPi = piApprox * 4;

    // Check if we've reached desired precision
    if (Math.abs(currentPi - Math.PI) < epsilon) {
      // Round to 10 decimal places as per requirements
      return [iterations, Number(currentPi.toFixed(10))];
    }

    // Prepare for next iteration
    denominator += 2;
    sign *= -1;
  }
}
