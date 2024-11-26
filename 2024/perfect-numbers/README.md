# Extra Perfect Numbers

## Description

An extra perfect number is a positive integer where both its first and last bits in binary representation are set to 1. This coding challenge focuses on finding all extra perfect numbers within a given range.

## Task

Implement a function that takes a positive integer `N` as input and returns an array containing all extra perfect numbers from 1 to N in ascending order.

## Examples

```typescript
extraPerfect(3); // returns [1, 3]
extraPerfect(7); // returns [1, 3, 5, 7]
extraPerfect(28); // returns [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]
```

## Binary Representation Examples

- 1 = 1 (binary: 1)
- 3 = 11 (binary: 11)
- 5 = 101 (binary: 101)
- 7 = 111 (binary: 111)

## Requirements

- Input will always be a positive integer
- Return array must be sorted in ascending order
- Numbers in the returned array must have their first and last binary digits as 1

## Implementation Notes

- The solution should efficiently check the binary representation of numbers
- Time complexity should be considered for large inputs
- TypeScript implementation is required

## Testing

Run the tests using:

```bash
npm test
```
