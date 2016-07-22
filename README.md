# Pedant

**Pedant** finds and fixes punctuation and formatting errors in English texts, that grammar checkers miss.

```javascript
pedant.validate('The quick brown fox,jumped over the lazy dog')
// punctuation error at index 16 (missing space after comma):
// ...ck brown,fox jumped over...
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
- warnings when adding or subtracting words from a quote after it has been written, without using the proper [inserted-word-here] notation*
- inconsistencies with the oxford comma, and with placing periods outside of parenthesises ). and .)
- warnings when addressing someone by Ms., Mrs., or Miz., and then using the opposite gender pronoun in the next sentence, (excluding non-gender pronouns like "they" or "them") without mentioning any other names and vice-versa
- warnings when addressing people by their first name if two or more people exist with the same first name but have different last names
- warnings when using the greek semicolon and regular semicolon together
- warnings in novel mode when typing a character's name, but differs by one letter from another character's and is only mentioned once
- suggestions for spelling out natural numbers smaller than 10, and when starting a sentence with a number
- support for other languages (e.g. French requires that a space is placed before punctuation like this !)
- warnings when bolding, italizing, or underlining an entire word, except the last or first **lette**r, or when it extends past the word into the space after it
- errors when using English quotes around a pure French or other language quote
- warnings when trying to center text by repeatedly using the spacebar (and option to automatically center)
- warnings when mathematical notation contains (possibly) ambigious order of operations (e.g. 4*5+2-9/2)
- warnings when specifying the type of currency, but using an incorrect symbol (it cost $10 pounds) and suggestions to use the currency symbol instead of the word, if both are used
- warnings when mixing precisions with currency values (e.g. it cost $10 and the other thing cost $20.00), since both could be expressed with no cent values, since they are both zero
- suggestions to use the phrase "and vice-versa" when a sentence is repeated twice, the other fragment being a reverse of the original. Example: He could buy the apple and sell the orange, or buy the orange and sell the apple.
- expansions of words which can be shortened using parentheses, and inconsistencies arising from them. Example: James could buy the house with/without the extra chair, becomes James could buy the house with(out) the extra chair.
