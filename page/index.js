function renderRegexTest(
  containerId,
  title,
  regex,
  testStrings,
  ismatchAll = false,
  animateTest = true,
  ignoreEmpty = false,
  printCl = false
) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  const section = document.createElement("section");
  section.innerHTML = `<h2>${title} &mdash; <code class="re">${displayRegex(
    regex
  )}</code></h2>`;

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.innerHTML = `
      <tr>
        <th>Test String</th>
        <th>Matched?</th>
        <th>Matches</th>
      </tr>`;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  if (!ismatchAll) {
    testStrings.forEach((str) => {
      const re = new RegExp(regex);
      const isMatch = re.test(str);

      const matches = isMatch
        ? str.match(re).map((s_match) => {
            if (!ignoreEmpty) {
              if (s_match.match(/^$/gm)) {
                return `<span class='empty-background'></span>`;
              } else {
                return `${s_match}`;
              }
            } else {
              return `${s_match}`;
            }
          })
        : [];
      if (printCl) {
        console.log(matches);
      }
      const and_matches = isMatch
        ? matches.join("<span class='mspan'>and</span>")
        : "";

      const final_matches = animateString(and_matches);

      const tr = document.createElement("tr");

      const animated = animateTest ? `<pre>${animateString(str)}</pre>` : str;

      tr.innerHTML = `
          <td>${animated}</td>
          <td class="${isMatch ? "match" : "no-match"}">${isMatch}</td>
          <td>${isMatch ? final_matches : ""}</td>`;
      tbody.appendChild(tr);
    });
  }

  if (ismatchAll) {
    testStrings.forEach((str) => {
      const re = new RegExp(regex);
      const isMatch = re.test(str);

      const matches = isMatch
        ? [...str.matchAll(regex)].map((s_match) => {
            let full_match = s_match[0];
            if (full_match.match(/^$/gm)) {
              return `<span class='empty-background'></span>`;
            } else {
              if (s_match.length > 1) {
                let groups = {};
                if (s_match.groups) {
                  groups = s_match.groups;
                } else {
                  for (let i = 1; i < s_match.length; i++) {
                    groups[i] = s_match[i];
                  }
                }
                groups.fullMatch = full_match;
                return groups;
              } else {
                return full_match;
              }
            }
          })
        : [];

      let and_matches = "";
      for (let i = 0; i < matches.length; i++) {
        // console.log(`i: ${i}, value: ${typeof matches[i]}`);
        let v = matches[i];
        Object.entries(v).map(([key, value]) => {
          if (key === "fullMatch" && key && value) {
            and_matches += v.fullMatch;
          }
        });
        //handle groups
        Object.entries(v).map(([key, value]) => {
          if (key !== "fullMatch" && key && value) {
            and_matches += "__Group_" + key + "_EndGroup__" + value;
          }
        });
        if (i + 1 < matches.length) {
          and_matches += "<span class='mspan'>and</span>";
        }
      }

      const final_matches = animateString(and_matches, true);

      const tr = document.createElement("tr");
      const animated = animateTest ? `<pre>${animateString(str)}</pre>` : str;
      tr.innerHTML = `
          <td>${animated}</td>
          <td class="${isMatch ? "match" : "no-match"}">${isMatch}</td>
          <td>${isMatch ? final_matches : ""}</td>`;
      tbody.appendChild(tr);
    });
  }

  table.appendChild(tbody);
  section.appendChild(table);
  container.appendChild(section);
}

function animateString(str, usegroups = false) {
  const tabHandeledStr = handleTab(str);
  const spaceHandledStr = handleSpace(tabHandeledStr);
  if (usegroups) {
    const groupHandledStr = handleGroupe(spaceHandledStr);
    return groupHandledStr;
  } else {
    return spaceHandledStr;
  }
}

function handleTab(str) {
  const parts = str
    .split("\t")
    .map((part, index) => {
      // For every tab, replace it with a background image
      if (index > 0) {
        return `<span class="tab-background"></span>${part}`;
      }
      return part;
    })
    .join("");

  return parts;
}

function handleSpace(str) {
  const modifiedStr = str
    .replace(/<span class="tab-background"><\/span>/g, "__TAB_BACKGROUND__")
    .replace(/<span class='mspan'>and<\/span>/g, "__MSPAN__")
    .replace(/<span class='empty-background'><\/span>/g, "__EMPTY__");

  const parts = modifiedStr
    .split(" ")
    .map((part, index) => {
      if (index > 0) {
        return `<span class="space-background"></span>${part}`;
      }
      return part;
    })
    .join("");

  return parts
    .replace(/__TAB_BACKGROUND__/g, '<span class="tab-background"></span>')
    .replace(/__MSPAN__/g, "<span class='mspan'>and</span>")
    .replace(/__EMPTY__/g, "<span class='empty-background'></span>");
}

function handleGroupe(str) {
  return str.replace(/__Group_(.*?)_EndGroup__/g, (match, groupNum) => {
    return `<span class="mgrp">Group ${groupNum}</span>`;
  });
}

function generateCollapsibleContainer(id, headingText, isOpen = false) {
  const container = document.createElement("details");
  container.id = id;

  if (isOpen) {
    container.setAttribute("open", "true");
  }

  const summary = document.createElement("summary");
  summary.textContent = headingText;
  container.appendChild(summary);

  const heading = document.createElement("h1");
  heading.textContent = headingText;
  container.appendChild(heading);

  document.body.appendChild(container);
}

//?
const questionMarkQuantifier =
  "<span class='questionMarkQuantifier'>Zero Or One</span>";
//*
const asteriskQuantifier =
  "<span class='asteriskQuantifier'>Zero Or More</span>";
//+
const plusQuantifier = "<span class='plusQuantifier'>One Or More</span>";
// Negation
const negation = "<span class='red'>Not</span>";

//Boundaries
//^
const caretSign = "<span class='caretSign'>Must Start With</span>";
//$
const dollerSign = "<span class='dollerSign'>Must End With</span>";

// |
const pipeSign = "<span class='pipeSign'>Or</span>";

function renderRegexSubstitution(
  containerId,
  title,
  regex,
  replacement,
  testStrings,
  animateTest = true
) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  // Format the replacement string for display
  let replacementDisplay = replacement;
  if (typeof replacement === "function") {
    replacementDisplay = "<br>" + replacement;
  }

  const section = document.createElement("section");
  section.innerHTML = `<h2>${title} &mdash; <code class="re">${displayRegex(
    regex
  )}</code> → <code class="replacement">${replacementDisplay}</code></h2>`;

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.innerHTML = `
      <tr>
        <th>Test String</th>
        <th>Matched?</th>
        <th>Result After Substitution</th>
        <th>Replaced Parts</th>
      </tr>`;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  testStrings.forEach((str) => {
    // Create a fresh RegExp to ensure lastIndex is reset
    const re = new RegExp(regex);
    const isMatch = re.test(str);

    // Store original matched parts and groups before replacement
    const matchDetails = [];
    if (isMatch) {
      // Create a new RegExp instance to start fresh
      const matchRe = new RegExp(regex);

      Array.from(str.matchAll(matchRe)).forEach((matchResult) => {
        processMatchResult(matchResult, matchDetails);
      });
    }

    // Perform the substitution
    const result = str.replace(regex, replacement);

    // Create visual representation of replaced parts
    let replacedPartsHtml = "";
    if (matchDetails.length > 0) {
      replacedPartsHtml = matchDetails
        .map((detail) => {
          let html = `<div class="replaced-item"><span class="replaced-part">${detail.fullMatch}</span>`;

          // Show numbered group information if available
          if (detail.groups && detail.groups.length > 0) {
            html += " <br>with groups: ";
            detail.groups.forEach((group) => {
              html += `<span class="mgrp">$${group.number}: ${group.value}</span> `;
            });
          }

          // Show named group information if available
          if (Object.keys(detail.namedGroups).length > 0) {
            html += " <br>with named groups: ";
            for (const [name, value] of Object.entries(detail.namedGroups)) {
              html += `<span class="mgrp">Group ${name}: ${value}</span> `;
            }
          }

          // For function replacements, show the match index
          if (typeof replacement === "function") {
            html += `<br><span class="match-index">at index: ${detail.index}</span>`;
          }

          html += `</div>`;
          return html;
        })
        .join(`<span class='mspan'>and</span>`);
    }

    const tr = document.createElement("tr");
    const animated = animateTest ? `<pre>${animateString(str)}</pre>` : str;
    const resultAnimated = animateTest
      ? `<pre>${animateString(result)}</pre>`
      : result;

    tr.innerHTML = `
        <td>${animated}</td>
        <td class="${isMatch ? "match" : "no-match"}">${isMatch}</td>
        <td>${resultAnimated}</td>
        <td>${replacedPartsHtml}</td>`;
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  section.appendChild(table);
  container.appendChild(section);
}

// Helper function to process a match result
function processMatchResult(matchResult, matchDetails) {
  const detail = {
    fullMatch: matchResult[0],
    groups: [],
    namedGroups: {},
    index: matchResult.index,
  };

  // Handle numbered capture groups
  for (let i = 1; i < matchResult.length; i++) {
    if (matchResult[i] !== undefined) {
      detail.groups.push({
        number: i,
        value: matchResult[i],
      });
    }
  }

  // Handle named capture groups if they exist
  if (matchResult.groups) {
    // Track which numbered groups have corresponding named groups
    const numberedGroupsToRemove = new Set();

    for (const [name, value] of Object.entries(matchResult.groups)) {
      if (value !== undefined) {
        detail.namedGroups[name] = value;

        // Find any numbered group with the same value
        for (let i = 0; i < detail.groups.length; i++) {
          if (detail.groups[i].value === value) {
            numberedGroupsToRemove.add(i);
          }
        }
      }
    }

    // Remove numbered groups that have corresponding named groups
    if (numberedGroupsToRemove.size > 0) {
      detail.groups = detail.groups.filter(
        (_, index) => !numberedGroupsToRemove.has(index)
      );
    }
  }

  matchDetails.push(detail);
}

function displayRegex(regex) {
  let regexStr = regex.toString();
  return regexStr.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
