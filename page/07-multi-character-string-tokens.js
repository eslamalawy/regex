generateCollapsibleContainer(
  "c7",
  "7. Multi-Character Strings Quantifiers and Options"
);

renderRegexTest(
  "c7",
  `Match 'kittens' ${pipeSign} 'foals' ${pipeSign} 'ducklings'`,
  /kittens|foals|ducklings/gm,
  [
    "hegre this is test",
    "",
    "I love kittens and puppies.",

    "The foals are running in the field.",

    "We saw some ducklings near the pond.",

    "Kittens are so cute when they play.",

    "Did you see the foals yesterday?",

    "The little ducklings waddled across the lawn.",

    "She has a collection of kitten toys.",

    "Foals often follow their mothers closely.",

    "Ducklings are often seen in the spring.",

    "I adopted two kittens last week.",
  ]
);

renderRegexTest(
  "c7",
  `Match 'I love kittens' ${pipeSign} 'foals' ${pipeSign} 'ducklings'`,
  /I love kittens|foals|ducklings/gm,
  [
    "hegre this is test",
    "",
    "I love kittens and puppies.",

    "The foals are running in the field.",

    "We saw some ducklings near the pond.",

    "Kittens are so cute when they play.",

    "Did you see the foals yesterday?",

    "The little ducklings waddled across the lawn.",

    "She has a collection of kitten toys.",

    "Foals often follow their mothers closely.",

    "Ducklings are often seen in the spring.",

    "I adopted two kittens last week.",
  ]
);

renderRegexTest(
  "c7",
  `Match 'I love (kittens' ${pipeSign} 'foals' ${pipeSign} 'ducklings')`,
  /I love (kittens|foals|ducklings)/gm,
  [
    "hegre this is test",
    "",
    "I love kittens and puppies.",

    "The foals are running in the field.",

    "We saw some ducklings near the pond.",

    "Kittens are so cute when they play.",

    "Did you see the foals yesterday?",

    "The little ducklings waddled across the lawn.",
    "Can you believe how much I love foals",
    "She and I love ducklings.",
  ],
  true
);

renderRegexTest(
  "c7",
  `Match  ${plusQuantifier} of (kittens)`,
  /(kittens)+/gm,
  [
    "hegre this is test",
    "",
    "I love kittens and puppies.",

    "The foals are running in the field.",

    "We saw some ducklings near the pond.",

    "kittens are so cute when they play as a group of kittens.",

    "Did you see the foals yesterday?",

    "The little ducklings waddled across the lawn.",
    "Can you believe how much I love kittenskittenskittens kittens",
    "She and I love ducklings.",
  ],
  true
);

renderRegexTest(
  "c7",
  `Match 'kitten' with ${plusQuantifier} of 's' character`,
  /kittens+/gm,
  [
    "hegre this is test",
    "",
    "I love kittens and puppies.",

    "The foals are running in the field.",

    "We saw some ducklings near the kitten.",

    "kittenssss are so cute when they play as a group of kittens.",

    "Did you see the foals yesterday?",

    "The little ducklings waddled across the lawn.",
    "Can you believe how much I love kittenssssssssssssssssskittenskittens kittens",
    "She and I love ducklings.",
  ]
);

renderRegexTest(
  "c7",
  `Match ${plusQuantifier} of 'k,i,t,e,n,s' characters`,
  /[kittens]+/gm,
  [
    "hegre this is test",
    "",
    "I love kittens and puppies.",

    "The foals are running in the field.",

    "We saw some ducklings near the kitten.",

    "kittenssss are so cute when they play as a group of kittens.",

    "Did you see the foals yesterday?",

    "The little ducklings waddled across the lawn.",
    "Can you believe how much I love kittenssssssssssssssssskittenskittens kittens",
    "She and I love ducklings.",
  ]
);

renderRegexTest(
  "c7",
  `Match ${plusQuantifier} of non-overlapping W0W or WOW`,
  /(W[0O]W)+/gm,
  [
    "hegre this is test",
    "",
    "I love kittens and puppies. WoW",
    "W0W",
    "WOW",
    "W0W W0W",
    "WOWW0W",
    "W0W WOW W0W",
    "W0WW0W",
    "W0W W0W W0W",
    "Hello W0W there!",
    "WOWW0WW0W",
    "W0WsomethingelseW0W",
    "WOOW",
    "WOOOOOW",
    "WO0W",
  ],
  true
);

renderRegexTest(
  "c7",
  `Match one option of the following <br>( ${questionMarkQuantifier} of '1' followed by any digit [0-9] ${pipeSign} '2' followed by any digit [0-3] ) <br>Followed by colon ':' <br> Followed by any digit [0-5] Followed by any digit [0-9]`,
  /(1?\d|2[0-3]):[0-5]\d/gm,
  [
    "hegre this is test",
    "",
    "00:00",
    "09:45",
    "9:45",
    "24:00",
    "14:30",
    "23:59",
    "19:01",
    "12:60",
    "01:09",
    "25:30",
    "12:59",
    "99:99",
    "03:10",
    "9:5",
    "11:59",
    "13:70",
    "20:20",
  ],
  true
);

renderRegexTest(
  "c7",
  `Match ${caretSign} one option of the following <br>( any digit [0-1] followed by any digit [0-9] ${pipeSign} '2' followed by any digit [0-3] ) <br>Followed by colon ':' <br> Followed by any digit [0-5] <br> ${dollerSign} any digit [0-9]`,
  /^([01]\d|2[0-3]):[0-5]\d$/gm,
  [
    "hegre this is test",
    "",
    "00:00",
    "09:45",
    "9:45",
    "24:00",
    "14:30",
    "23:59",
    "19:01",
    "12:60",
    "01:09",
    "25:30",
    "12:59",
    "99:99",
    "03:10",
    "9:5",
    "11:59",
    "13:70",
    "20:20",
  ],
  true
);

renderRegexTest(
  "c7",
  `Match ${caretSign} one option of the following <br>( <br> one option of the inner group(${questionMarkQuantifier} of 1 ${pipeSign} 0) followed by any digit [0-9] <br>${pipeSign}<br> '2' followed by any digit [0-3] <br>) <br>Followed by colon ':' <br> Followed by any digit [0-5] <br> ${dollerSign} any digit [0-9]`,
  /^((1?|0)\d|2[0-3]):[0-5]\d$/gm,
  [
    "hegre this is test",
    "",
    "00:00",
    "09:45",
    "9:45",
    "24:00",
    "14:30",
    "23:59",
    "19:01",
    "12:60",
    "01:09",
    "25:30",
    "12:59",
    "99:99",
    "03:10",
    "9:5",
    "11:59",
    "13:70",
    "20:20",
  ],
  true
);

const ex29 = `
👉 Exercise 29<br>
Match strings that contain either puppy or puppies (case sensitive)
<br>
'puppy' should match<br>
'puppies' should match<br>
'puppies and kittens' should match<br>
'kittens' should not match<br>
'
`;
renderRegexTest("c7", `${ex29}`, /puppy|puppies/g, [
  `puppy`,
  `puppies`,
  `puppies and kittens`,
  `kittens`,
]);

const ex30 = `
👉 Exercise 30<br>
Match a string whose only contents represent a playing card. The elements:
<br>
- the card number, which is a choice of '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'<br>
- a space character<br>
- the word 'of'<br>
- a space character<br>
- the suit ('hearts', 'spades', 'diamonds', or 'clubs')<br>
<br>
  - '10 of clubs' should match<br>
  - 'A of hearts' should match<br>
  - '3 of spades' should match<br>
  - '11 of diamonds' should **not** match<br>
  - '23 of hearts' should **not** match<br>
  - 'J of dots' should **not** match<br>
  - '3 of hearts, Q of clubs' should **not** match<br>
'
`;
renderRegexTest(
  "c7",
  `${ex30}`,
  /^([2-9]|10|J|Q|K|A) of (hearts|spades|diamonds|clubs)$/g,
  [
    `10 of clubs`,
    `A of hearts`,
    `3 of spades`,
    `11 of diamonds`,
    `23 of hearts`,
    `J of dots`,
    `3 of hearts, Q of clubs`,
  ]
);

const ex31 = `
👉 Exercise 31<br>

Test whether a string is a valid hex web color:
<br>
- the string must start with a #<br>
- then contain 3 or 6 (but not 4 or 5) hex digits (https://en.wikipedia.org/wiki/Hexadecimal)<br>
- alphabetical hex digits can be lower or uppercase<br>
<br>
The hex string should comprise the entire string.


<br>
- '#ab4' should match<br>
- '#AB4B72' should match<br>
- '#ab43' should **not** match<br>
- '#aaaaaaaaa' should **not** match<br>
- '#ahl' should **not** match<br>
'
`;
renderRegexTest("c7", `${ex31}`, /^#(([0-9]|[a-f]){3}|([0-9]|[a-f]){6})$/gi, [
  `#ab4`,
  `#AB4B72`,
  `#ab43`,
  `#aaaaaaaaa`,
  `#ahl`,
]);

const ex32 = `
👉 Exercise 32<br>

In a log file, parse out all lines that contain 'ERROR' or 'FATAL'.
<br>
'
2012-02-03 18:35:34 SampleClass6 [INFO] everything normal for id 577725851<br>
2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254<br>
2012-02-03 18:35:34 SampleClass3 [DEBUG] detail for id 1304807656<br>
2012-02-03 18:35:34 SampleClass3 [WARN] missing id 423340895<br>
2012-02-03 18:35:34 SampleClass5 [TRACE] verbose detail for id 2082654978<br>
2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id  1886438513<br>
2012-02-03 18:35:34 SampleClass9 [TRACE] verbose detail for id 438634209<br>
2012-02-03 18:35:34 SampleClass8 [DEBUG] detail for id 2074121310<br>
'
<br>
should match <br>
--match1-->2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254<br>
--match2-->2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id 1886438513<br>
<br>
'
`;
renderRegexTest("c7", `${ex32}`, /.+\[(FATAL|ERROR)\].+/gm, [
  `2012-02-03 18:35:34 SampleClass6 [INFO] everything normal for id 577725851
2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254
2012-02-03 18:35:34 SampleClass3 [DEBUG] detail for id 1304807656
2012-02-03 18:35:34 SampleClass3 [WARN] missing id 423340895
2012-02-03 18:35:34 SampleClass5 [TRACE] verbose detail for id 2082654978
2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id  1886438513
2012-02-03 18:35:34 SampleClass9 [TRACE] verbose detail for id 438634209
2012-02-03 18:35:34 SampleClass8 [DEBUG] detail for id 2074121310`,
]);
