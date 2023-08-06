// Problem 1: Let’s play a mind game
// This function will take a positive number as its parameter and return the number multiplying by 3 and adding 10 and dividing by 2,then subtracting by 5.
function mindGame(positiveNum) {
  if (typeof positiveNum === "number" && positiveNum >= 0) {
    const result = (positiveNum * 3 + 10) / 2 - 5;
    return result;
  } else {
    return "input should be positive number";
  }
}

// Problem 2: Finding even or odd
// This function will take string as its parameter and return odd or even according the string length means if string length even return even otherwise return odd.
function evenOdd(string) {
  if (typeof string === "string") {
    const numberOfCharacter = string.length;
    if (numberOfCharacter % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return "Input should be string.";
  }
}

// Problem 3: Is Less or Greater than seven
// This function will take a number as its parameter and make difference between the parameter and 7 if the difference less than 7 it will return the difference otherwise it will return the double of the parameter.
function isLGSeven(num) {
  if (typeof num === "number") {
    const difference = num - 7;
    if (difference < 7) {
      return difference;
    } else {
      return num * 2;
    }
  } else {
    return "Input should be number.";
  }
}

// Problem 4: Finding Bad data
// This function will take an array as its parameter and return  total negative elements of the array.
function findingBadData(arr) {
  let badData = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= 0) {
        badData.push(arr[i]);
      }
    }
  } else {
    return "Input should be an array.";
  }
  let numberOfBadData = badData.length;
  return numberOfBadData;
}

// Problem 5: Convert your gems into diamond
// This function will take 3 numbers as its parameter that is called gems and convert the gems into diamond as their worth and then total the all diamond.If total diamond gater than 2000 it will return the surface part otherwise it will return the total diamond
function gemsToDiamond(gemsOfFirstFriend, gemsOfSecondFriend, gemsOfThirdFriend) {
  if (typeof gemsOfFirstFriend && typeof gemsOfSecondFriend && typeof gemsOfThirdFriend === "number") {
    const diamondOfFirstFriend = gemsOfFirstFriend * 21;
    const diamondOfSecondFriend = gemsOfSecondFriend * 32;
    const diamondOfThirdFriend = gemsOfThirdFriend * 43;
    const totalDiamond = diamondOfFirstFriend + diamondOfSecondFriend + diamondOfThirdFriend;
    if (totalDiamond > 1000 * 2) {
      const remainingDiamond = totalDiamond - 2000;
      return remainingDiamond;
    } else {
      return totalDiamond;
    }
  } else if (typeof gemsOfFirstFriend && typeof gemsOfSecondFriend && typeof gemsOfThirdFriend === "undefined") {
    return "You should input 3 numbers.";
  } else {
    return "Input should be number.";
  }
}
// ==========end==========
