# Prize Draw

## Description

To participate in a prize draw, each person provides their first name. Each letter of a first name has a value, which is its rank in the English alphabet (A and a have rank 1, B and b rank 2, and so on).

The length of the first name is added to the sum of these ranks, resulting in a number we'll call "som."

An array of random weights is linked to the first names, and each "som" is multiplied by its corresponding weight to calculate a "winning number."

**Example:**

```
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The weight associated with PauL is 2, so PauL's winning number is 54 * 2 = 108.
```

Now, you can sort the first names in descending order of their winning numbers. When two people have the same winning number, sort them alphabetically by their first names.

## Task

**Parameters:**

- `st`: A string of first names separated by commas.
- `we`: An array of weights.
- `n`: A rank.

**Return:** The first name of the participant whose rank is `n` (ranks are numbered from 1).

**Example:**

```
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"
```

**Notes:**

- The weight array is at least as long as the number of names; it may be longer.
- If `st` is empty, return "No participants."
- If `n` is greater than the number of participants, return "Not enough participants."

**See Examples Test Cases for more examples.**
