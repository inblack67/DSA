const performMerging = (arr1: number[], arr2: number[]): void => {
  const merge: number[] = new Array(arr1.length + arr2.length);
  let i = 0; // arr1 index
  let j = 0; // arr2 index
  let k = 0; // arr3 index
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merge[k++] = arr1[i++];
    } else {
      merge[k++] = arr2[j++];
    }
  }

  //   copying the remains
  for (; i < arr1.length; i++) {
    merge[k++] = arr1[i];
  }
  //   copying the remains
  for (; j < arr2.length; j++) {
    merge[k++] = arr2[j];
  }
};

const myarr1 = [-2, 5, 9, 11];
const myarr2 = [4, 6, 8];
performMerging(myarr1, myarr2);
