# Golf Score Calculator

## Problem Description

I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.

## Examples

### Example 1

If I took 7 shots on a hole where the par was 5:

```
Score = 7 - 5 = 2
```

### Example 2

If I got a hole-in-one where the par was 4:

```
Score = 1 - 4 = -3
```

Doing all this math by hand is really hard! Can you help make my life easier?

## Task Requirements

Complete the function which accepts two strings and calculates the golf score of a game:

- Both strings will be of length 18
- Each character in the string will be a number between 1 and 9 inclusive
- First string represents the par values for each hole
- Second string represents your actual strokes for each hole
