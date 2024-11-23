# Count Smileys Challenge 😊

Given an array (`arr`) as an argument, complete the function `countSmileys` that should return the total number of smiling faces.

## Rules for a Valid Smiling Face 🎯

A valid smiley face must follow these rules:

1. **Eyes** (required)

   - Valid characters: `:` or `;`

2. **Nose** (optional)

   - Valid characters: `-` or `~`

3. **Mouth** (required)
   - Valid characters: `)` or `D`

⚠️ No additional characters are allowed except for those mentioned above.

## Examples

### Valid Smileys

```
:)  :D  ;-D  :~)
```

### Invalid Smileys

```
;(  :>  :}  :]
```

## Test Cases

```typescript
countSmileys([':)', ';(', ';}', ':-D']); // should return 2
countSmileys([';D', ':-(', ':-)', ';~)']); // should return 3
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1
```

## Notes

- In case of an empty array return 0
- Input will always be valid (an array)
- Order of the face elements (eyes, nose, mouth) will always be the same
