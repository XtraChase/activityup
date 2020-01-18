export function pad(str, max) {
  return str.length < max ? pad("0" + str, max) : str;
}

export function objToArray(obj) {
  let output = [];
  for (const i in obj) {
    output.push(obj[i]);
  }
  return output;
}
