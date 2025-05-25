generateCollapsibleContainer(
  "c3",
  "3. Whitespace Characters and String Boundaries"
);

renderRegexTest("c3", "must start with Tab character followed by b", /\tb/gm, [
  "123",
  "1",
  "C80",
  "Kittens..!!!!	Kittens......sss!",
  "	b",
  "	b	b	t   c",
]);

renderRegexTest(
  "c3",
  `${plusQuantifier} space characters followed by ${asteriskQuantifier} characters that aren't newlines`,
  / +.*/gm,
  [
    "123",
    " 1",
    "peter piper and his family",
    "Kittens..!!!!	Kittens......sss!",
    "	b",
    "	b	b	t   c",
  ]
);

renderRegexTest(
  "c3",
  `${caretSign} 'h' ${dollerSign} 'a' with nothing in between`,
  /^ha$/gm,
  [
    "123",
    " 1",
    "peter piper and his family",
    "hallo",
    "ha",
    "haha ha so you have it ? ",
    "done with what i told you",
    "ha?",
  ]
);

renderRegexTest(
  "c3",
  `${caretSign} ${plusQuantifier} space characters followed by ${asteriskQuantifier} characters that aren't newlines`,
  /^ +.*/gm,
  [
    "123",
    " 1",
    "peter piper and his family",
    "Kittens..!!!!	Kittens......sss!",
    "	b",
    "	b	b	t   c",
  ]
);

renderRegexTest(
  "c3",
  `${caretSign} Capital letter from A through Z &mdash; followed by ${plusQuantifier} characters ${negation} exist in (.,?,!) &mdash; ${dollerSign} one of these (.,?,!)`,
  /^[A-Z][^\.?!]+[\.?!]$/gm,
  [
    "kitten33s.!",
    "Kitt1ensss?s!123",
    "Kittensss!?",
    "Oh is this what you call?",
    "I hate liers? Never mind?",
    "I love kittens . Why you laughing?",
  ]
);

const ex9 = `
👉 Exercise 9<br>
Match all strings with one or more space characters at the end, preparing to replace them with an empty string. The contents of the string before the spaces is not important.<br>

trail  should match<br>
trail  should match<br>
trail \\t (where \\t is an actual tab character) should not match<br>
 hey, i have no space at the end should not match<br>
`;
renderRegexTest("c3", `${ex9}`, /.* +$/, [
  "trail ",
  "trail ",
  `trail \t`,
  ` hey, i have no space at the end`,
]);

const ex10 = `
👉 Exercise 10<br>
Match strings that contain at least two tabs in a row anywhere in the string. Contents of the string are unimportant. Note: for all the Exercises, \\t is an actual tab character. You should copy the text below into a text editor, type a tab character from your keyboard in place of all any \\t characters, and then paste in regex101.<br>

tab\\t\\ttab should match<br>
\\t\\ttwotabs should match<br>
tabs\\t\\t\\t should match<br>
one\\ttab should not match<br>
no tabs should not match<br>
\\tseparated\\ttabs should not match<br>
`;
renderRegexTest("c3", `${ex10}`, /.*\t{2,}.*/, [
  `tab\t\ttab`,
  `\t\ttwotabs`,
  `tabs\t\t\t`,
  `one\ttab`,
  `no tabs`,
  `\tseparated\ttabs`,
]);

const ex11 = `
👉 Exercise 11<br>
Match strings that contain at least two tabs, not necessarily in a row, anywhere in the string. Contents of the string are unimportant.<br>

\\tseparated\\ttabs should match<br>
tab\\t\\ttab should match<br>
\\t\\ttwotabs should match<br>
\\tta\\tb\\ts should match<br>
one\ttab should not match<br>
no tabs should not match<br>
`;
renderRegexTest("c3", `${ex11}`, /\t.*\t/, [
  `\tseparated\ttabs`,
  `tab\t\ttab`,
  `\t\ttwotabs`,
  `\tta\tb\ts`,
  `one\ttab`,
  `no tabs`,
]);

const ex12 = `
👉 Exercise 12<br>
Match strings that start with at least three digits from 0 to 5 (inclusive). Contents of the string are unimportant.
<br>
321 yay! should match<br>
54321 yay! should match<br>
21 yay! should not match<br>
yay! 321! should not match<br>
987654321 yay! should not match<br>
`;
renderRegexTest("c3", `${ex12}`, /^[0-5]{3,}.*/, [
  `321 yay!`,
  `54321 yay!`,
  `21 yay!`,
  `yay! 321!`,
  `987654321 yay!`,
]);

const ex13 = `
👉 Exercise 13<br>
Match entire strings that are six characters or longer and don’t contain the letter E (capital or lowercase).
<br>
Python should match<br>
Whazzup???? should match<br>
lol should not match<br>
Expressions should not match the entire string<br>
unique New York should not match the entire string<br>
`;
renderRegexTest("c3", `${ex13}`, /[^Ee]{6,}/, [
  `Python`,
  `Whazzup????`,
  `lol`,
  `Expressions`,
  `unique New York`,
]);
