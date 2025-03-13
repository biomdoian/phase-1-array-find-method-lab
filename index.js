// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "1998", result: "W"},
    { year: "1997", result: "W"},
    { year: "1989", result: "L"}
  ];
  
  function superbowlWin(gameRecords) {
    const win = gameRecords.find((game) => game.result === "W");
    if (win) {
      return win.year;
    } else {
      return undefined;
    }
  }