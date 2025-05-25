generateCollapsibleContainer("c8", "8. Capture Groups");

renderRegexTest(
  "c8",
  `Match group to capture ${plusQuantifier} of non-newline characters <br>
   Followed by Literal . character <br>
    ${dollerSign} one option of the following (<br>
   'png' ${pipeSign} 'jp' and ${questionMarkQuantifier} and  e  followed by 'g' ${pipeSign} 'pdf')<br>
   this regex provide the full match which you see in the table, and two groups one for filename and the other for extention`,
  /(.+)\.(png|jpe?g|pdf)$/gm,
  [
    "hegre this is test",
    "",
    "image.png",
    "photo.jpg\nbad.pdf",
    "vacation_photo",
    "document.pdfx",
    "document.pdf",
    "va.cation_photo.jpeg",
    "fil12 @asdc e1.png",
    "pic.",
    "image.txt",
    "cov 546# er_letter.pdf",
    "pro.file_pic.jpeg",
    "logo.png",
    "report_v1.pdf",
    "testf65465 ile.jpeg1",
    "holiday_snap.jpg",
    "image.png.txt",
    ".pdf",
    " .pdf",
  ],
  true
);

renderRegexTest(
  "c8",
  `Match ${plusQuantifier} of non-newline characters <br>
     Followed by Literal . character <br>
     ${dollerSign} one option of the following (<br>
     'png' ${pipeSign} 'jp' and ${questionMarkQuantifier} and  e  followed by 'g' ${pipeSign} 'pdf')<br>
     The only difference is that the first regex captures the file name (the part before the dot), while the second does not. It just have the same full matches and the group of extention`,
  /.+\.(png|jpe?g|pdf)$/gm,
  [
    "hegre this is test",
    "",
    "file image.png",
    "photo.jpg",
    "vacation_photo",
    "document.pdfx",
    "document.pdf",
    "va.cation_photo.jpeg",
    "fil12 @asdc e1.png",
    "pic.",
    "image.txt",
    "cov 546# er_letter.pdf",
    "pro.file_pic.jpeg",
    "logo.png",
    "report_v1.pdf",
    "testfile.jpeg1",
    "holiday_snap.jpg",
    "image.png.txt",
    ".pdf",
    " .pdf",
  ],
  true
);

renderRegexTest(
  "c8",
  `Match group to capture which ${plusQuantifier} of non-newline characters <br>
     Followed by Literal . character <br>
      ${dollerSign} Non-Capturing Group which match one option of the following (<br>
     'png' ${pipeSign} 'jp' and ${questionMarkQuantifier} and  e  followed by 'g' ${pipeSign} 'pdf')<br>
     this regex provide the full match which you see in the table, and two groups one for filename and the other for extention`,
  /(.+)\.(?:png|jpe?g|pdf)$/gm,
  [
    "hegre this is test",
    "",
    "image.png",
    "photo.jpg",
    "vacation_photo",
    "document.pdfx",
    "document.pdf",
    "va.cation_photo.jpeg",
    "fil12 @asdc e1.png",
    "pic.",
    "image.txt",
    "cov 546# er_letter.pdf",
    "pro.file_pic.jpeg",
    "logo.png",
    "report_v1.pdf",
    "testf65465 ile.jpeg1",
    "holiday_snap.jpg",
    "image.png.txt",
    ".pdf",
    " .pdf",
  ],
  true
);

renderRegexTest(
  "c8",
  `Match html tags elements start with < and group to capture which ${plusQuantifier} of word characters <br>
     Followed by > and ${asteriskQuantifier} of any characters except newlines (LAZY) find few as possible of non-newline characters<br>
     Followed by < and literal \/ closing tag and the same as first group number one \\1 <br> 
     Note: as html render the Test String [the raw test under the renderd] and in matches Full match also rendered so you have to know that it match the raw`,
  /<(\w+)>.*?<\/\1>/gm,
  [
    "hegre this is test",
    "",
    "image.png",
    "<div>Some content</div><br>&ltdiv&gtSome content&lt/div&gt",
    "<p>Paragraph text</p><br>&ltp&gtParagraph text&lt/p&gt",
    `<a href="#">Link</a><br>&lta href=&#39;#&#39;&gtLink&lt/a&gt`,
    "<h1>Heading 1</h1><br>&lth1&gtHeading 1&lt/h1&gt",
    "<ul><li>Item 1</li><li>Item 2</li></ul><br>&ltul&gt&ltli&gtItem 1&lt/li&gt&ltli&gtItem 2&lt/li&gt&lt/ul&gt",
    "<strong>Bold text</strong><br>&ltstrong&gtBold text&lt/strong&gt",
    "<em>Italic text</em><br>&ltem&gtItalic text&lt/em&gt",
    "<span class='class'>Text</span><br>&ltspan class=&#39;class&#39;&gtText&lt/span&gt",
    "<b>Bold</b><br>&ltb&gtBold&lt/b&gt",
    "<i>Italic</i><br>&lti&gtItalic&lt/i&gt",
    "<code>var a = 1;</code><br>&ltcode&gtvar a = 1;&lt/code&gt",
  ],
  true,
  false
);

renderRegexTest(
  "c8",
  `Match group (named rootname) to capture ${plusQuantifier} of non-newline characters <br>
   Followed by Literal . character <br>
   group (named extension) to capture ${dollerSign} one option of the following (<br>
   'png' ${pipeSign} 'jp' and ${questionMarkQuantifier} and  e  followed by 'g' ${pipeSign} 'pdf')`,
  /(?<rootname>.+)\.(?<extension>png|jpe?g|pdf)$/gm,
  [
    "hegre this is test",
    "",
    "image.png",
    "photo.jpg\nbad.pdf",
    "vacation_photo",
    "document.pdfx",
    "document.pdf",
    "va.cation_photo.jpeg",
    "fil12 @asdc e1.png",
    "pic.",
  ],
  true
);

const ex33 = `
👉 Exercise 33<br>

Match strings that start and end with the same word. We do want to capture the word. You may assume all strings do not contain newlines.
<br>
'time time time' should match, captured word 'time'<br>
'she said no one is as lovely as she' should match, captured word 'she'<br>
'madam I'm Adam' should not match<br>
'ow, I don't know' should not match<br>
'
`;
renderRegexTest(
  "c8",
  `${ex33}`,
  /^(\w+).*?\b\1$/g,
  [
    `time time time`,
    `she said no one is as lovely as she`,
    `madam I'm Adam`,
    `ow, I don't know`,
  ],
  true
);

const ex34 = `
👉 Exercise 34<br>

Given a list of files in a directory (separated by newlines), identify which files have a vi swap file.<br>vi swap files look like this: '.filename.swp'. So if there were a file in the directory called '.favorite_regexes.txt.swp', you would want to include 'favorite_regexes.txt' in your results.
<br>
'
    .favorite_regexes.txt.swp<br>
    .practice.py.swp<br>
    .DS_Store<br>
    favorite_regexes.txt<br>
    practice.py<br>
    zippy.py<br>
    '<br>
     should match <br>
      -match1--> 'favorite_regexes.txt'<br>
      -match2--> 'practice.py'<br>

<br>
'   file1<br>
    file2<br>
'
    should **not** match<br>
'
`;
renderRegexTest(
  "c8",
  `${ex34}`,
  /^\.(.*)(?:\.swp)$/gm,
  [
    `
.favorite_regexes.txt.swp
.practice.py.swp
.DS_Store
favorite_regexes.txt
practice.py
zippy.py`,
    `
file1
file2`,
  ],
  true
);

const ex35 = `
👉 Exercise 35<br>

Given data shaped like this:<br>
'<br>
03Sep2020 04:55:38 This is a message<br>
03Oct2020 23:44:01 This is another message<br>
'<br>
Extract:
<br>
the day as a group named day<br>
the month as “month”<br>
the year as “year”<br>
the time as a group named “time”<br>
the message as a group named “message”<br>
<br>
NOTE: you do not need to validate the date and time (for example, you don’t need to confirm that the date has a valid month or that the time is valid for a 24 hr clock) -- you can assume the data is clean. Simply extract the parts.

the example above should match: <br>
-match1--> <br>'
day=03<br>
month=Sep<br>
year=2020<br>
time=04:55:38<br>
message=This is a message<br>
'<br>

-match2--> <br>'
day=30<br>
month=Oct<br>
year=2020<br>
time=23:44:01<br>
message=This is another message<br>
'<br>
`;
renderRegexTest(
  "c8",
  `${ex35}`,
  /(?<day>\d{2})(?<month>\w{3})(?<year>\d{4}) (?<time>[\d]{2}:[\d]{2}:[\d]{2}) (?<message>.*)/gm,
  [
    `
03Sep2020 04:55:38 This is a message
30Oct2020 23:44:01 This is another message`
  ],
  true
);
