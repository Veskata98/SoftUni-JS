// 2.	Armies
// Write a function that stores information about an army leader and his armies.
// The input will be an array of strings. The strings can be in some of the following formats:
// "{leader} arrives" – add the leader (no army)
// "{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists)
// "{army name} + {army count}" – if the army exists somewhere add the count
// "{leader} defeated" – delete the leader and his army (if he exists)
// When finished reading the input sort the leaders by total army count in descending.
// Then each army should be sorted by count in descending.

// Output
// Print in the following format:
// "{leader one name}: {total army count}
// >>> {armyOne name} - {army count}
// >>> {armyTwo name} - {army count}
//  …
// {leader two name}: {total army count}
// …"

// Constrains
// •	The new leaders will always be unique
// •	When adding a new army to the leader, the army will be unique

function armies(arr) {
  let armies = [];
  for (const el of arr) {
    if (el.includes("arrives")) {
      let leader = el.split(" ").slice(0, -1).join(" ");
      if (!armies.some((searchedLeader) => searchedLeader.leader === leader)) {
        let armyObjConstructor = {
          leader: leader,
          totalCount: 0,
        };
        armies.push(armyObjConstructor);
      }
    } else if (el.includes("defeated")) {
      let leader = el.split(" ").slice(0, -1).join(" ");
      if (
        armies.findIndex(
          (leaderToDefeat) => leaderToDefeat.leader === leader
        ) >= 0
      ) {
        let index = armies.findIndex(
          (leaderToDefeat) => leaderToDefeat.leader === leader
        );
        armies.splice(index, 1);
      }
    } else if (el.includes(":")) {
      let leaderToSearch = el.split(":").shift();
      let army = el.split(":").pop().split(", ").shift().trim();
      let armyCount = +el.split(":").pop().split(", ").pop();
      if (armies.some((armyElement) => armyElement.leader === leaderToSearch)) {
        let index = armies.findIndex(
          (armyElement) => armyElement.leader === leaderToSearch
        );
        armies[index][army] = armyCount;
        armies[index].totalCount += armyCount;
      }
    } else {
      let [armyToSearch, armyToAdd] = el.split(" + ");
      armyToAdd = +armyToAdd;
      let index = -1;
      for (let i = 0; i < armies.length; i++) {
        if (armies[i].hasOwnProperty(armyToSearch)) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        armies[index][armyToSearch] += armyToAdd;
        armies[index].totalCount += armyToAdd;
      }
    }
  }
  armies.sort((a, b) => b.totalCount - a.totalCount);
  for (const army of armies) {
    console.log(army.leader + ": " + army.totalCount);
    let keys = Object.keys(army)
      .slice(2)
      .sort((a, b) => army[b] - army[a]);
    for (const key of keys) {
      console.log(`>>> ${key} - ${army[key]}`);
    }
  }
}

armies([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
