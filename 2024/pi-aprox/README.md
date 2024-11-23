# 🎯 PI Approximation Challenge

## 📝 Description

This challenge focuses on demonstrating the complexity of calculating decimals for irrational numbers with specific precision. We'll be approximating the number π (pi) using the Leibniz infinite series (1646–1716):

```math
π/4 = 1 - 1/3 + 1/5 - 1/7 + ...
```

> 🔗 [Learn more about Leibniz formula for π](http://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80)

## 🎯 Challenge Objective

The goal is to:

1. Calculate π using the Leibniz series
2. Count iterations needed for a given precision (epsilon)
3. Compare results with the language's Math::PI constant

## 🔍 Precision Criteria

- Input: precision value (epsilon)
- Stop condition: |calculated_pi - Math::PI| < epsilon
- The process tracks iterations until reaching desired precision

## 📤 Output

Your function should return:

- Number of iterations performed
- π approximation with 10 decimal places

## 💡 Example

```typescript
iter_pi(0.001)-- > [1000, 3.1405926538];
```

Given epsilon = 0.001, the function approximates π as 3.1405926538 after 1000 iterations.

## ⚠️ Important Note

Unfortunately, this series converges too slowly to be useful, as it takes over 300 terms to obtain a 2 decimal place precision. To obtain 100 decimal places of PI, it was calculated that one would need to use at least 10^50 terms of this expansion!
