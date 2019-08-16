// _.chunk - Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements. Does not mutate the original array.

export default function(array, size = 1) {
  // return an empty array if supplied size is 0 or less
  if (size === 0) return [];
  if (size < 0) return [];

  // make an array copy as if not to change the original passed in array and return a new one
  const arrayCopy = array.map(el => el);

  // function that makes small arrays depending on the size provided. removes items from the original array
  const makeSmallArray = arr => {
    let smallArray = [];
    for (let i = 0; i < size; i++) {
      smallArray.push(arr.shift([arr[i]]));
    }
    return smallArray;
  };
  // initialize chunkedArray
  let chunkedArray = [];
  // loop over passed array as long as it's larger then the size provided. when it stops, only 1 item will remain
  while (arrayCopy.length > size) {
    chunkedArray.push(makeSmallArray(arrayCopy));
  }
  // add that item to the chunked array and return it
  chunkedArray.push(arrayCopy);

  return chunkedArray;
}
