# Playing with Digits 

## Description

Some numbers have funny properties. For example:

* `89` → 8¹ + 9² = 89 × 1
* `695` → 6² + 9³ + 5⁴ = 1390 = 695 × 2
* `46288` → 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 × 51

## Problem Statement

Given two positive integers `n` and `p`, we want to find a positive integer `k`, if it exists, such that the sum of the digits of `n` raised to consecutive powers starting from `p` is equal to `k × n`.

In other words, writing the consecutive digits of `n` as a, b, c, d..., we need to find if there exists an integer `k` such that:

```
(aᵖ + bᵖ⁺¹ + cᵖ⁺² + dᵖ⁺³ + ...) = n × k
```

If such a `k` exists, we return `k`. Otherwise, we return `-1`.

### Note
* `n` and `p` will always be strictly positive integers.

## Examples

1. `n = 89, p = 1`
   * Result: `1`
   * Because: 8¹ + 9² = 89 = 89 × 1

2. `n = 92, p = 1`
   * Result: `-1`
   * Because: No `k` exists where 9¹ + 2² equals 92 × k

3. `n = 695, p = 2`
   * Result: `2`
   * Because: 6² + 9³ + 5⁴ = 1390 = 695 × 2

4. `n = 46288, p = 3`
   * Result: `51`
   * Because: 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 × 51
