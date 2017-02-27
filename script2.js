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

  let len = longerArray.length;
  let k = 0;
  for (let i = 0; i < len; i++){
    while (shorterArray[k] <= longerArray[i]) {
      mergedArray.push(shorterArray[k]);
      k++; //instead of double nested for loops, he used while to evaluate each value off the shorter array one by one (i.e. each value of the longerArray will be added to the mergedArray one after another, unless the current shorterArray value is lower and therefore needs to be added first.)
    }
    mergedArray.push(longerArray[i]);
  }
  return mergedArray;
}

console.log(mergeTwoArrays(ARRAY_ONE, ARRAY_TWO));
