## Description

function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.

### Examples:

```
mean("London", data), 51.19(9999999999996)
variance("London", data), 57.42(833333333374)
```

### Notes:

if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

- Shell

1. Shell tests only variance.
2. In "function "variance" $1 is "data", $2 is "town".
