var text = "'The quick brown,fox jumped over the lazy dog, he said, as he noticed that he forgot to close the quote.";
var MAX_QUOTE_LENGTH = 20;
var ERROR_SEPERATOR = "\n";
var punctuation = [',', '.', '!', ';', ';', '"'];
var quotes = ['"', "'"];
for (var i = 0; i < text.length; i++) {
  
    // check for punctuation
    if (punctuation.indexOf(text[i]) > -1) {
        if ((text[i + 1] != " ") && (i != text.length - 1)) {
            console.log("PunctuationError: no space after punctuation at index " + i + ":");
            var error = showPrettyError(text, i);
            console.log(error[0]);
            console.log(error[1]);
            console.log(ERROR_SEPERATOR);
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
            console.log("QuoteError: max quote length of " + MAX_QUOTE_LENGTH + " exceeded at index " + j + " (quote started at index " + i + "):");
            console.log(ERROR_SEPERATOR);
        }

    }
}

function showPrettyError(text, index) {
    var contextAmount = 8;
    var showContextSegment = "...";
    return [
        showContextSegment + text.substr(index - contextAmount, index + contextAmount) + showContextSegment,
        pad(Math.max(index + 1 - contextAmount, index + 1), "^", " ").substr(index - contextAmount - showContextSegment.length)
    ];

    //http://stackoverflow.com/a/15660515
    function pad(width, string, padding) {
        return (width <= string.length) ? string : pad(width, padding + string, padding);
    }

}
