var text = "hello,this is a bad sentence.";


var punctuation = ",.!;";

for (var i = 0; i < text.length; i++) {
  if (punctuation.indexOf(text[i]) > -1) {
    if ((text[i+1] != " ") && (i != text.length-1)) {
      console.log("Pedant: punctuation error at index " + (i+1) + ": " + text);
    }
  }
}
