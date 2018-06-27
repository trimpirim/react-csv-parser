/* eslint-disable */
export function parseCSV(text) {
  let p = ''; let row = ['']; const ret = [row]; let i = 0; let r = 0; let s = !0; let
    l;

  
  const modifiedText = text.replace(/((\r)?\n)$/g, '');

  // every char
  for (l of modifiedText) {
  	// if double quotes
    if (l === '"') {
    	// if double quotes and previous char is the same as the next one (double quotes) - add that char to the row[i] element
      if (s && l === p) row[i] += l;
      s = !s;
    } else if (l === ',' && s) l = row[++i] = ''; // if delimiter -> new row
    else if (l === '\n' && s) { // if new line
      if (p === '\r') row[i] = row[i].slice(0, -1); // if new line for sure - CLRF -> creates new row without the last char
      row = ret[++r] = [l = '']; i = 0; // add to the row again;
    } else row[i] += l; // otherwise - just add char to tthe row
    p = l;
  }

  return ret;
}
