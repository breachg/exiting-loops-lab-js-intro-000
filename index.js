function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i <array.length; i++) {
    if (array[i] == stopValue) {
      break }
      array[i] = changeValue
}
return array
}

function breakOut(array, changeValue, skipValue) {
  for (let i = 0; i <array.length; i++) {
    if (array[i] == skipValue) {
      continue }
      array[i] = changeValue
    }
    return array
  }
