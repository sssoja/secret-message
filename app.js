let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();

secretMessage.push("to", "Program");

secretMessage[7] = "right";

secretMessage.shift();

secretMessage.unshift("Programming");

secretMessage.splice(6, 3, "know");

console.log(secretMessage.join(" "));

/* Should print "Programming is not about what you know first time, 
it is about what you can figure out. -2015, Chris Pine, Learn to Program" */
