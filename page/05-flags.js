generateCollapsibleContainer("c5", "5. Flags");

renderRegexTest(
  "c5",
  `${caretSign} ${plusQuantifier} whitespaces <br> [Match as many as you can] [Match ^ at the beginning of each line not just the beginning of the string]`,
  /^\s+/gm,
  [
    "12 3",
    "1",
    "hello this is test",
    " NEW",
    "",
    "Kittens..!!!!	Kittens......sss!",
    "	b",
    "	b	b	t   c",
    "   w   first ones",
  ]
);

renderRegexTest(
  "c5",
  `${caretSign} 'Hello' followed by ${asteriskQuantifier} characters followed by ${dollerSign} 'bye!' - no flags`,
  /^Hello.*bye!$/,
  [
    "12 3",
    "1",
    "Hello this is test bye!",
    " NEW",
    "",
    "Hello bye!",
    "Hello, how are you? bye!",
    "Hello again... see you later bye!",
    "Hello123456bye!",
    "Hello🤖bye!",
    "Hello this is a full line bye!",
    "Hello...bye!",
    "Hello bye!\nHello something bye!",
    "Hello. Goodbye!\nHello, how are you doing today? Hope you're having o good one. Goodbye!\nHello! It's been great talking to you. Bye!\nHello, so good to see you. Seeya later!\nGoodbye!",
  ]
);

renderRegexTest(
  "c5",
  `${caretSign} 'Hello' followed by ${asteriskQuantifier} characters followed by ${dollerSign} 'bye!' <br> Match ^ at the beginning of each line not just the beginning of the string]`,
  /^Hello.*bye!$/m,
  [
    "12 3",
    "1",
    "Hello this is test bye!",
    " NEW",
    "",
    "Hello bye!",
    "Hello, how are you? bye!",
    "Hello again... see you later bye!",
    "Hello123456bye!",
    "Hello🤖bye!",
    "Hello this is a full line bye!",
    "Hello...bye!",
    "Hello bye!\nHello something bye!",
    "Hello. Goodbye!\nHello, how are you doing today? Hope you're having a good one. Goodbye!\nHello! It's been great talking to you. Bye!\nHello, so good to see you. Seeya later!\nGoodbye!",
  ]
);

renderRegexTest(
  "c5",
  `${caretSign} 'Hello' followed by ${asteriskQuantifier} characters followed by ${dollerSign} 'bye!' <br> [Match as many as you can] [Match ^ at the beginning of each line not just the beginning of the string]`,
  /^Hello.*bye!$/gm,
  [
    "12 3",
    "1",
    "Hello this is test bye!",
    " NEW",
    "",
    "Hello bye!",
    "Hello, how are you? bye!",
    "Hello again... see you later bye!",
    "Hello123456bye!",
    "Hello🤖bye!",
    "Hello this is a full line bye!",
    "Hello...bye!",
    "Hello bye!\nHello something bye!",
    "Hello. Goodbye!\nHello, how are you doing today? Hope you're having a good one. Goodbye!\nHello! It's been great talking to you. Bye!\nHello, so good to see you. Seeya later!\nGoodbye!",
  ]
);

renderRegexTest(
  "c5",
  `${caretSign} 'Hello' followed by ${asteriskQuantifier} characters followed by ${dollerSign} 'bye!' <br> [Match as many as you can] [Match ^ at the beginning of each line not just the beginning of the string] [Match case-insensitive]`,
  /^Hello.*bye!$/gim,
  [
    "12 3",
    "1",
    "Hello this is test bye!",
    " NEW",
    "",
    "Hello bye!",
    "Hello, how are you? bye!",
    "Hello again... see you later bye!",
    "Hello123456bye!",
    "Hello🤖bye!",
    "Hello this is a full line bye!",
    "Hello...bye!",
    "Hello bye!\nHello something bye!",
    "Hello. Goodbye!\nHello, how are you doing today? Hope you're having a good one. Goodbye!\nHello! It's been great talking to you. Bye!\nHello, so good to see you. Seeya later!\nGoodbye!",
  ]
);

renderRegexTest(
  "c5",
  `${caretSign} 'Hello' followed by ${asteriskQuantifier} characters followed by ${dollerSign} 'bye!' <br> [Match as many as you can] [Match ^ at the beginning of each line not just the beginning of the string] [Match case-insensitive (i)] [Make all as Single line (s)]`,
  /^Hello.*bye!$/gims,
  [
    "12 3",
    "1",
    "Hello this is test bye!",
    " NEW",
    "",
    "Hello bye!",
    "Hello, how are you? bye!",
    "Hello again... see you later bye!",
    "Hello123456bye!",
    "Hello🤖bye!",
    "Hello this is a full line bye!",
    "Hello...bye!",
    "Hello bye!\nHello something bye!",
    "Hello. Goodbye!\nHello, how are you doing today? Hope you're having a good one. Goodbye!\nHello! It's been great talking to you. Bye!\nHello, so good to see you. Seeya later!\nGoodbye!",
  ]
);

const ex19 = `
👉 Exercise 19<br>
Match he or hey once, with any capitalization. The he or hey may be anywhere in the string; only match the he / hey part.
<br>
hey should match hey<br>
SHE should match HE<br>
theY LOVE Regex! should match heY<br>
eyeglasses should not match<br>
`;
renderRegexTest("c5", `${ex19}`, /hey?/i, [
  `hey`,
  `SHE`,
  `theY LOVE Regex!`,
  `eyeglasses`,
]);
const ex20 = `
👉 Exercise 20<br>
Capture all the words that start with 'se' in a string (case insensitive).
<br>
She sells seashells by the seashore should match sells, seashells, seashore<br>
Sean, see if you can search for Selena. should match Sean, see, search, Selena<br>
Noses smell. should not match<br>
`;
renderRegexTest("c5", `${ex20}`, /\bse[\w]+/gi, [
  `She sells seashells by the seashore`,
  `Sean, see if you can search for Selena.`,
  `Noses smell.`,
]);
const ex21 = `
👉 Exercise 21<br>
Given this block of text (the last four lines of Robert Frost’s Stopping by the Woods on a Snowy Evening), find all the lines that end with 'eep.' (including the period). Capture the entire line.
<br>
'The woods are lovely, dark, and deep,<br>
But I have promises to keep,<br>
And miles to go before I sleep,<br>
And miles to go before I sleep.'<br>
should match And miles to go before I sleep.
`;
renderRegexTest("c5", `${ex21}`, /.+eep\./gm, [
  `The woods are lovely, dark, and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`,
]);
const ex22 = `
👉 Exercise 22<br>
Using the same poem lines as above, find only the first phrase on a single line that starts with 'to' and ends with 'eep'.
<br>
should match to keep
`;
renderRegexTest("c5", `${ex22}`, /to.+eep/, [
  `The woods are lovely, dark, and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`,
]);

const ex23 = `
👉 Exercise 23<br>
Using the same poem lines as above,<br> capture only the first word that starts with an 'a' (it could be a capital or lower case 'a').
<br>
should match are
`;
renderRegexTest("c5", `${ex23}`, /\ba\w+\b/si, [
  `The woods are lovely, dark, and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`,
]);
const ex24 = `
👉 Exercise 24<br>
Using the same poem lines as above,<br> find the first phrase that starts and ends with 'and' (case doesn’t matter). The phrase may span multiple lines.
<br>
should match <br>
'and deep,<br>
But I have promises to keep,<br>
And miles to go before I sleep,<br>
And<br>
'
`;
renderRegexTest("c5", `${ex24}`, /and.+and/si, [
  `The woods are lovely, dark, and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`,
]);
