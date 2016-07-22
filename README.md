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

Sometimes, you might hit the spacebar  twice, making an ugly `  ` double space. Or, when you hit. a period in the middle of a sentence, or a strange amount of periods the end.. or mix punctuation,. Pedant will let you know about that too.

Or, when you forget to add a space after a punctuation mark,like this. Overall, these mistakes can add up, and make your writing look unprofessional.

How about parenthesis? Pedant will make sure you aren't nesting (the parenthesis (those bracket shaped things (which are very deep)) and also know that you didn't end the parenthesis at the end of this line.

## Roadmap

Here're some of the features that we would like to add to Pedant in the future:
- inconsistencies when a word is hyphenated and isn't (i.e merry-go-round and merry go round) and variants
- extra (or not enough) spaces after punctuation
- too many punctuation symbols!!!
- usage of -- instead of an em-dash or another suitable alternative
- unnecessarily nested parenthesis ((like this for example))
- parenthesis nested too deep (this sentence (yes, this one (the one that you are reading, right now) right here) is too  complex because there are too many parenthesises (those bracket shaped things))))). We're not writing lisp code.
- missing periods, when a word is Suddenly capitalized in one sentence then suddenly, it isn't
- extra spaces in front of lists, and extra spaces at the end of sentences, even if the next character isn't punctuation
- empty list items (or an extra empty list item)
- inconsistencies when adding a period at the end of a list item, and keeping the others without one.
- usage of different spellings of the same word (e.g. color and colour), with option to allow quoted material to bypass
- long quotes with missing author
- inconsistent capitalizatioN
- warnings for starting the list with the same word many times
- warnings when using the same list item multiple times in a row
- warnings when using the same list item multiple times in a row, with small changes
- warnings when adding or subtracting words from a quote*
- inconsistencies with the oxford comma, and with placing periods outside of parenthesises ). and .)
- warnings when addressing someone by Ms., Mrs., or Miz., and then using the opposite gender pronoun in the next sentence, (excluding non-gender pronouns like "they" or "them") without mentioning any other names and vice-versa
- warnings when addressing people by their first name if two or more people exist with the same first name but have different last names
- warnings when using the greek semicolon and regular semicolon together
- warnings in novel mode when typing a character's name, but differs by one letter from another character's and is only mentioned once
- suggestions for spelling out natural numbers smaller than 10, and when starting a sentence with a number
- support for other languages (e.g. French requires that a space is placed before punctuation like this !)
