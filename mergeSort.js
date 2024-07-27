function merge(left, right) {
    let sortedArray = [];
    while(left.length && right.length) {
      if(left[0] < right[0]) {
          sortedArray.push(left.shift());
      } else {
          sortedArray.push(right.shift());
      }
    }
    return [...sortedArray, ...left, ...right]
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const mid = Math.trunc(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

let arr = [5,2,3,1];
console.log(mergeSort(arr));


