// Given a string corpus and a string target, find the minimum window (substring) which contain all the characters that are found in target.

// The time complexity of the solution should be in order of O(n).


// NOTE: substring and  sub-sequence are different things

const minWindow = (search, t) => {
  if ( search == "" || t == "") {
    return "";
  }
  let requiredCharacters = buildMap(t);
  let windowMap = {};
  let left = 0;
  let right = 0;
  let totalFrequenciesToMatch = Object.values(requiredCharacters).length;
  let currentMatches = 0;
  let minWindowLength = Number.MAX_SAFE_INTEGER;
  let minWindow = "";

  while ( right < search.length)  {
    addChar( windowMap, search[right]);
  }
}


const buildMap = (s) => {
  let map = {};
  for ( let i=0; i<s.length; i++) {
    let char = s[i]
    if ( !map[ char ]) {
      map[char] = 1
    } else {
      map[char]++
    }
  }
  return map;
}

const addChar = (map, char) => {
  if ( !map[char] ) {
    map[char] = 1
  } else {
    map[char]++
  }
}





















// const containsCharacters = (search, t) => {
//   let characterMap = {};
  
//   for ( let i=0; i<t.length; i++) {
//     if ( !characterMap[ t[i] ]) {
//       characterMap[ t[i] ] = 1
//     } else {
//       characterMap[ t[i] ] += 1
//     }
//   }
//   for ( let j=0; j< search.length; j++ ) {
//     if (characterMap[ search[j] ]) {
//       characterMap[ search[j] ]--
//     }
//   }
//   let match = true;
//   Object.values( characterMap ).forEach( val => {
    
//     if ( val > 0 ) {
      
//       match = false
//     }
//   })
//   return match
// }

