//My Quick version:
var arrayOne = [ 2, 9, 22, 97, 167, 204 ];
var arrayTwo = [ 3, 7, 10, 22, 98, 188, 203, 205, 209, 215];
var arrayMerged = (arrayOne.concat(arrayTwo)).sort(function(a, b){return a-b});

console.log(arrayMerged);

//Devin Fitzsimons Version
var ARRAY_ONE = [2, 9, 22, 97, 167, 204];
var ARRAY_TWO = [3, 7, 10, 22, 98, 188, 203, 205, 209, 215];

function mergeTwoArrays(arrayOne, arrayTwo){
  let mergedArray = []
  let shorterArray = arrayOne.length < arrayTwo.length ? arrayOne : arrayTwo;
  let longerArray = arrayOne.length >= arrayTwo.length ? arrayOne : arrayTwo;

  let len = shorterArray.length;
      let k = 0;
      //below for loop with while is pushing the smallerArray values into mergedArray, unless the current values is greater than or equal to the value of longerArray:
  for (let i = 0; i < len; i++){
    while (shorterArray[i] >= longerArray[k]) {
      mergedArray.push(longerArray[k]);
      k++; //basically 2 for loops in 1! Current longerArray value will jump to next only when the current one is pushed into mergedArray.
    }
    mergedArray.push(shorterArray[i]);
  }

  //now, we are picking up where shorterArray index stopped evaluating against longerArray, and pushing everything left into the mergedArray:
  len = longerArray.length;
  for (let i = k; i < len; i++) {
      mergedArray.push(longerArray[i]);
  }
  return mergedArray;
}

console.log(mergeTwoArrays(ARRAY_ONE, ARRAY_TWO));
