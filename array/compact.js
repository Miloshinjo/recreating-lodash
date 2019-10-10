// _.compact - Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function compact(array) {
  return array.filter(Boolean);
}

export default compact;
