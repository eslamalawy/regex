//const re = /pattern/flags;
const re = /hey/g;  // no quantifier so it match to see it exactly once

printTest(re, "hey");
printTest(re, "h1ey");
printTest(re, "hy");
printTest(re, "heyy");


console.log("##########################################################################")

const re_with_quantifier = /he+y/g
printTest(re_with_quantifier, "hey");
printTest(re_with_quantifier, "hay");
printTest(re_with_quantifier, "heey");
printTest(re_with_quantifier, "heeeeeeeeeeeeeeeeeeeeeeeey");
printTest(re_with_quantifier, "heeeeeeeeeeeeeeeeeeeeeeee");
printTest(re_with_quantifier, "h1ey");
printTest(re_with_quantifier, "hy");
printTest(re_with_quantifier, "heyy");

console.log("##########################################################################")

const re_with_quantifier2 = /he?y/g
printTest(re_with_quantifier2, "hey");
printTest(re_with_quantifier2, "hay");
printTest(re_with_quantifier2, "heey");
printTest(re_with_quantifier2, "heeeeeeeeeeeeeeeeeeeeeeeey");
printTest(re_with_quantifier2, "heeeeeeeeeeeeeeeeeeeeeeee");
printTest(re_with_quantifier2, "h1ey");
printTest(re_with_quantifier2, "hy");
printTest(re_with_quantifier2, "heyy");


const re_question_mark = /kittens?!/g
printTest(re_question_mark, "kitten!");
printTest(re_question_mark, "kittens!");
printTest(re_question_mark, "kittenss!");

console.log("##########################################################################")

const re_with_quantifier3 = /he*y/g
printTest(re_with_quantifier3, "hey");
printTest(re_with_quantifier3, "hay");
printTest(re_with_quantifier3, "heey");
printTest(re_with_quantifier3, "heeeeeeeeeeeeeeeeeeeeeeeey");
printTest(re_with_quantifier3, "heeeeeeeeeeeeeeeeeeeeeeee");
printTest(re_with_quantifier3, "h1ey");
printTest(re_with_quantifier3, "hy");
printTest(re_with_quantifier3, "heyy");


const re_star = /Kittens!*/g
printTest(re_star, "kitten!");
printTest(re_star, "kittens!");
printTest(re_star, "Kitten!");
printTest(re_star, "Kittens!");
printTest(re_star, "Kittenssss");
printTest(re_star, "Kittenssss!");
printTest(re_star, "Kittens!!!! Kittenssss!");


  
function printTest(pattern, str) {
  console.log(
    "pattern: \t",
    pattern,
    "\t\t",
    str,
    "\t\t",
    testText(pattern, str),
    "\t\t",
    testText(pattern, str) ? str.match(pattern).join(" ") : ""
  );
}


function testText(pattern, str) {
  const result = new RegExp(pattern);
  return result.test(str);
}

