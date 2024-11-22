# Positions Average

## Description

Suppose you have 4 numbers: 0, 9, 6, 4 and 3 strings composed with them:

For example:
```
s1 = "466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"
s2 = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"
s3 = "449960, 699980, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"
```

Compare s1 and s2. We find 5 common positions out of ten.
Compare s1 and s3. We find 7 common positions out of ten.
Compare s2 and s3. We find 2 common positions out of ten.

So for the 3 strings we have 8 common positions out of 30 ie 0.2666... or 26.666...%

Given n substrings (n >= 2) in a string s our function pos_average will calculate the average percentage of positions that are the same between the (n * (n-1)) / 2 sets of substrings taken amongst the given n substrings. It can happen that some substrings are duplicate but since their ranks are not the same in s they are considered as different substrings.

The function returns the percentage formatted as a float with 10 decimals but the result is tested at 1e.-9 (see function assertFuzzy in the tests).

## Example
Given string s = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490" composing a set of n = 10 substrings (hence 45 combinations), pos_average returns 29.2592592593.

## Notes
- In a set the n substrings will have the same length ( > 0 ).
- You can see other examples in the "Sample tests".
