function test1(array) {
  let resultArray = [];
  for (i = 0; i < array.length - 2; i++) {
    const newArray = [array[i], array[i + 1], array[i + 2]];

    if (
      (newArray[0] > newArray[1] && newArray[1] < newArray[2]) ||
      (newArray[0] < newArray[1] && newArray[1] > newArray[2])
    ) {
      resultArray.push(1);
    } else {
      resultArray.push(0);
    }
  }
  return resultArray;
}
test1([1, 4, 5, 8, 9, 2, 5, 9]);

function test2(matrix) {
  let resultArray = [];
  let newArray = [];

  const getAndCheckNewArray = () => {
    matrix.forEach((array) => {
      newArray.push(array[0], array[1], array[2]);
      array.shift();
    });

    resultArray.push(newArray.sort().join("").split().includes("123456789"));

    newArray = [];

    if (matrix[0].length >= 3) {
      getAndCheckNewArray();
    } else {
      return 
    }
  
  };
  getAndCheckNewArray();
 return resultArray
}
console.log(test2([
  [1, 2, 3, 8, 2, 4],
  [4, 5, 6, 7, 2, 1],
  [7, 8, 9, 4, 7, 3],
]))

function test3(stringsArray, alingsArray, counterSymbols) {
  let resultArray = [];
  let nextString = { contentString: [], alignString: null };

  function shortingString(string) {
    if (string.contentString.join(" ").length > counterSymbols) {
      nextString.contentString.unshift(
        string.contentString[string.contentString.length - 1]
      );
      (nextString.alignString = string.alignString), string.contentString.pop();

      shortingString(string);
    } else {
      lineAlignment(string.contentString.join(" "), string.alignString);
      if (nextString.contentString.length > 0) {
        const currentString = nextString;
        nextString = { contentString: [], alignString: null };
        shortingString(currentString);
      }
    }
  }

  function lineAlignment(string, alingParam) {
    if (string.length < counterSymbols) {
      string = alingParam == "LEFT" ? string + " " : " " + string;
      lineAlignment(string, alingParam);
    } else {
      resultArray.push("*" + string + "*");
    }
  }

  stringsArray.map((string, index) => {
    const currentItem = {
      contentString: string,
      alignString: alingsArray[index],
    };

    shortingString(currentItem);
  });
  resultArray.push("*".repeat(counterSymbols + 2));
  resultArray.unshift("*".repeat(counterSymbols + 2));
  return resultArray
}
console.log( test3(
  [
    ["Hello", "world"],
    ["Braead", "came", "to", "dinner", "with", "us"],
    ["He", "loves", "tacos"],
  ],
  ["RIGHT", "RIGHT", "LEFT"],
  16
))
