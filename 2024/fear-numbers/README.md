# 😱 Fear Numbers

## 🧠 Problem Description

I've got a unique mental condition - I have a specific fear of numbers that changes depending on the day of the week! Here's how my number phobia works:

| Day of Week | Numbers I Fear |
|-------------|---------------|
| Monday      | 12            |
| Tuesday     | > 95          |
| Wednesday   | 34            |
| Thursday    | 0             |
| Friday      | Even numbers  |
| Saturday    | 56            |
| Sunday      | 666 or -666   |

## 🎯 Challenge

Write a function that helps my doctor determine if I'll be afraid of a specific number on a given day.

### Function Parameters
- `day`: String (day of the week)
- `number`: Integer (number to test)

### Return Value
- `boolean`: `true` if I'm afraid of the number on that day, `false` otherwise

## 💡 Examples
```typescript
fearNumber("Monday", 12) // returns true
fearNumber("Monday", 13) // returns false
fearNumber("Friday", 14) // returns true
fearNumber("Sunday", 666) // returns true
fearNumber("Sunday", 42) // returns false
