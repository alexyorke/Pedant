[![npm version](https://badge.fury.io/js/pedantjs.svg)](https://badge.fury.io/js/pedantjs)  [![travis cli](https://travis-ci.org/Decagon/pedant.svg)](https://travis-ci.org/Decagon/pedant/branches)  [![downloads](https://img.shields.io/npm/dm/pedantjs.svg)](https://www.npmjs.com/package/pedantjs) [![Join the chat at https://gitter.im/Decagon/pedant](https://badges.gitter.im/Decagon/pedant.svg)](https://gitter.im/Decagon/pedant?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Pedant

**Pedant** finds and fixes punctuation and formatting errors in English texts, that grammar checkers miss.

```javascript
pedant.validate('The quick brown fox,jumped over the lazy dog')
// punctuation error at index 16 (missing space after comma):
// ...ck brown,fox jumped over...
```

Pedant finds small errors that spell checkers, grammar checkers, and style correctors usually miss. For example, if I start a quote "like this, then forget to end it--writing my readme in the meantime--pedant will let me know.

Sometimes, you might hit the spacebar  twice, making an ugly `  ` double space. Or, when you hit. a period in the middle of a sentence, or a strange amount of periods the end.. or mix punctuation,. Pedant will let you know about that too.

Or, when you forget to add a space after a punctuation mark,like this. Overall, these mistakes can add up, and make your writing look unprofessional.

## Roadmap

Here are some of the features that we are developing to add to Pedant (subject to change.) **Note:** any of these features can be turned on or off, depending on your style of writing:
### Parenthesis
- unnecessarily nested parenthesis ((like this for example))
- parenthesis nested too deep (this sentence (yes, this one (the one that you are reading, right now) right here) is too complex because there are too many parenthesises (those bracket shaped things))))). We're not writing lisp code.
- parenthesis nested, but nested parenthesis are not square brackets
- placing periods outside of parenthesises ). and .)

### Punctuation and Spacing
- extra (or not enough) spaces after punctuation
- too many punctuation symbols!!!
- placing punctuation inside/outside of quote
- usage of -- instead of an em-dash or another suitable alternative
- warnings when using the greek semicolon and regular semicolon together
- warnings when using unprintable zero-width characters
- warnings when trying to center text by repeatedly using the spacebar (and option to automatically center)
- warnings when adding more than two line breaks after a paragraph

#### Inconsistencies
- inconsistencies when using the oxford comma
- inconsistencies when a word is hyphenated and isn't (i.e merry-go-round and merry go round) and variants
- when a word is Suddenly capitalized in one sentence not after a period, then suddenly it isn't
- extra spaces in front of lists
- extra spaces at the end of sentences, even if the next character isn't punctuation
- inconsistencies when adding a period at the end of a list item, and keeping the others without one.

### Quotes
- usage of different spellings of the same word (e.g. color and colour), with option to allow quoted material to bypass
- long quotes with missing author
- warnings when adding or subtracting words from a quote after it has been written, without using the proper [inserted-word-here] notation*

### Lists
- empty list items (or an extra empty list item)
- inconsistent capitalizatioN
- warnings for starting the list with the same word many times
- warnings when using the same list item multiple times in a row
- warnings when using the same list item multiple times in a row, with small changes

### Fonts
- warnings when bolding, italizing, or underlining an entire word, except the last or first **lette**r, or when it extends past the word into the space after it, **like this w**hich can be annoying

### Mixed Languages and Cultures
- support for other languages (e.g. French requires that a space is placed before punctuation like this !)
- errors when using English quotes around a pure French or other language quote
- warnings when specifying the type of currency, but using an incorrect symbol (it cost $10 pounds) and suggestions to use the currency symbol instead of the word, if both are used

### People and Books
- warnings when addressing someone by Ms., Mrs., or Miz., and then using the opposite gender pronoun in the next sentence, (excluding non-gender pronouns like "they" or "them") without mentioning any other names and vice-versa
- warnings when addressing people by their first name if two or more people exist with the same first name but have different last names
- warnings in novel mode when typing a character's name, but differs by one letter from another character's and is only mentioned once

### Mathematical Notation and Precision
- suggestions for spelling out natural numbers smaller than 10, and when starting a sentence with a number
- warnings when mathematical notation contains (possibly) ambigious order of operations (e.g. 4*5+2-9/2)
- warnings when mixing precisions with currency values (e.g. it cost $10 and the other thing cost $20.00), since both could be expressed with no cent values, since they are both zero
