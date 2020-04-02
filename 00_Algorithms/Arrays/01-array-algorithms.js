// Find the Highest number of an Array

const findMax = (numArr) => {
  let maxNum = 0;
  for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);

    if (numArr[i] > maxNum) {
      maxNum = numArr[i];
    }
    console.log(`maxNum = ${maxNum}`);
  }
  return `Highest Number is ${maxNum}`;
};

let array = [2, 5, 1, 7, 3, 8, 6];

console.log(findMax(array));