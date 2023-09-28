function mergeSotredArrays(arry1, arry2) {
  const mergedArray = [];
  let arry1Item = arry1[0];
  let arry2Item = arry2[0];
  let i = 1;
  let j = 1;

  if (arry1.length === 0) {
    return arry2;
  }

  if (arry2.length === 0) {
    return arry1;
  }

  while (arry1Item || arry2Item) {
    if (!arry2Item || arry1Item < arry2Item) {
      mergedArray.push(arry1Item);
      arry1Item = arry1[i];
      i++;
    } else {
      mergedArray.push(arry2Item);
      arry2Item = arry2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSotredArrays([0, 3, 4, 31], [4, 6, 30]));
