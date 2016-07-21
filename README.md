# Pedant
Find and fix bothersome punctuation and formatting errors in English text.

## Example output

`Input: The quick brown fox,jumped over the lazy dog`

```
punctuation error at index 16 (missing space after comma):
...ck brown,fox jumped over...
           ^
```

**Pedant is in beta right now, so a ton of stuff is a bit broken. These will get fixed as development continues.**

Pedant finds small errors that spell checkers, grammar checkers, and style correctors usually miss. For example, if I start a quote "like this, then forget to end it--writing my readme in the meantime--pedant will let me know.

Sometimes, you might hit the spacebar  twice, making an ugly `  ` double space. Or, when you hit. a period in the middle of a sentence, or a strange amount of periods the end.. or mix punctuation,.. Pedant will let you know about that too.

Or, when you forget to add a space after a punctuation mark,like this. Overall, these mistakes can add up, and make your writing look unprofessional.

How about parenthesis? Pedant will make sure you aren't nesting (the parenthesis (those bracket shaped things (which are very deep)) and also know that you didn't end the parenthesis at the end of this line.
