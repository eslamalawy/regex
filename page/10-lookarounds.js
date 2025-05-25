generateCollapsibleContainer("c10", "10. Lookarounds");

renderRegexTest(
  "c10",
  `Match letter 'q' with positive lookahead <br>
  that make sure that the letter that comes after the letter 'q' <span class='green'>is letter 'u'</span>`,
  /q(?=u)/gm,
  [" test ", "", "quick", "quark", "qat", "positive lookahead"]
);
renderRegexTest(
  "c10",
  `Match digits that are <span class='green'>followed by the letter 'x'</span> (positive lookahead)`,
  /\d(?=x)/gm,
  ["3x", "4x", "3a", "7x7", "99x", "abc1x", "x3"]
);

renderRegexTest(
  "c10",
  `Match word 'Java' only if it's <span class='green'>followed by 'Script'</span> (positive lookahead)`,
  /Java(?=Script)/gm,
  [
    "Java",
    "JavaScript",
    "JavaBeans",
    "JavaScriptLanguage",
    "Scripting in JavaScript",
  ]
);

renderRegexTest(
  "c10",
  `Match the date which ${caretSign} three word characters followed by ' 'and two digits ' ' and ${dollerSign} <span class='green'>' something happened'</span> (positive lookahead)`,
  /^\w{3} \d\d (?=00:00:00 something happened$)/gm,
  [
    "sep 22 00:00:00 something happened",
    "sep 24 00:00:01 system started",
    "sep 23 00:00:02 user login successful",
    "sep 24 00:00:03 file uploaded",
    "sep 25 00:00:04 error occurred",
    "sep 26 00:00:00 something happened",
    "sep 26 00:00:00 something happened that you Have to see!",
    "sep 27 00:00:06 connection established",
    "sep 27 00:00:07 data saved",
    "sep 24 00:00:08 service restarted",
    "sep 24 00:00:09 backup initiated",
  ]
);

renderRegexTest(
  "c10",
  `Match letter 'q' with negative lookahead <br>
  that make sure that the letter that comes after the letter 'q' <span class='red'>is not letter 'u'</span>`,
  /q(?!u)/gm,
  [" test ", "", "quick", "quark", "qat", "negative lookahead"]
);

renderRegexTest(
  "c10",
  `Match word 'Java' only if it's <span class='red'>not followed by 'Script'</span> (negative lookahead)`,
  /Java(?!Script)/gm,
  ["Java", "JavaScript", "JavaBeans", "JavaFX", "JavaApp"]
);

renderRegexTest(
  "c10",
  `Match ${plusQuantifier} word characters followed by word boundary only if it's <span class='red'>not followed by non word character nor end of the line</span> (negative lookahead)`,
  /\w+\b(?!\W?$)/gm,
  [
    "There was a young fellow of Crete",
    "Who was so exceedingly neat.",
    "When he got out of bed,",
    "He stood on his head",
    "To make sure of not soiling his feet.",
  ]
);

renderRegexTest(
  "c10",
  `Match letter 'b' with positive lookbehind <br>
  that make sure that the letter that comes before the letter 'b' <span class='green'>is letter 'a'</span>`,
  /(?<=a)b/gm,
  [" test ", "", "cab", "debt", "bed", "positive lookbehind"]
);

renderRegexTest(
  "c10",
  `Match letter 'b' with negative lookbehind<br>
  that make sure that the letter that comes before the letter 'b' <span class='red'>is not letter 'a'</span>`,
  /(?<!a)b/gm,
  [" test ", "", "cab", "debt", "bed", "negative lookbehind"]
);
renderRegexTest(
  "c10",
  `Match the letter 'y' that is <span class='red'>not preceded by the digit '5'</span> (negative lookbehind)`,
  /(?<!5)y/gm,
  ["5y", "3y", "y5", "15y", "abc4y", "xy"]
);
renderRegexTest(
  "c10",
  `Match the usd value with positive lookbehind`,
  //   /USD ([\d\.]+)/gm, // but we need to not get the USD at all
  /(?<=USD )[\d\.]+/gm,
  [
    " test ",
    "",
    "USD 34.75",
    "GBP 1.20",
    "BRL 15.91",
    "JPY 68.93",
    "USD 22.03",
    "USD 50",
    "BRL 120.33",
    "INR 879.21",
  ]
);

renderRegexTest(
  "c10",
  `Positive Lookbehind match 'the string USD and space' before the following <br>
    ${dollerSign} ${plusQuantifier} digit followed by ${questionMarkQuantifier} of the Non-capturing group to match Decimal point and cents which 2 digits`,
  /(?<=USD )\d+(?:\.\d\d)?$/gm,
  [
    " test ",
    "",
    "USD 34.79",
    "GBP 1.20",
    "BRL 15.91",
    "JPY 68.93",
    "USD 22.03..44522",
    "USD 50",
    "BRL 120.33",
    "INR 879.21",
  ]
);

renderRegexTest(
  "c10",
  `Find all capitalized words that don't start a sentence<br>
   Match any letter between A to Z and ${asteriskQuantifier} of word characters forms word boundary at the end of it
   <br>using the <span class='red'>negative lookbehind</span>  that <span class='green'>confirm that whole match </span><span class='red'>don't start with the following:</span><br>
   the start of any line  nor literal period nor question mark nor exclamation point that followed by <br>
   ${questionMarkQuantifier} of double qoutes and ${plusQuantifier} any whitespace character and ${questionMarkQuantifier} of double qoutes <br>
    `,
  /(?<!^)(?<![\.?!]"?\s+"?)[A-Z]\w*\b/gm,
  [
    " test ",
    "",
    "It was a quarter past six when we left Baker Street, and it still wanted ten minutes to the hour when we found ourselves in Serpentine Avenue. It was already dusk, and the lamps were just being lighted as we paced up and down in front of Briony Lodge, waiting for the coming of its occupant. The house was just such as I had pictured it from Sherlock Holmes' succinct description, but the locality appeared to be less private than I expected. On the contrary, for a small street in a quiet neighbourhood, it was remarkably animated. ",
    `Excerpt From: Arthur Conan Doyle. "The Adventures of Sherlock Holmes." Apple Books. `,
  ]
);

const ex42 = `
👉 Exercise 42<br>

Given a file with command-line capture, find all the commands.
<br>
The prompt looks like this:
<br>
- 'directoryname git:(branchname) $', where 'directoryname' and 'branchname' are the working directory and git branch, respectively.
- The regular expression should capture only commands, not output (which would occur on lines that did not start with a prompt), and not the prompts themselves.<br>

  - '''<br>
    udemy-regex git:(master) $ cd exercises<br>
    exercises git:(master) $ ls<br>
    js     python<br>
    exercises git:(master) $ cd python<br>
    python git:(master) $ ls<br>
    1_characters_and_quantities 5_flags                     9_lookaround<br>
    2_collections_and_ranges    6_greedy_vs_lazy            run_tests.sh<br>
    3_whitespace_and_boundaries 7_groups<br>
    4_character_categories      8_substitution<br>
    python git:(master) $ cd 9_lookaround<br>
    9_lookaround git:(master) $ ls<br>
    __pycache__ evaluate.py<br>
    9_lookaround git:(master) $ touch lookaround.py<br>
    '''<br>
    should match<br>
    - 'cd exercises'<br>
    - 'ls'<br>
    - 'cd python'<br>
    - 'ls'<br>
    - 'cd 9_lookaround'<br>
    - 'ls'<br>
    - 'touch lookaround.py'<br>

`;
renderRegexTest("c10", `${ex42}`, /(?<=.+git:\(.+\) \$ ).+/gm, [
  `udemy-regex git:(master) $ cd exercises
exercises git:(master) $ ls
js     python
exercises git:(master) $ cd python
python git:(master) $ ls
1_characters_and_quantities 5_flags                     9_lookaround
2_collections_and_ranges    6_greedy_vs_lazy            run_tests.sh
3_whitespace_and_boundaries 7_groups
4_character_categories      8_substitution
python git:(master) $ cd 9_lookaround
9_lookaround git:(master) $ ls
__pycache__ evaluate.py
9_lookaround git:(master) $ touch lookaround.py`,
]);

const ex43 = `
👉 Exercise 43<br>

There's a document formatted so that each name is on its own line preceded by 'Name: '. Capture all the names, without the preceding 'Name: ' string.<br>

- '<br>
  Name: Vijay Hazare<br>
  Email: vijay.hazare@notarealdomain.com<br>

  Name: Muhammad Ali<br>
  Email: muhammad.ali@notarealemaildomain.com<br>
  '<br>

  should return<br>

  - 'Vijay Hazare'<br>
  - 'Muhammad Ali'<br>
`;
renderRegexTest("c10", `${ex43}`, /(?<=^Name:\s).+/gm, [
  `Name: Vijay Hazare
Email: vijay.hazare@notarealdomain.com

Name: Muhammad Ali
Email: muhammad.ali@notarealemaildomain.com`,
]);

const ex44 = `
👉 Exercise 44<br>

You have a string containing tags, separated by commas. Each tag contains only letters, numbers and underscores. Capture the tags that start with 'meta__'. Capture only the part of the tags after the 'meta__'<br>

<br>- 'a_tag, meta__another_tag, meta__third_tag, fourth_tag' should match<br>
- 'another_tag'<br>
 - 'third_tag'<br>
`;
renderRegexTest("c10", `${ex44}`, /(?<=meta__).*?(?=,)/gm, [
  `a_tag, meta__another_tag, meta__third_tag, fourth_tag`,
]);

const ex45 = `
👉 Exercise 45<br>

Find each word directly before a semicolon (';') in a block of text (but do not capture the semicolon). Text may be multi-line.<br>

<br>- 'I love the semicolon; it's unnecessary, but graceful and sophtisticated' should return 'semicolon'.<br>
- '''<br>
  He was bald, or mostly bald – a crop of white stubble gilded his ears – and gave off an air of pent-up energy, of emotions kept in check; the same sense Lamb had had watching the video of him, shot eighteen years ago, through a two-way mirror in one of Regent’s Park’s luxury suites. Joke. These were underground, and were where the Service’s more serious debriefings took place; those which it might later prove politic to deny had happened.<br>
  '''<br>
  should return<br>
  - 'check'<br>
  - 'place'<br>
- '''<br>
  Mabel the Cat had made a big pot of goulash; it was simmering on the stove.<br>

<br>  Goulash was Harry the Dog's favorite; the scent drew him to the kitchen.<br>

<br>  As Mabel]'s culinary efforts continued, with bread baking in the oven and a cabbage dish just begun, she admonished Harry to keep out of her way; but Harry's ability to remain at a decent distance from the stove was severely challenged.<br>

<br>  Mabel did not take kindly to the encroachment of Harry into her personal cooking space; indeed, she at one point responded to the sudden appearance of his muzzle at her elbow with a distinct and species-appropriate hiss.<br>

<br>  Harry was an animal driven by primal need to gain immediate access to the goulash; his options for achieving that aim were, however, limited.<br>

<br>  Mabel's cooking prowess, honed through years of complex feasts, was formidable; the interruption of its application ill-advised.<br>

<br>  The scent of the baking bread was sublime, the perfume of the goulash intoxicating.<br>

<br>  On one important point Harry and Mabel agreed; that is, it would be better for all if Harry found somewhere else to be while Mabel finished cooking.<br>
  '''<br>

<br>  should return<br>

<br>  - 'goulash'<br>
  - 'favorite'<br>
  - 'way'<br>
  - 'space'<br>
  - 'goulash'<br>
  - 'formidable'<br>
  - 'agreed'<br>
`;
renderRegexTest("c10", `${ex45}`, /\b\w+(?=;)/gm, [
  `I love the semicolon; it's unnecessary, but graceful and sophtisticated`,
  `He was bald, or mostly bald – a crop of white stubble gilded his ears – and gave off an air of pent-up energy, of emotions kept in check; the same sense Lamb had had watching the video of him, shot eighteen years ago, through a two-way mirror in one of Regent’s Park’s luxury suites. Joke. These were underground, and were where the Service’s more serious debriefings took place; those which it might later prove politic to deny had happened.`,
  `Mabel the Cat had made a big pot of goulash; it was simmering on the stove.

Goulash was Harry the Dog's favorite; the scent drew him to the kitchen.

As Mabel]'s culinary efforts continued, with bread baking in the oven and a cabbage dish just begun, she admonished Harry to keep out of her way; but Harry's ability to remain at a decent distance from the stove was severely challenged.

Mabel did not take kindly to the encroachment of Harry into her personal cooking space; indeed, she at one point responded to the sudden appearance of his muzzle at her elbow with a distinct and species-appropriate hiss.

Harry was an animal driven by primal need to gain immediate access to the goulash; his options for achieving that aim were, however, limited.

Mabel's cooking prowess, honed through years of complex feasts, was formidable; the interruption of its application ill-advised.

The scent of the baking bread was sublime, the perfume of the goulash intoxicating.

On one important point Harry and Mabel agreed; that is, it would be better for all if Harry found somewhere else to be while Mabel finished cooking.`,
]);

const ex46 = `
👉 Exercise 46<br>

Given a list of file names, capture files that contain 'py' but not at the end of the string (that is, not python files). Hint: use negative lookbehind from the end of the string.<br>

<br>- '''<br>
  happy.js<br>
  happy.py<br>
  sad.sh<br>
  sad.py<br>
  pyrite.go<br>
  '''<br>
  should return<br>
  - 'happy.js'<br>
  - 'pyrite.go'<br>
`;
renderRegexTest("c10", `${ex46}`, /.*?py.*?(?<!\.py)$/gm, [
  `happy.js
happy.py
sad.sh
sad.py
pyrite.go`,
]);
