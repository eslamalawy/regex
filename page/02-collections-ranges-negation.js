generateCollapsibleContainer(
  "c2",
  "2. Collections, Character Ranges, and Negation"
);

renderRegexTest(
  "c2",
  "Match a single character present in the list '[0123456789ABCDEF]'",
  /[0123456789ABCDEF]/gm,
  ["123", "1", "C80", "Kittens.sss!", "Kittens..!!!! Kittens......sss!"]
);

renderRegexTest(
  "c2",
  `Match ${plusQuantifier} character present in the list '[0123456789ABCDEF]'`,
  /[0123456789ABCDEF]+/gm,
  ["123", "1", "C80", "Kittens.sss!", "Kittens..!!!! Kittens......sss!"]
);

renderRegexTest(
  "c2",
  `Match ${questionMarkQuantifier} character present in the list '[0123456789ABCDEF]'`,
  /[0123456789ABCDEF]?/gm,
  ["123", "1", "C80", "Kittens.sss!", "Kittens..!!!! Kittens......sss!"]
);

renderRegexTest(
  "c2",
  `Match ${asteriskQuantifier} character present in the list '[0123456789ABCDEF]'`,
  /[0123456789ABCDEF]*/gm,
  ["123", "1", "C80", "Kittens.sss!", "Kittens..!!!! Kittens......sss!"]
);

renderRegexTest(
  "c2",
  `Match ${asteriskQuantifier} characters present in the list '[0-9A-F]' (same upper list)`,
  /[0-9A-F]*/gm,
  [
    "123",
    "1",
    "C80",
    "Kittens.sss!",
    "Kittens..!!!! Kittens......sss!",
    "ABC123DEF",
    "GHIJKL",
    "",
    "A1B2C3D4",
    "XYZ987",
  ]
);

renderRegexTest("c2", "Match letters in list '[a-zA-Z]'", /[a-zA-Z]/gm, [
  "abc",
  "A",
  "Zxyz",
  "1234",
  "Hello World!",
  "!!!",
  "Test123",
  "abcd1234efgh",
  "A B C",
  "",
  "abcd?",
]);

renderRegexTest(
  "c2",
  `Match ${plusQuantifier} letters in list '[a-zA-Z]'`,
  /[a-zA-Z]+/gm,
  [
    "abc",
    "A",
    "Zxyz",
    "1234",
    "Hello World!",
    "!!!",
    "Test123",
    "abcd1234efgh",
    "A B C",
    "",
    "abcd?",
  ]
);

renderRegexTest(
  "c2",
  `Match ${asteriskQuantifier} letters in list '[a-zA-Z]'`,
  /[a-zA-Z]*/gm,
  [
    "abc",
    "A",
    "Zxyz",
    "1234",
    "Hello World!",
    "!!!",
    "Test123",
    "abcd1234efgh",
    "A B C",
    "",
    "abcd?",
  ]
);

renderRegexTest(
  "c2",
  `Match ${questionMarkQuantifier} letter in list '[a-zA-Z]'`,
  /[a-zA-Z]?/gm,
  [
    "abc",
    "A",
    "1234",
    "Hello World!",
    "!!!",
    "Test123",
    "abcd1234efgh",
    "",
    "abcd?",
    "a b c",
    "hello this is Anice place to be in",
  ]
);

renderRegexTest(
  "c2",
  `Match anything ${negation} lowercase letters a through z or the number 4 in list '[^a-z4]'`,
  /[^a-z4]/gm,
  [
    "abc",
    "A",
    "1234",
    "Hello World!",
    "!!!",
    "Test123",
    "abcd1234efgh",
    "",
    "abcd?",
    "a b c",
  ]
);

renderRegexTest(
  "c2",
  `Match one capital letter from A through Z &mdash; followed by ${plusQuantifier} of any character ${negation} exist in (.,?,!) &mdash; followed by one of these (.,?,!)`,
  /[A-Z][^\.?!]+[\.?!]/gm,
  [
    "anything",
    "hu",
    "Kittens...............",
    "Kittenss.!!!!!",
    "Kitten33s.!",
    "kitten33s.!",
    "Kitt1ensss?s!123",
    "Kittensss!?",
    "i hate liers?",
    "I love kittens . Why you laughing?",
  ]
);

const ex5 = `
👉 Exercise 5<br>
Match a string that represents a binary number (contains only 0s and 1s)<br>

0 should match<br>

0110100110 should match<br>

14 should not match<br>
`;
renderRegexTest("c2", `${ex5}`, /^[01]*$/, ["0", "0110100110", "14"]);

const ex6 = `
👉 Exercise 6<br>
Match a potential Hawaiian word from this collection of letters: AEIOUHKLMNPW Apostrophe (') is an option for all but the first letter. The first letter may be lowercase or capital; other letters must be lowercase.<br>

Aloha should match<br>

umuhumunukunukuapua'a should match<br>

alohA should not match<br>

Fred should not match<br>
`;
renderRegexTest("c2", `${ex6}`, /^[AEIOUHKLMNPW]?[aeiouhklmnpw\']*$/, [
  "Aloha",
  "umuhumunukunukuapua'a",
  "alohA",
  "Fred",
]);

const ex7 = `
👉 Exercise 7<br>
Match a telephone number of the format 555-555-5555 (where each of the 5s could be any digit).<br>

123-456-7890 should match<br>

12-456-7890 should match<br>

1234-456-7890 should not match entire string<br>

abc-def-hijk should not match<br>

1234567890 should not match<br>
`;
renderRegexTest("c2", `${ex7}`, /[0-9]{2,3}-[0-9]{3}-[0-9]{4}/, [
  "123-456-7890",
  "12-456-7890",
  "1234-456-7890",
  "abc-def-hijk",
  "1234567890",
]);



const ex8 = `
👉 Exercise 8<br>
Match strings that are at least six characters and don’t contain the letter A (uppercase or lowercase).<br>

Python should match<br>

unique New York should match<br>

Regular Expressions should not match<br>

ALOHA should not match<br>
`;
renderRegexTest("c2", `${ex8}`, /^[^aA]{6,}/, [
  "Python",
  "unique New York",
  "Regular Expressions",
  "ALOHA",
]);

