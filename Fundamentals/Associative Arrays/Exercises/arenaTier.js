// 9.	*Arena Tier
// Pesho is a pro gladiator, he is struggling to become master of the Arena.

// You will receive several input lines in one of the following formats:
// "{gladiator} -> {technique} -> {skill}"
// "{gladiator} vs {gladiator}"

// The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator.
// When you receive a gladiator and his technique and skill, add him to the gladiator pool,
// if he isn't present, else add his technique or update his skill, only if the current technical skill is lower than the new value.
// If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
// Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
// If they don't have techniques in common, the duel isn't happening and both continue in the Season.
// You should end your program when you receive the command "Ave Cesar".
// At that point, you should print the gladiators, ordered by total skill in descending order,
// then ordered by name in ascending order. Foreach gladiator prints their technique and skill ordered descending,
// then ordered by technique name in ascending order.

// Input / Constraints
// You will receive an array of strings as a parameter to your solution.
// •	The input comes in the form of commands in one of the formats specified above.
// •	Gladiator and technique will always be one-word string, containing no whitespaces.
// •	Skill will be an integer in the range [0, 1000].
// •	There will be no invalid input lines.
// •	The program ends when you receive the command "Ave Cesar".

// Output
// •	The output format for each gladiator is:
// "{gladiator}: {totalSkill} skill"
// "- {technique} <!> {skill}"

function arenaTier(arr) {
  let gladiators = {};
  arr.forEach((line) => {
    if (line === "Ave Cesar") {
      return;
    } else if (line.includes(" -> ")) {
      let [name, technique, skill] = line.split(" -> ");
      skill = +skill;
      if (!gladiators.hasOwnProperty(name)) {
        gladiators[name] = { [technique]: skill };
      } else {
        if (!gladiators[name].hasOwnProperty(technique)) {
          gladiators[name][technique] = skill;
        } else {
          if (gladiators[name][technique] < skill) {
            gladiators[name][technique] = skill;
          }
        }
      }
    } else if (line.includes(" vs ")) {
      let [gladiator1, gladiator2] = line.split(" vs ");
      if (
        gladiators.hasOwnProperty(gladiator1) &&
        gladiators.hasOwnProperty(gladiator2)
      ) {
        let gladiator1Skills = Object.keys(gladiators[gladiator1]);
        let gladiator2Skills = Object.keys(gladiators[gladiator2]);

        if (
          gladiator1Skills.some((technique) =>
            gladiator2Skills.includes(technique)
          )
        ) {
          let gladiator1Totalvalue = Object.values(
            gladiators[gladiator1]
          ).reduce((a, b) => a + b);

          let gladiator2Totalvalue = Object.values(
            gladiators[gladiator2]
          ).reduce((a, b) => a + b);
          if (gladiator1Totalvalue < gladiator2Totalvalue) {
            delete gladiators[gladiator1];
          } else if (gladiator1Totalvalue > gladiator2Totalvalue) {
            delete gladiators[gladiator2];
          }
        }
      }
    }
  });
  for (const key in gladiators) {
    let totalCount = Object.values(gladiators[key]).reduce((a, b) => a + b);
    gladiators[key].totalCount = totalCount;
  }
  Object.entries(gladiators)
    .sort(
      (a, b) => b[1].totalCount - a[1].totalCount || a[0].localeCompare(b[0])
    )
    .forEach((gladiator) => {
      console.log(`${gladiator[0]}: ${gladiator[1].totalCount} skill`);
      delete gladiator[1].totalCount;
      Object.entries(gladiator[1])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((skill) => console.log(`- ${skill[0]} <!> ${skill[1]}`));
    });
}

arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
