
function partition(arr, low, high) {
   let pivot = arr[high];
   let i = low -1;
   // incase of element high
   for(let j = low; j < high; j++) {
       if(arr[j] < pivot) {
           i++;
           [arr[i], arr[j]] = [arr[j], arr[i]];
       }
   }
   [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
   return i + 1;
   
   // case of element low
   let pivot = arr[low];
   let i = low - 1;
   while(true) {
       while(i <= j && arr[i] < pivot) {
           i++;
       }
       while(j >= i && arr[j] > pivot) {
           j++;
       }
       if(i <= j) {
           [arr[i], arr[j]] = [arr[j], arr[i]];
       } else {
           break;
       }
   }
   [arr[low], arr[j]] = [arr[j], arr[low]];
   return j;
}

function quickSort(arr, low, high) {
     if (low < high) {
        const partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
}

const quickSortJavascript = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSortJavascript(leftArr), pivot, ...quickSortJavascript(rightArr)];
};


let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
console.log(quickSortJavascript(myArray)); 

// quickSort(array, 0, array.length - 1);

// console.log(array);
