var pedant = {
  validate : function(lines) {
    var inQuote = false;
    var currQuoteLength = 0;
    var quoteStartIndex = 0;
    var MAX_QUOTE_LENGTH = 20;
    var MAX_PUNCTUATION_LENGTH = 3;
    var punctuation = [ ',', '.', '!', ';', ';', '"' ];
    var punctuationAmount = 0;
    var punctuationStartIndex = 0;
    var quotes = [ '"', "'" ];
    var contractionEndings =
        [ 't', 's', 'm', 're', 's', 've', 'd', 'll', 'em' ];

    function printError(msg, type, line, col) {
      console.log(msg + ", " + type + ", line " + (line + 1) + ", col " +
                  (col + 1));
    }

    lines = lines.split("\n");
    for (var j = 0; j < lines.length; j++) {
      text = lines[j];
      for (var i = 0; i < text.length; i++) {
        if (punctuation.indexOf(text[i]) > -1) {
          if (punctuationAmount == 0) {
            punctuationStartIndex = i;
          }
          punctuationAmount++;

          if ((text[i + 1] != ")") && (text[i + 1] != " ")) {
            printError("no space after punctuation", "PunctuationError", j,
                       punctuationStartIndex);
          }

        } else {
          punctuationStartIndex = 0;
          punctuationAmount = 0;
        }
        if (punctuationAmount > MAX_PUNCTUATION_LENGTH) {
          printError("too much punctuation", "PunctuationError", j,
                     punctuationStartIndex);

          punctuationStartIndex = 0;
          punctuationAmount = 0;
        }

        // on a space
        if (" ".indexOf(text[i]) > -1) {
          if (((text[i + 1] == " ") || (text[i + 1] == ")"))) {
            printError("too much whitespace", "WhitespaceError", j, i);
          }
        }
        // found a quote that didn't end after sentence
        if ((text[i + 1] == undefined) && inQuote) {
          inQuote = false;
          printError("unclosed quote", "QuoteError", j, quoteStartIndex);
        }

        // okay, we found a quote
        if (quotes.indexOf(text[i]) > -1) {
          // proper contraction detection using xor
          var a = ((contractionEndings.indexOf(text[i + 1]) == -1));
          var b = text[i] == "'";
          var xor = (a ? !b : b);
          if ((!inQuote) && !xor) {
            quoteStartIndex = i;
            inQuote = true;
          } else {
            if ((i - quoteStartIndex) > MAX_QUOTE_LENGTH) {
              printError("quote too long", "QuoteError", j, quoteStartIndex);
              inQuote = false;
            }
          }
        }
      }
    }
  }
};

module.exports = pedant;
