generateCollapsibleContainer("c9", "9. Substitution (Replace)");

renderRegexSubstitution(
  "c9",
  `replace any of the list of animals with the string cutie`,
  /kitten|puppy|piglet|foal|fawn|duckling|chick/gm,
  "cuite",
  [
    " this is kitten test",
    "",
    "image.puppy",
    "photo.jpg\nbad.pdf",
    "foal and fawn and ducklings are cute",
    "is there any of cute cutie dogs here ?no there is not, But piglet",
    "no animals at all here",
  ]
);

renderRegexSubstitution(
  "c9",
  `replace cute animal with the string cutie`,
  /(kitten|puppy|piglet|foal|fawn|duckling|chick)/gm,
  "cute little $1",
  [
    " this is kitten test",
    "",
    "image.puppy",
    "photo.jpg\nbad.pdf",
    "foal and fawn and ducklings are cute",
    "is there any of cute cutie dogs here ?no there is not, But piglet",
    "no animals at all here",
  ]
);

renderRegexSubstitution(
  "c9",
  `remove asterisks and underscores from a string`,
  /[*_]/gm,
  "",
  [
    " this is kitten test",
    "",
    "Now _this_ is a *workout* for your brain!*",
    "smile :)_____ don't sad :_ so feel excited *-*",
    "is there any of cute cutie dogs here ?no there is not, But piglet",
  ]
);

renderRegexSubstitution(
  "c9",
  "Replace file extensions with a uniform .webp extension",
  /(.+)\.(png|jpe?g|pdf)$/gm,
  "$1.webp",
  [
    "image.png",
    "photo.jpg",
    "document.pdf",
    "vacation_photo.jpeg",
    "image.txt",
    "logo.png",
    "invalid_filename",
  ]
);

renderRegexSubstitution(
  "c9",
  `Format names from 'First Last' to 'Last, First'`,
  /(\w+)\s+(\w+)/gm,
  "$2, $1",
  ["John Smith", "Mary Johnson", "Single", "Multiple Words Here", "Jane Doe"]
);

renderRegexSubstitution(
  "c9",
  "Wrap all numbers in HTML strong tags",
  /(\d+)/gm,
  "<strong>$1</strong>",
  [
    "Order #12345 was placed on 2025-05-11",
    "Items: 3 x $9.99 + 2 x $14.50",
    "No numbers here",
    "Contact us at 555-123-4567",
  ]
);

renderRegexSubstitution(
  "c9",
  "Convert matched words to uppercase using a function",
  /\b(java|javascript|html|css)\b/gim,
  function (match) {
    return match.toUpperCase();
  },
  [
    "I love programming in javascript and java",
    "HTML and CSS are essential web technologies",
    "No matches in this string",
    "Javascript is different from Java, just like html is different from css",
  ]
);

renderRegexSubstitution(
  "c9",
  "Format phone numbers with country code",
  /(\d{3})-(\d{3})-(\d{4})/gm,
  function (match, area, prefix, line) {
    return `+1 (${area}) ${prefix}-${line}`;
  },
  [
    "Call us at 555-123-4567",
    "Multiple numbers: 222-333-4444 or 555-666-7777",
    "No phone numbers here",
    "Contact sales: 800-555-0100, support: 800-555-0199",
  ]
);

renderRegexSubstitution(
  "c9",
  "Parse and format dates using named capture groups",
  /(?<month>\d{2})\/(?<day>\d{2})\/(?<year>\d{4})/gm,
  "Date: $<day>-$<month>-$<year>",
  [
    "Event scheduled for 05/15/2023",
    "Multiple dates: 01/01/2022 and 12/31/2023",
    "No dates here",
    "Deadlines: 06/30/2024, 09/15/2024",
  ]
);

renderRegexSubstitution(
  "c9",
  "Format email addresses with user and domain highlighted",
  /(?<user>[a-zA-Z0-9._%+-]+)@(?<domain>[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gm,
  "User: $<user> at Domain: $<domain>",
  [
    "Contact us at info@example.com",
    "Multiple emails: support@company.org and sales@company.org",
    "No email addresses here",
    "Send your resume to careers@bigcorp.co.uk",
  ]
);

const ex36 = `
👉 Exercise 36<br>

Replace all email addresses (using the simplified pattern description from the exercises in the character classes section) with the text redacted <br>
Make a simplified email address matcher with these rules:
<br>
One or more word or period (.) characters before the @<br>
At least one  period (.) after the @<br>
The string should contain only the email address and no surrounding characters<br>

not.an.email@fakedomain.com should return 'redacted'<br>
Please send to a@b.com and c@d.com. Thanks! should return Please send to redacted and redacted. Thanks!><br>
This string has no emails!! should return This string has no emails!!><br>
`;
renderRegexSubstitution("c9", `${ex36}`, /[\w\.]+@[\w\.]+/g, "redacted", [
  `not.an.email@fakedomain.com`,
  `Please send to a@b.com and c@d.com. Thanks!`,
  `This string has no emails!!`,
]);

const ex37 = `
👉 Exercise 37<br>

Strip all html tags out of text. for example, '&lt;b>bold statement&lt;/b>' should become 'bold statement'. <br> 
 '&lt;span>This is a &lt;b>span!</b>&lt;/span>&lt;span>So is this.&lt;/span>' should return 'This is a span!So is this.'<br> 
&lt;span>This is a span</span>  should return 'This is a span'<br> 

'
  &lt;h1>Regular Expressions&lt;/h1><br> 
  &lt;h2>Quantifiers&lt;/h2><br> 
  &lt;p>Quantifiers tell you how many of the preceding token are allowed.&lt;/p><br>
'
<br> 
should return : <br> 
'
Regular Expressions<br> 
Quantifiers<br> 
Quantifiers tell you how many of the preceding token are allowed.<br> 
'
<br> 
'No tags. Absolutely none.' should return 'No tags. Absolutely none.'<br>
<br> NOTE: in replaced parts you can't see because html rendered but it says &lt;tag> replaced <br>
'
`;
renderRegexSubstitution("c9", `${ex37}`, /<\w+>|<\/\w+>/gm, "", [
  `<span>This is a span</span>`,
  `<span>This is a <b>span!</b></span><span>So is this.</span>`,
  `<h1>Regular Expressions</h1>
<h2>Quantifiers</h2>
<p>Quantifiers tell you how many of the preceding token are allowed.</p>`,
  "No tags. Absolutely none.",
]);

const ex38 = `
👉 Exercise 38<br>

Substitute any multiple whitespace characters (including newlines) with a single space character.<br> 
Note: replace the backslash notation with the actual character (tab for \\t and newline for \\n)<br> 
see examples from table<br>
first: should return 'hello, my name is Shonda'<br>
second: should return 'it's the most wonderful time of the year'<br>
third:

- 'no_multipleWhitespace__at____all' should return 'no_multipleWhitespace__at____all'<br>
  
'
`;
renderRegexSubstitution("c9", `${ex38}`, /\s+/gm, " ", [
  `hello,\t   my   name is  Shonda`,
  `it's   the\n\n      most   wonderful\t\t\t time\n      of the\tyear`,
  `no_multipleWhitespace__at____all`,
]);
const ex39 = `
👉 Exercise 39<br>

Strip off any whitespace characters from the beginning or end of a string, but let whitespace in the middle stand. You may assume single-line strings.
Note: This one is tricky! How do you keep the "middle" part from gobbling up the outer whitespace, and yet still respect spaces in the middle?<br> 
see examples from table<br>
<pre>   leading and trailing    \\n\\n</pre> should return 'leading and trailing'<br>
<pre>only trailing space!   \\t</pre> should return 'only trailing space!'<br>
<pre>\\n"Get to the back of the ship!" Tom said sternly.\\n</pre> should return '"Get to the back of the ship!" Tom said sternly.'<br>
<pre>Do not launch me out of the atmosphere please!</pre> should return 'Do not launch me out of the atmosphere please!'<br>
  
'
`;
renderRegexSubstitution("c9", `${ex39}`, /^\s+|\s+$/gs, "", [
  `   leading and trailing    \n\n`,
  `only trailing space!   \t`,
  `\n"Get to the back of the ship!" Tom said sternly.\n`,
  `Do not launch me out of the atmosphere please!`,
]);
const ex40 = `
👉 Exercise 40<br>

Switch a list of names (separated by newlines) from "first last" to "last, first". Assume only each line has only two words, each made up of word characters, '-' or '''. 
<br>
- '''
  Indira Ghandi<br>
  Morgan Freeman<br>
  Justin Finch-Fletchley<br>
  Flannery O'Connor<br>
  '''<br>
  should return <br>
  '''<br>
  Ghandi, Indira<br>
  Freeman, Morgan<br>
  Finch-Fletchley, Justin<br>
  O'Connor, Flannery<br>
  '''<br>
- 'Indira Ghandi' should return 'Ghandi, Indira'<br>
- 'Pele' should return 'Pele'<br>

'
`;
renderRegexSubstitution("c9", `${ex40}`, /([\w-']+)\s([\w-']+)/gm, "$2, $1", [
  `Indira Ghandi
Morgan Freeman
Justin Finch-Fletchley
Flannery O'Connor`,
  `Indira Ghandi`,
  `Pele`,
]);

const ex41 = `
👉 Exercise 41<br>

Building on the last exercise, put last name first even if there are more than two words in the name (you may assume last name is only the last word).
<br>
All of the Exercises in the previous exercise should return the same strings as shown above.<br>
- '''
Flannery O'Connor<br>
Carlos Alberto Torres<br>
Harriet Beecher Stowe<br>
  '''<br>
  should return <br>
  '''<br>
O'Connor, Flannery<br>
Torres, Carlos Alberto<br>
Stowe, Harriet Beecher<br>
  '''
  '
`;
renderRegexSubstitution("c9", `${ex41}`, /^([\w-']+.*?)\s([\w-']+)$/gm, "$2, $1", [
  `Indira Ghandi
Morgan Freeman
Justin Finch-Fletchley
Flannery O'Connor`,
  `Indira Ghandi`,
  `Pele`,
  `Flannery O'Connor
Carlos Alberto Torres
Harriet Beecher Stowe`
]);
