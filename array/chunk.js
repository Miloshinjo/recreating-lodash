// _.chunk - Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements. Does not mutate the original array.

function chunk(array, size = 1) {
  // return an empty array if size is 0 or less or NaN
  if (size === 0 || size < 0 || isNaN(size)) return [];

  // make an array copy as if not to change the original passed in array and return a new one
  const arrayCopy = array.map(el => el);

  // function that makes small arrays depending on the size provided. removes items from the original array
  const makeSmallArray = arr => {
    const smallArray = [];
    for (let i = 0; i < size; i++) {
      smallArray.push(arr.shift([arr[i]]));
    }
    return smallArray;
  };
  // initialize chunkedArray
  const chunkedArray = [];
  // loop over passed array as long as it's larger then the size provided. when it stops, only 1 item will remain
  while (arrayCopy.length > size) {
    chunkedArray.push(makeSmallArray(arrayCopy));
  }
  // add that item to the chunked array and return it
  chunkedArray.push(arrayCopy);

  return chunkedArray;
}

export default chunk;
