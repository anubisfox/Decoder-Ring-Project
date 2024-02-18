// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let table = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];

    if (encode) {
      let inputArray = input.split("");
      let fixedInputArray = inputArray.map((string) => {
        let lowCase = string.toLowerCase();
        if (lowCase === "i" || lowCase === "j") {
          return "(i/j)";
        }
        return lowCase;
      });

      let xCords = [];
      let yCords = fixedInputArray.map((letter) => {
        for (let i = 0; i < table.length; i++) {
          const row = table[i];
          if (row.find((alpha) => alpha === letter)) {
            xCords.push(i + 1);
            return row.indexOf(letter) + 1;
          }
        }
      });

       result = xCords.reduce((acc, xValue, index) => {
        let pair = `${yCords[index]}${xValue}`;
        if (pair === '65') {
          pair = " ";
        }
        acc.push(pair);
        return acc;
      }, []);
    }

    if(!encode) {
      let spacesAdded = input.replace(" ", 65);
      if (spacesAdded.length % 2 !== 0) return false;
      let cordinates = spacesAdded.match(/..?/g);
       result = cordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return table[rowIndex][columnIndex];
      });
    }
    return result.join('');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
