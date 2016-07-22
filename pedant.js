var pedant = {
  validate : function(text) {
    var MAX_QUOTE_LENGTH = 20;
    var punctuation = [ ',', '.', '!', ';', ';', '"' ];
    var quotes = [ '"', "'" ];

    // regex code modified from auto-generate from regex101.com
    var tooMuchWhitespace = /\s\s/g;
    var m;

    while ((m = tooMuchWhitespace.exec(text)) !== null) {
      showPrettyError(
          text, m.index,
          "WhitespaceError: too much whitespace at index " + m.index + ":");
    }

    for (var i = 0; i < text.length; i++) {
      // check for punctuation
      if (punctuation.indexOf(text[i]) > -1) {
        // no space after punctuation
        if ((text[i + 1] != " ") && (i != text.length - 1)) {
          showPrettyError(
              text, i,
              "PunctuationError: no space after punctuation at index " + i +
                  ":");
        }

        // check for too much punctuation, except for periods
        if ((punctuation.indexOf(text[i + 1]) > -1) && (i != text.length - 1) &&
            (text[i] != ".")) {
          showPrettyError(
              text, i,
              "PunctuationError: too much punctuation at index " + i + ":");
        }
      }

      // check for missing quotes
      if (quotes.indexOf(text[i]) > -1) {
        var k = 0;
        for (j = 1; j < text.length; j++) {
          if (quotes.indexOf(text[j]) == -1) {
            k++;
          }
        }

        if (k > MAX_QUOTE_LENGTH) {
          var error = showPrettyError(text, i);
          console.log(error[0]);
          console.log(error[1]);
          console.log("QuoteError: max quote length of " + MAX_QUOTE_LENGTH +
                      " exceeded at index " + j + " (quote started at index " +
                      i + "):");
          console.log(ERROR_SEPERATOR);
        }
      }
    }

    function showPrettyError(text, index, errorMessage) {
      var ERROR_SEPERATOR = "\n";

      var contextAmount = 8;
      var showContextSegment = "...";
      var errorContext = [
        showContextSegment +
            text.substr(index - contextAmount, index + contextAmount) +
            showContextSegment,
        pad(Math.max(index + 1 - contextAmount, index + 1), "^", " ")
            .substr(index - contextAmount - showContextSegment.length)
      ];
      console.log(errorContext[0]);
      console.log(errorContext[1]);

      console.log(errorMessage);
      console.log(ERROR_SEPERATOR);
      return errorContext;
      // http://stackoverflow.com/a/15660515
      function pad(width, string, padding) {
        return (width <= string.length) ? string
                                        : pad(width, padding + string, padding);
      }
    }
  }
};
module.exports = pedant;
