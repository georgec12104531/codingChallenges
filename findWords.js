LettersToRow = { q: 0, w: 0, e: 0, r: 0, t: 0, y: 0, u: 0, i: 0, o: 0, p: 0,
                 a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1,
                 z: 2, x: 2, c: 2, v: 2, b: 2, b: 2, n: 2, m: 2 }

const findWords = (words) => {
  return words.filter(word => {
    let isSameRow = true;
    let row = LettersToRow[word[0].toLowerCase()];
    for (let i = 0; i < word.length; i++) {
      if (LettersToRow[word[i].toLowerCase()] !== row) {
        isSameRow = false;
      }
    }

    return isSameRow    
  })
}
