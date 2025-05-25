# Regular Expressions Summary

After studying a complete regex course, I've created this guide along with a simple website featuring practical examples. 

Check it out: [![Netlify](https://img.shields.io/badge/Netlify-Deployed-blue?logo=netlify)](https://regex-eslam.netlify.app/)

## 📚 Table of Contents

1. [Explicit Characters and Quantifiers](#1-explicit-characters-and-quantifiers)
2. [Collections, Character Ranges, and Negation](#2-collections-character-ranges-and-negation)
3. [Whitespace Characters and String Boundaries](#3-whitespace-characters-and-string-boundaries)
4. [Character Classes](#4-character-classes)
5. [Flags](#5-flags)
6. [Greedy vs. Lazy Quantifiers](#6-greedy-vs-lazy-quantifiers)
7. [Multi-Character Strings Quantifiers and Options](#7-multi-character-strings-quantifiers-and-options)
8. [Capture Groups](#8-capture-groups)
9. [Substitution (Replace)](#9-substitution-replace)
10. [Lookarounds](#10-lookarounds)

---

## 1. Explicit Characters and Quantifiers

### Basic Quantifiers

| Quantifier | Description | Behavior |
|------------|-------------|----------|
| `?` | Zero or one times | Matches the previous token between zero and one times (greedy) |
| `*` | Zero or more times | Matches the previous token between zero and unlimited times (greedy) |
| `+` | One or more times | Matches the previous token between one and unlimited times (greedy) |

**Note:** If no quantifier is specified, it matches exactly once.

### Special Characters

- **Period (`.`)** - Matches any character except line terminators (`\n`)

### Characters That Need Escaping

These characters have special meaning in regex and must be escaped with backslash (`\`) to match them literally:

```
+ ? . { } [ ] ( ) ^ $
```

**Examples:**
```regex
\+ \? \. \{ \} \[ \] \( \) \^ \$
```

### Curly Brace Quantifiers `{}`

| Syntax | Description |
|--------|-------------|
| `{x,y}` | Between x and y times (inclusive) |
| `{x}` | Exactly x times |
| `{x,}` | x or more times |

**Examples:**
- `{1,3}` - Between one and three times
- `{3}` - Exactly three times  
- `{4,}` - Four or more times

---

## 2. Collections, Character Ranges, and Negation

### Collections

Square brackets `[]` match **one** of any specified characters:

```regex
[0123456789ABCDEF]  # Matches any single hexadecimal digit
[0-9A-F]+           # One or more hexadecimal digits (using ranges)
```

**Hexadecimal Reference:**
- Base 16 numbering system
- Digits: 0-9, A(10), B(11), C(12), D(13), E(14), F(15)

### Character Ranges

Use hyphen (`-`) inside collections to create ranges:

```regex
[0-9]    # Numbers 0 through 9
[A-Z]    # Uppercase letters A through Z
[a-z]    # Lowercase letters a through z
[0-9A-F] # Hexadecimal digits
```

### Negation

Use caret (`^`) as the **first character** inside collections for negation:

```regex
[^a-z4]  # Anything BUT lowercase letters a-z or the number 4
[^\.?!]  # Anything BUT period, question mark, or exclamation point
```

### Practical Example

```regex
/[A-Z][^\.?!]+[\.?!]/
```

**Breakdown:**
- `[A-Z]` - Exactly one capital letter
- `[^\.?!]+` - One or more characters that are NOT `.`, `?`, or `!`
- `[\.?!]` - Ends with one of: `.`, `?`, or `!`

**Note:** Period (`.`) needs escaping inside collections, but `?` and `!` don't.

---

## 3. Whitespace Characters and String Boundaries

### Whitespace Characters

Backslash (`\`) serves dual purposes:
1. **Escape special characters:** `\.` (literal period)
2. **Create special tokens:** `\t` (tab character)

| Token | Description |
|-------|-------------|
| `\t` | Tab character |
| `\n` | New line |
| `\r` | Carriage return |
| `\f` | Form feed |
| `\v` | Vertical tab |
| `\r\n` | Windows-style new line |

### Space Character

No backslash needed for regular spaces:

```regex
/ /      # Single space
/ +/     # One or more spaces
/ +.*/   # One or more spaces followed by any characters
```

### String Boundaries

| Anchor | Description |
|--------|-------------|
| `^` | Start of string |
| `$` | End of string |

**Important:** These don't match characters, they indicate position.

```regex
/^ha$/     # Matches only "ha" (entire string)
/^ +.*/    # Must start with one or more spaces
```

### Caret (`^`) Double Duty

1. **String boundary:** `^` (start of string)
2. **Negation:** `[^246]` (not 2, 4, or 6)

### Complete Example

```regex
/^[A-Z][^\.?!]+[\.?!]$/
```

**Breakdown:**
- `^[A-Z]` - Must start with a capital letter
- `[^\.?!]+` - One or more characters that are not `.`, `?`, or `!`
- `[\.?!]$` - Must end with `.`, `?`, or `!`

---

## 4. Character Classes

### Basic Character Classes

| Class | Description | Equivalent |
|-------|-------------|------------|
| `.` | Any character except newline | - |
| `\s` | Any whitespace character | `[\r\n\t\v\f ]` |
| `\S` | Any non-whitespace character | `[^\r\n\t\v\f ]` |
| `\d` | Any digit | `[0-9]` |
| `\D` | Any non-digit | `[^0-9]` |
| `\w` | Any word character | `[0-9A-Za-z_]` |
| `\W` | Any non-word character | `[^0-9A-Za-z_]` |

### Word Boundaries

| Boundary | Description |
|----------|-------------|
| `\b` | Word boundary |
| `\B` | Not a word boundary |

### Word Boundary Examples

```regex
\bcat\b   # Matches 'cat' in "a black cat" but not in "catatonic"
✅ it like this:        \W(=space)      \b      \W(=line terminator)

\bcat     # Matches 'cat' in "catfish"
✅ it like this:        \W(=start of the line)      \b      \w(=f)
✅ or default  :        \W      \b      \W

cat\b     # Matches 'cat' in "tomcat"
✅ it like this:        \w(=m)     \b      \W(=line terminator)
✅ or default  :        \W      \b      \W
```

**Word boundary conditions:**
- `\b` occurs between
  - `\W` and `\W` characters  (default)
  - `\W` and `\w` characters
  - `\w` and `\W` characters

- `\B` occurs when both sides are a word character
  - `\w` and `\w` characters

### Practical Examples

```regex
/^\s+/     # Find whitespace at beginning of string
/^\S+/     # Must start with non-whitespace characters
/^\d+/     # Must start with one or more digits
```

---

## 5. Flags

Flags modify how the regex engine interprets the pattern:

| Flag | Name | Description |
|------|------|-------------|
| `g` | Global | Match as many times as possible (not just once) |
| `m` | Multi-line | `^` and `$` match start/end of each line, not just string |
| `i` | Case-insensitive | Match both upper and lowercase letters |
| `s` | Single-line | `.` matches newline characters (treats string as single line) |

### Usage Examples

```regex
/pattern/g    # Global matching
/pattern/i    # Case-insensitive
/pattern/gim  # Multiple flags combined
```

---

## 6. Greedy vs. Lazy Quantifiers

### Understanding Greedy vs. Lazy

- **Greedy:** Take everything you can and still match
- **Lazy:** Take as little as you can to still match

### Default Behavior

```regex
/gre*/  # Greedy by default - matches as much as possible
```

### Making Quantifiers Lazy

Add `?` after the quantifier:

| Greedy | Lazy | Description |
|--------|------|-------------|
| `*` | `*?` | Zero or more (lazy) |
| `+` | `+?` | One or more (lazy) |
| `?` | `??` | Zero or one (lazy) |
| `{n,m}` | `{n,m}?` | Between n and m (lazy) |

### Practical Applications

**Sentence matching comparison:**

```regex
# Using character negation (previous approach)
/^[A-Z][^\.?!]+[\.?!]$/

# Using lazy quantifiers  
/^[A-Z].+?[\.?!]$/
```

**Lazy quantifier examples:**
- `.+?` - One or more characters (lazy)
- `.*?` - Zero or more characters (lazy)

Both will match minimal characters before the final punctuation.

---

## 7. Multi-Character Strings Quantifiers and Options

### Multi-Character Options

Use pipe (`|`) for "OR" logic with multi-character strings:

```regex
/kittens|foals|ducklings/  # Matches any of these three words
```

### Groups for Multi-Character Tokens

**Syntax:** Parentheses `()`

```regex
/I love (kittens|foals|ducklings)/  # "I love " + any of the three options
```

### Quantifiers with Groups

```regex
/(kittens)+/  # One or more occurrences of the string "kittens"
```

### Three Ways to Handle "kittens"

1. **No container:** `/kittens+/`
   - Quantifier applies only to last character ('s')
   - Matches: "kitten", "kittens", "kittenss", etc.

2. **Square brackets:** `/[kittens]+/`
   - Quantifier applies to character collection
   - Matches: one or more of any letters k, i, t, e, n, s

3. **Parentheses:** `/(kittens)+/`
   - Quantifier applies to entire group
   - Matches: "kittens", "kittenskittens", etc.

### Practical Example: Digital Clock (24-hour format)

**Requirements:**
- Hours: 0-23
- Minutes: 00-59

```regex
/(1?\d|2[0-3]):[0-5]\d/
```

**Breakdown:**
- `(1?\d|2[0-3])` - Hours group:
  - `1?\d` - Optional 1 + any digit (0-19)
  - `|` - OR
  - `2[0-3]` - 2 + digits 0-3 (20-23)
- `:` - Literal colon
- `[0-5]\d` - Minutes: first digit 0-5, second digit 0-9 (00-59)

### Collection Inside Group

```regex
/(W[0O]W)+/  # One or more of "WOW" or "W0W"
```

---

## 8. Capture Groups

### Basic Capture Groups

Groups `()` not only organize patterns but also **capture** matched text for later use.

### File Extension Example

Extract filename without extension:

```regex
/(.+)\.(png|jpe?g|pdf)/
```

**Breakdown:**
- `(.+)` - **Group 1:** Captures filename (one or more characters)
- `\.` - Literal dot
- `(png|jpe?g|pdf)` - **Group 2:** Captures extension
  - `png` OR `jp` + optional `e` + `g` OR `pdf`

### Non-Capturing Groups

When you need grouping for logic but don't want to capture:

**Syntax:** `(?:)`

```regex
/(.+)\.(?:png|jpe?g|pdf)/
```

- `(.+)` - **Group 1:** Captures filename  
- `(?:png|jpe?g|pdf)` - Groups for OR logic but doesn't capture

### Numbered Group References

Reference captured groups later in the same regex:

**Syntax:** `\1`, `\2`, `\3`, etc.

```regex
/<(\w+)>.*?<\/\1>/gm
```

**HTML tag matching breakdown:**
- `<(\w+)>` - Opening tag, captures tag name in Group 1
- `.*?` - Lazy match of content
- `<\/\1>` - Closing tag, references Group 1 (same tag name)

### Named Capture Groups

**Syntax:** `(?<name>)`

```regex
/(?<rootname>.+)\.(?<extension>png|jpe?g|pdf)/
```

**Benefits:**
- More readable than numbers
- Self-documenting code
- Easier maintenance

**References:**
- In regex: `\k<name>` (some platforms)
- In replacement: `$<name>` or `${name}`

---

## 9. Substitution (Replace)

### Basic Replacement

Replace matched patterns with fixed strings or references to captured groups.

### Simple Fixed Replacement

```regex
/kitten|puppy|piglet|foal|fawn|duckling|chick/
```
**Replace with:** `"cutie"`

### Group References in Replacement

```regex
/(kitten|puppy|piglet|foal|fawn|duckling|chick)/gm
```
**Replace with:** `$1` (references Group 1)

### Remove Characters

```regex
/[*_]/g
```
**Replace with:** `""` (empty string)

### Using Functions in Replacements

Instead of simple strings, use functions for dynamic replacements:

#### 1. Basic Function with Match Parameter

```regex
/\b(java|javascript|html|css)\b/gim
```

```javascript
function (match) {
  return match.toUpperCase();
}
```

#### 2. Function with Capture Groups

```regex
/(\d{3})-(\d{3})-(\d{4})/gm
```

```javascript
function (match, area, prefix, line) {
  return `+1 (${area}) ${prefix}-${line}`;
}
```

**Parameters:**
- `match` - Full matched text
- `area`, `prefix`, `line` - Individual captured groups

#### 3. Named Capture Groups in Replacement

```regex
/(?<month>\d{2})\/(?<day>\d{2})\/(?<year>\d{4})/gm
```

**Replace with:** `"Date: $<day>-$<month>-$<year>"`

**Benefits:**
- More readable than positional references
- Self-documenting replacements
- Easier to maintain complex patterns

---

## 10. Lookarounds

Lookarounds specify conditions without capturing them as part of the match. They're similar to boundary tokens (`^`, `$`, `\b`, `\B`) - they're part of the regex but don't correspond to characters in the match.

### Types of Lookarounds

| Type | Syntax | Description |
|------|--------|-------------|
| Positive Lookahead | `(?=)` | Must be followed by |
| Negative Lookahead | `(?!)` | Must NOT be followed by |
| Positive Lookbehind | `(?<=)` | Must be preceded by |
| Negative Lookbehind | `(?<!)` | Must NOT be preceded by |

### Lookahead Examples

#### Negative Lookahead
```regex
q(?!u)  # Match 'q' NOT followed by 'u'
```

#### Positive Lookahead  
```regex
q(?=u)  # Match 'q' that IS followed by 'u' (but don't include 'u' in match)
```

### Lookbehind Examples

#### Negative Lookbehind
```regex
(?<!a)b  # Match 'b' NOT preceded by 'a'
```
- ✅ Matches 'b' in: "bed", "debt"  
- ❌ Doesn't match 'b' in: "cab"

#### Positive Lookbehind
```regex
(?<=a)b  # Match 'b' that IS preceded by 'a' 
```
- ✅ Matches 'b' in: "cab"
- ❌ Doesn't match 'b' in: "bed", "debt"

### Practical Examples

#### USD Price Matching
```regex
/(?<=USD )\d+(?:\.\d\d)?$/mg
```

**Breakdown:**
- `(?<=USD )` - Must be preceded by "USD " (not included in match)
- `\d+` - One or more digits
- `(?:\.\d\d)?` - Optional non-capturing group for decimal and cents
- `$` - End of line

#### Capitalized Words (Not Sentence Starters)
```regex
/(?<!^)(?<![\.?!]"?\s+"?)[A-Z]\w*\b/
```

**Breakdown:**
- `(?<!^)` - NOT at beginning of line
- `(?<![\.?!]"?\s+"?)` - NOT preceded by sentence-ending punctuation + optional quotes + whitespace + optional quotes
- `[A-Z]\w*\b` - Capital letter + word characters + word boundary

### Important Notes

#### Dollar Sign in Lookaheads
```regex
/\w{3} \d\d(?= 00:00:00 something happened$)/
```

**Why `$` is inside the lookahead:**
- Lookaheads don't consume characters
- If `$` were outside, both the lookahead AND end-of-string would need to come immediately after the match
- This is impossible since lookaheads don't consume characters

#### Platform Limitations
Some platforms (like Python) only support **fixed-width** lookarounds:
- ❌ Variable quantifiers (`*`, `+`, `?`) not allowed
- ✅ Fixed quantifiers (`{3}`, `{2,4}`) are allowed
- This prevents performance issues with indeterminate matching

---

### Testing Your Regex

**Recommended Tools:**
- [RegexPal](https://www.regexpal.com/)
- [Regex101](https://regex101.com/)
- [RegExr](https://regexr.com/)

---

## 🤝 Contributing

Found an error or want to improve this guide? 

1. Fork the repository
2. Create your feature branch
3. Submit a pull request

## 📜 License

This educational content is provided under the MIT License. Feel free to use, modify, and share!

---

**Happy RegEx-ing! 🚀**

*Remember: Regular expressions are powerful but can be complex. Start simple and build up your patterns gradually.*
