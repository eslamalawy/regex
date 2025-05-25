generateCollapsibleContainer(
  "c1",
  "1. Explicit Characters and Quantifiers"
);

renderRegexTest("c1", "No Quantifier", /hey/gm, ["hey", "h1ey", "hy", "heyy"]);

renderRegexTest("c1", `${plusQuantifier} 'e'`, /he+y/gm, [
  "hey",
  "hay",
  "heey",
  "heeeeeeeeeeeeeeeeeeeeeeeey",
  "heeeeeeeeeeeeeeeeeeeeeeee",
  "h1ey",
  "hy",
  "heyy",
]);

renderRegexTest("c1", `${questionMarkQuantifier} 'e'`, /he?y/gm, [
  "hey",
  "hay",
  "heey",
  "heeeeeeeeeeeeeeeeeeeeeeeey",
  "heeeeeeeeeeeeeeeeeeeeeeee",
  "h1ey",
  "hy",
  "heyy",
]);

renderRegexTest(
  "c1",
  `${questionMarkQuantifier} 's' in 'kittens!'`,
  /kittens?!/gm,
  ["kitten!", "kittens!", "kittenss!"]
);

renderRegexTest("c1", `${asteriskQuantifier} 'e'`, /he*y/gm, [
  "hey",
  "hay",
  "heey",
  "heeeeeeeeeeeeeeeeeeeeeeeey",
  "heeeeeeeeeeeeeeeeeeeeeeee",
  "h1ey",
  "hy",
  "heyy",
]);

renderRegexTest(
  "c1",
  `${asteriskQuantifier} '!' after 'Kittens'`,
  /Kittens!*/gm,
  [
    "kitten!",
    "kittens!",
    "Kitten!",
    "Kittens!",
    "Kittenssss",
    "Kittenssss!",
    "Kittens!!!! Kittenssss!",
  ]
);

renderRegexTest(
  "c1",
  `${plusQuantifier} any character (except for line terminators \\n or new lines)' after 'Kittens'`,
  /Kittens.+/gm,
  [
    "Kittens",
    "Kittenss!!!!!",
    "Kittens!",
    "Kittens!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "Kittenssss",
    "Kittenssss!",
    "Kittens!!!! Kittenssss!",
  ]
);

renderRegexTest("c1", `${plusQuantifier} '.' after 'Kittens'`, /Kittens\.+/gm, [
  "Kittens",
  "Kittens...............",
  "Kittenss.!!!!!",
  "Kittens.!",
  "Kittens.sss!",
  "Kittens!!!! Kittens.sss!",
]);

renderRegexTest("c1", "One or Three '.' after 'Kittens'", /Kittens\.{1,3}/gm, [
  "Kittens",
  "Kittens...............",
  "Kittenss.!!!!!",
  "Kittens.!",
  "Kittens.sss!",
  "Kittens..!!!! Kittens.sss!",
]);

renderRegexTest("c1", "Exact Three '.' after 'Kittens'", /Kittens\.{3}/gm, [
  "Kittens",
  "Kittens...............",
  "Kittenss.!!!!!",
  "Kittens.!",
  "Kittens.sss!",
  "Kittens..!!!! Kittens.sss!",
]);

renderRegexTest("c1", "Three or More '.' after 'Kittens'", /Kittens\.{3,}/gm, [
  "Kittens",
  "Kittens...............",
  "Kittens...!!!!!",
  "Kittens..!",
  "Kittens.sss!",
  "Kittens..!!!! Kittens......sss!",
]);

const ex1 = `

👉 Exercise 1<br>
Match the string yeehaw with 2 or more 'e's after the 'y', and an optional exclamation point '!' at the end.<br>

yeehaw should match<br>

yeeeehaw! should match<br>

yehaw should not match<br>

yeehaw!!!! should not match the entire string <span class='green'>- yes it match just a part of it-</span><br>
`;
renderRegexTest("c1", `${ex1}`, /ye{2,}haw!?/, [
  "yeehaw",
  "yeeeehaw!",
  "yehaw",
  "yeehaw!!!!",
]);


const ex2 = `
👉 Exercise 2<br>
Match the word hiss, followed by zero or more 's', in the most readable form you can.<br>

hiss should match<br>

hisssss should match<br>

his should not match`;
renderRegexTest("c1", `${ex2}`, /his{2,}/, [
  "hiss",
  "hisssss",
  "his",
]);

const ex3 = `
👉 Exercise 3<br>
Match the word 'Yay' with three, four, five or six exclamation points at the end.<br>

Yay!!! should match<br>

Yay!!!!!! should match<br>

Yay!! should not match<br>

Yay!!!!!!! should not match the entire string <span class='green'>- yes it match just a part of it-</span><br>
`;
renderRegexTest("c1", `${ex3}`, /Yay!{3,6}/, [
  "Yay!!!",
  "Yay!!!!!!",
  "Yay!!",
  "Yay!!!!!!!"
]);




const ex4 = `
👉 Exercise 4<br>
Match 'Call me maybe' with any number of '?'s at the end (including zero).<br>

Call me maybe should match<br>

Call me maybe? should match<br>

Call me maybe???????????? should match<br>

Call me maybe! should not match the entire string <span class='green'>- yes it match just a part of it-</span><br>
`;
renderRegexTest("c1", `${ex4}`, /Call me maybe\?*/, [
  "Call me maybe",
  "Call me maybe?",
  "Call me maybe????????????",
  "Call me maybe!"
]);