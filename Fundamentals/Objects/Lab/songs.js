// 6.	Songs
// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs.
// Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}",
// and the last element will be typeList / "all".

// Print only the names of the songs, which have the same typeList (obtained as the last parameter).
// If the value of the last element is "all", print the names of all the songs.

function songs(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let songsCount = arr.shift();
  let typeToPrint = arr.pop();
  for (let i = 0; i < songsCount; i++) {
    let [type, name, time] = arr[i].split("_");
    let song = new Song(type, name, time);
    if (type === typeToPrint || typeToPrint === "all") {
      console.log(song.name);
    }
  }
}

console.log(songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]));
