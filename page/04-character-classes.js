generateCollapsibleContainer("c4", "4. Character Classes");

renderRegexTest("c4", "Match any whitespace", /[\r\n\t\v\f ]/gm, [
  "12 3",
  "1",
  "hello this is test",
  "NEW",
  "",
  "Kittens..!!!!	Kittens......sss!",
  "	b",
  "	b	b	t   c",
]);

renderRegexTest("c4", `${caretSign} ${plusQuantifier} whitespaces`, /^\s+/gm, [
  "12 3",
  "1",
  "hello this is test",
  " NEW",
  "",
  "Kittens..!!!!	Kittens......sss!",
  "	b",
  "	b	b	t   c",
]);

renderRegexTest(
  "c4",
  `${caretSign} ${plusQuantifier} ${negation} whitespaces`,
  /^\S+/gm,
  [
    "12 3",
    "1",
    "hello this is test",
    " NEW",
    "",
    "Kittens..!!!!	Kittens......sss!",
    "	b",
    "	b	b	t   c",
  ]
);

renderRegexTest(
  "c4",
  `${caretSign} ${plusQuantifier} Digits in range[0-9]`,
  /^\d+/gm,
  [
    "12 3",
    "1",
    "hello this is test",
    " NEW",
    "",
    "Kittens..!!!!	Kittens......sss!",
    "	b",
    "	b	b	t   c",
  ]
);

renderRegexTest(
  "c4",
  `${caretSign} ${plusQuantifier} ${negation} Digits in range [0-9]`,
  /^\D+/gm,
  [
    "12 3",
    "1",
    "hello this is test",
    " NEW",
    "",
    "Kittens..!!!!	Kittens......sss!",
    "	b",
    "	b	b	t   c",
  ]
);

renderRegexTest(
  "c4",
  `${caretSign} ${plusQuantifier} word character in collection [0-9A-Za-z_]`,
  /^\w+/gm,
  [
    "12 3",
    "1",
    "hello this is test",
    " NEW",
    "",
    "_hi_",
    "Kittens..!!!!	Kittens......sss!",
    "	b",
    "	b	b	t   c",
  ]
);

renderRegexTest(
  "c4",
  `${caretSign} ${plusQuantifier} ${negation} word character in collection [0-9A-Za-z_]`,
  /^\W+/gm,
  [
    "",
    "12 3",
    "1",
    "hello this is test",
    " NEW",
    ",:?;{}()[]*&^%$#@!~`|\\/*+-.",
    "_hi_",
    "Kittens..!!!!	Kittens......sss!",
    "	b",
    "	b	b	t   c",
  ]
);

renderRegexTest("c4", `match 'cat' as a Word Boundary`, /\bcat\b/gm, [
  "12cat 3",
  "1cat",
  ",:?;{}()[]*&cat^%$#@!~`|\\/*+-.",
  " NEW",
  "",
  "_hi_",
  "cat..!!!!	cats......sss!",
  "	b",
  "	b	cat	t   c",
  "_hi_ cat",
  "cat..!!!!",
  "cats...sss",
  " cat\t\n",
  "catcatcat",
  "b cat b",
  "b\tcat\tb",
  "cat is a pet", // 1. Before the first character in the string if it's a word character
  "I have a black cat", // 2. After the last character in the string if it's a word character
  "I have a cat, and a dog.", // 3. Between a word character and a non-word character
]);
renderRegexTest(
  "c4",
  `match "cats" as a Word Boundary between 2 non-word characters`,
  /\bcats\b/gm,
  [
    "thecats",
    "I love cats",
    "cats!#",
    "newcats",
    "cats in the bag",
    "there are cats here",
  ]
);

renderRegexTest(
  "c4",
  `match "dog" between non-word character and word character`,
  /\bdog/gm,
  [
    "thedogs",
    "a black dog",
    "dogatonic",
    "tomdog",
    "certifidoge",
    "there are dogs here",
    "this dog is",
    "sawdog ",
    "saw-dog",
  ]
);

renderRegexTest(
  "c4",
  `match "dog" between word character and non-word character`,
  /dog\b/gm,
  [
    "thedogs",
    "a black dog",
    "dogatonic",
    "tomdog",
    "certifidoge",
    "there are dogs here",
    "sawdog ",
    "this dog is",
  ]
);

renderRegexTest("c4", `match "cat" as a Non-Word Boundary`, /\Bcat\B/gm, [
  "12cat 3",
  "I have a cat",
  "scattered",
  ",:?;{}()[]*&cat^%$#@!~`|\\/*+-.",
  " NEW",
  "   ",
  "cat",
  "cats are cool",
  "I love cat",
  "1234cat567",
  "mylongcatstring",
  "scat!",
  " cats ",
  "cat_bcat",
  "_hi_ cat",
  "concatenate",
  "cats...sss",
  " cat\t\n",
  "catcatcat",
  "b cat b",
  "b\tcat\tb",
]);

renderRegexTest("c4", `match "cat" with Non-Word character`, /\Wcat\W/gm, [
  "12cat 3",
  "I have a cat",
  "1cat",
  ",:?;{}()[]*&cat^%$#@!~`|\\/*+-.",
  " NEW",
  "   ",
  "cats are cool",
  "I love cat",
  "1234cat567",
  "mylongcatstring",
  "bcatb",
  " cats ",
  "cat_bcat",
  "_hi_ cat",
  "cat..!!!!",
  "cats...sss",
  " cat\t\n",
  "catcatcat",
  "b cat b",
  "b\tcat\tb",
]);

renderRegexTest(
  "c4",
  `${caretSign} word character followed by ${asteriskQuantifier} any character ${dollerSign} ${negation} digit`,
  /^\w.*\D$/gm,
  [
    "",
    "12 3",
    "1",
    "hello this is test",
    " NEW36",
    ",:?;{}()[]*&^%$#@!~`|\\/*+-.",
    "_hi_",
    "why you got 3! hry",
    "Kittens..!!!!	Kittens......sss!2",
    "	b",
    "	b	b	t   c",
    "h you @ me 2 of",
  ]
);

const ex14 = `
👉 Exercise 14<br>
Match two or more 'o's, but only if they’re in the middle of a word. Do not include any characters other than the 'o's in the match.
<br>
Look at me! should match 'oo'<br>
Booooom! That’s how it’s done! should match 'ooooo'<br>
Yahooooooooooo should match 'oooooooooo'<br>
ooh, that’s pretty should not match<br>
yahoo! should not match<br>
`;
renderRegexTest("c4", `${ex14}`, /\Bo{2,}\B/, [
  "Look at me!",
  "Booooom! That’s how it’s done!",
  "Yahooooooooooo",
  "ooh, that’s pretty",
  "yahoo!",
]);

const ex15 = `
👉 Exercise 15<br>
Match list item strings that start with one or more digits followed by a ')'. Match the entire contents of each list item string (not just the digit(s) and parenthesis).
<br>
1) Finish regex course should match the entire string<br>
223513) Go to bed should match the entire string<br>
I think it would be best to 1) stop, 2) drop, and 3) roll should not match<br>
1. Wake up at noon should not match<br>
a) You don't talk about fight club should not match<br>
`;
renderRegexTest("c4", `${ex15}`, /^\d+\).*/, [
  `1) Finish regex course`,
  `223513) Go to bed`,
  `I think it would be best to 1) stop, 2) drop, and 3) roll`,
  `1. Wake up at noon`,
  `a) You don't talk about fight club`,
]);

const ex16 = `
👉 Exercise 16<br>
Match any whitespace at the end of a string. Do not include characters other than the whitespace in the match, and do not match strings that don’t have whitespace at the end. Note: for all the Exercises, replace the backslash notation with the actual character (tab for \t and newline for \n)
<br>
hi\\t  should match \\t <br>
hi \\n should match  \\n<br>
&nbsp;\\t \\n should match  \\t \\n<br>
hi\\t ! should not match<br>
&nbsp;\\t\\thi should not match<br>
`;
renderRegexTest(
  "c4",
  `${ex16}`,
  /\s+$/gm,
  [`hi\t `, `hi \n`, ` \t \n`, `hi\t !`, ` \t\thi`],
  false,
  true,
  true
);

const ex17 = `
👉 Exercise 17<br>
Find any phrase that matches ____ the ____. That is, one word before and after 'the'. Don't match any non-word characters before or after the matched string.
<br>
She sells seashells by the seashore. should match by the seashore<br>
What the heck does this regular expression mean? should match What the heck<br>
Is that what the walrus said? should match what the walrus<br>
The rain in Spain falls mainly on the plain should match on the plain<br>
I said, the bees knees! should not match<br>
So then I was like, "What the...?!? should not match<br>
the lion sleeps tonight should not match<br>
`;
renderRegexTest("c4", `${ex17}`, /\w+ the \w+/, [
  `She sells seashells by the seashore.`,
  `What the heck does this regular expression mean?`,
  `Is that what the walrus said?`,
  `The rain in Spain falls mainly on the plain`,
  `I said, the bees knees!`,
  `So then I was like, "What the...?!?`,
  `the lion sleeps tonight`,
]);

const ex18 = `
👉 Exercise 18<br>
Make a simplified email address matcher with these rules:
<br>
One or more word or period (.) characters before the @<br>
At least one  period (.) after the @<br>
The string should contain only the email address and no surrounding characters<br>
Interested in an unsimplified version? See http://emailregex.com/<br>

me@notarealemail.com should match<br>
not_real@im.so.fake.com should match<br>
not real@im.so.fake.com should not match<br>
not.real_at_im.so.fake.com should not match<br>
`;
renderRegexTest("c4", `${ex18}`, /^[\w\.]+@[\w\.]+$/, [
  `me@notarealemail.com`,
  `not_real@im.so.fake.com`,
  `not real@im.so.fake.com`,
  `not.real_at_im.so.fake.com`,
]);
