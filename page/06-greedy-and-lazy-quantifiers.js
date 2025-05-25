generateCollapsibleContainer("c6", "6. Greedy vs. Lazy Quantifiers");

renderRegexTest(
  "c6",
  `match gr followed by [greedy by default] ${asteriskQuantifier} 'e' `,
  /gre*/gm,
  [
    "hegre this is test",
    "",
    "gre..!!!!	Kittens......sss!",
    "	b",
    "grep",
    "grain",
    "	b	greeeeeeeeeeeeeeeeeeeeeeeeeedy	t   c",
    "   w   first ongreeees",
  ]
);

renderRegexTest(
  "c6",
  `match gr followed by [lazy] ${asteriskQuantifier} 'e'`,
  /gre*?/gm,
  [
    "hegre this is test",
    "",
    "gre..!!!!	Kittens......sss!",
    "	b",
    "grep",
    "grain",
    "	b	greeeeeeeeeeeeeeeeeeeeeeeeeedy	t   c",
    "   w   first ongreeees",
  ]
);

renderRegexTest(
  "c6",
  `match gr followed by [greedy by default] ${questionMarkQuantifier} 'e'`,
  /gre?/gm,
  [
    "hegre this is test",
    "",
    "gre..!!!!	Kittens......sss!",
    "	b",
    "grep",
    "grain",
    "	b	greeeeeeeeeeeeeeeeeeeeeeeeeedy	t   c",
    "   w   first ongreeees",
  ]
);

renderRegexTest(
  "c6",
  `match gr followed by [lazy] ${questionMarkQuantifier} 'e'`,
  /gre??/gm,
  [
    "hegre this is test",
    "",
    "gre..!!!!	Kittens......sss!",
    "	b",
    "grep",
    "grain",
    "	b	greeeeeeeeeeeeeeeeeeeeeeeeeedy	t   c",
    "   w   first ongreeees",
  ]
);

renderRegexTest(
  "c6",
  `match 'l' followed by [lazy] ${asteriskQuantifier} 'a'`,
  /la*?/gm,
  [
    "lazy",
    "",
    "gre..!!!!	Kittens......sss!",
    "	b",
    "grep",
    "grain",
    "l",
    "la",
    "laaa",
    "blah",
    "clap",
    "lamp",
    "loud",
    "llama",
    "lala land",
    "a la carte",
    "hello",
    "alphabet",
  ]
);

renderRegexTest(
  "c6",
  `match 'l' followed by [lazy] ${plusQuantifier} 'a'`,
  /la+?/gm,
  [
    "lazy",
    "",
    "gre..!!!!	Kittens......sss!",
    "	b",
    "grep",
    "grain",
    "l",
    "la",
    "laaa",
    "blah",
    "clap",
    "lamp",
    "loud",
    "llama",
    "lala land",
    "a la carte",
    "hello",
    "alphabet",
  ]
);

renderRegexTest("c6", `the example before`, /^[A-Z][^\.?!]+[\.?!]$/gm, [
  "kitten33s.!",
  "Kitt1ensss?s!123",
  "Kittensss!?",
  "Oh is this what you call?",
  "I hate liers? Never mind?",
  "I love kittens . Why you laughing?",
]);

renderRegexTest(
  "c6",
  `${caretSign} Capital letter from A through Z &mdash; followed by [lazy] ${plusQuantifier} any characters before it ${dollerSign} one of these (.,?,!)`,
  /^[A-Z].+?[\.?!]$/gm,
  [
    "C?",
    "kitten33s.!",
    "This is a sentence.",
    "This is another sentence. And another?",
    "Kitt1ensss?s!123",
    "Kittensss!?but.",
    "Oh is this what you call?",
    "I hate liers? Never mind?",
    "I love kittens . Why you laughing?",
  ]
);

const ex25 = `
👉 Exercise 25<br>
Continuing from the exercises from last section. Using the same Robert Frost poem lines, find the shortest first phrase that starts and ends with 'and' (case doesn’t matter). The poem lines:
<br>
'The woods are lovely, dark, and deep,<br>
But I have promises to keep,<br>
And miles to go before I sleep,<br>
And miles to go before I sleep.'<br>
should match <br> 
'
and deep,<br> 
But I have promises to keep,<br> 
And<br> 
'
`;
renderRegexTest("c6", `${ex25}`, /and.*?and/is, [
  `The woods are lovely, dark, and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`,
]);

const ex26 = `
👉 Exercise 26<br>
Find as many non-overlapping strings as you can that start with 's' (case sensitive) and end with 'e'. Strings should be all on the same line.
<br>
this string:
<br>
'She sells seashells by the seashore'
<br>
should return these matches: 
<br> 
['se', 's se', 'she', 's by the', 'se', 'shore']
<br> 
'
`;
renderRegexTest("c6", `${ex26}`, /s.*?e/g, [
  `She sells seashells by the seashore`,
]);

const ex27 = `
👉 Exercise 27<br>
In an HTML string, find all the elements (including surrounding tags). That is, find strings that start with a string in angle brackets (for example, '&lt;i>') and end with a string in angle brackets that starts with a slash (for example, '&lt;/i>'). HTML strings may be multiline.
<br>
Note: You don't yet have the tools to deal with nested elements <br> (like &lt;p>Don't you just &ltb>love&lt/b> regexes?&lt;/p>). We will discuss this case in the section on capture groups!
<br>
'&lt;span>Yowza! That’s a great regular expression.&lt;/span>  should match entire string'
<br>
'&lt;p>Learn about regular expressions here.&lt;/p>&lt;p>You're going to love them!&lt;/p>  should match'
<br> 
--match1--> '&lt;p>Learn about regular expressions here.&lt;/p>'<br> 
--match2--> '&lt;p>You're going to love them!&lt;/p>'<br> 
<br> 
'
  &lt;h1>Regular Expressions&lt;/h1><br> 
  &lt;h2>Quantifiers&lt;/h2><br> 
  &lt;p>Quantifiers tell you how many of the preceding token are allowed.&lt;/p><br>
'
<br> 
--match1--> '&lt;h1>Regular Expressions&lt;/h1>'<br> 
--match2--> '&lt;h2>Quantifiers&lt;/h2>'<br> 
--match3--> '&lt;p>Quantifiers tell you how many of the preceding token are allowed.&lt;/p>'<br> 
<br> 
'I'm not HTML!!' should not match<br>
'&lt;p>Incomplete HTML' should not match<br>

Note: as html render the Test String [the raw test under the renderd] and in matches Full match also rendered so you have to know that it match the raw
'
`;
renderRegexTest(
  "c6",
  `${ex27}`,
  /<\w+>.*?<\/\w+>/gm,
  [
    `<p>Learn about regular expressions here.</p><p>You're going to love them!</p><br>&lt;p&gt;Learn about regular expressions here.&lt;/p&gt;&lt;p&gt;You're going to love them!&lt;/p&gt;`,
    `<h1>Regular Expressions</h1>
  <h2>Quantifiers</h2>
  <p>Quantifiers tell you how many of the preceding token are allowed.</p><br>&lt;h1&gt;Regular Expressions&lt;/h1&gt;<br>&lt;h2&gt;Quantifiers&lt;/h2&gt;<br>&lt;p&gt;Quantifiers tell you how many of the preceding token are allowed.&lt;/p&gt;
  `,
    "I'm not HTML!!",
    "<p>Incomplete HTML<br>&lt;p&gt;Incomplete HTML",
  ],
  false,
  false
);

const ex28 = `
👉 Exercise 28<br>
For an added challenge, try the last exercise, but also capture elements that only have only one tag that ends with /> (because the element has no contents to put between tags, <br> for example, &lt;img src="http://placekitten.com/200/300" /> or &lt;hr />).
<br>
should have the same matches / non-matches as all of the above <br>example:
<br> 
'
&lt;h1>Regular Expressions&lt;/h1><br>
&lt;hr /><br>
&lt;img src=”https://placehold.co/600x400” /><br>
'
<br> 
--match1--> '&lt;h1>Regular Expressions&lt;/h1>'<br> 
--match2--> '&lt;hr />'<br> 
--match3--> '&lt;img src=”https://placehold.co/600x400” />'<br> 
<br> 
Note: as html render the Test String [the raw test under the renderd] and in matches Full match also rendered so you have to know that it match the raw
<br> check console.log to get raw result'
`;
renderRegexTest(
  "c6",
  `${ex28}`,
  /<\w+>?.*?<?\/\w*?>/gm,
  [
    `<p>Learn about regular expressions here.</p><p>You're going to love them!</p><br>&lt;p&gt;Learn about regular expressions here.&lt;/p&gt;&lt;p&gt;You're going to love them!&lt;/p&gt;`,
    `<h1>Regular Expressions</h1>
  <h2>Quantifiers</h2>
  <p>Quantifiers tell you how many of the preceding token are allowed.</p><br>&lt;h1&gt;Regular Expressions&lt;/h1&gt;<br>&lt;h2&gt;Quantifiers&lt;/h2&gt;<br>&lt;p&gt;Quantifiers tell you how many of the preceding token are allowed.&lt;/p&gt;
  `,
    "I'm not HTML!!",
    "<p>Incomplete HTML<br>&lt;p&gt;Incomplete HTML",
    `
  <h1>Regular Expressions</h1>
  <hr />
  <img src=”https://placehold.co/600x400” /><br>&lt;h1&gt;Regular Expressions&lt;/h1&gt;<br>&lt;hr /&gt;<br>&lt;img src=”http://placekitten.com/200/300” /&gt;
  `,
  ],
  false,
  false,
  false,
  true
);
