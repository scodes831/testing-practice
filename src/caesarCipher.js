function caesarCipher(str) {
    const strArr = Array.from(str);
    const cloneStrArr = [...strArr];
    const strArrNumeric = convertStringToNumeric(cloneStrArr);
    const strArrNumericCipher = convertWithCipher(strArrNumeric);
    const strArrAlphaCipher = convertNumericToAlpha(strArrNumericCipher);
    const capitalizedStrArrAlphaCipher = checkCapitalization(strArr, strArrAlphaCipher);
    const result = capitalizedStrArrAlphaCipher.join('');
    return result;
}

function convertStringToNumeric(str) {
    for (let i = 0; i < str.length; i++) {
      if(str[i] === 'a' || str[i] === 'A') {
        str.splice(i, 1, 1);
      } else if (str[i] === 'b' || str[i] === 'B') {
        str.splice(i, 1, 2);
      } else if (str[i] === 'c' || str[i] === 'C') {
        str.splice(i, 1, 3);
      } else if (str[i] === 'd' || str[i] === 'D') {
        str.splice(i, 1, 4);
      } else if (str[i] === 'e' || str[i] === 'E') {
        str.splice(i, 1, 5);
      } else if (str[i] === 'f' || str[i] === 'F') {
        str.splice(i, 1, 6);
      } else if (str[i] === 'g' || str[i] === 'G') {
        str.splice(i, 1, 7);
      } else if (str[i] === 'h' || str[i] === 'H') {
        str.splice(i, 1, 8);
      } else if (str[i] === 'i' || str[i] === 'I') {
        str.splice(i, 1, 9);
      } else if (str[i] === 'j' || str[i] === 'J') {
        str.splice(i, 1, 10);
      } else if (str[i] === 'k' || str[i] === 'K') {
        str.splice(i, 1, 11);
      } else if (str[i] === 'l' || str[i] === 'L') {
        str.splice(i, 1, 12);
      } else if (str[i] === 'm' || str[i] === 'M') {
        str.splice(i, 1, 13);
      } else if (str[i] === 'n' || str[i] === 'N') {
        str.splice(i, 1, 14);
      } else if (str[i] === 'o' || str[i] === 'O') {
        str.splice(i, 1, 15);
      } else if (str[i] === 'p' || str[i] === 'P') {
        str.splice(i, 1, 16);
      } else if (str[i] === 'q' || str[i] === 'Q') {
        str.splice(i, 1, 17);
      } else if (str[i] === 'r' || str[i] === 'R') {
        str.splice(i, 1, 18);
      } else if (str[i] === 's' || str[i] === 'S') {
        str.splice(i, 1, 19);
      } else if (str[i] === 't' || str[i] === 'T') {
        str.splice(i, 1, 20);
      } else if (str[i] === 'u' || str[i] === 'U') {
        str.splice(i, 1, 21);
      } else if (str[i] === 'v' || str[i] === 'V') {
        str.splice(i, 1, 22);
      } else if (str[i] === 'w' || str[i] === 'W') {
        str.splice(i, 1, 23);
      } else if (str[i] === 'x' || str[i] === 'X') {
        str.splice(i, 1, 24);
      } else if (str[i] === 'y' || str[i] === 'Y') {
        str.splice(i, 1, 25);
      } else if (str[i] === 'z' || str[i] === 'Z') {
        str.splice(i, 1, 26);
      } else if (str[i].match('/\s\d/')) {
          return;
      }
    }
    return str;
  }

function convertWithCipher(str) {
    for (let i = 0; i < str.length; i++) {
        if (typeof str[i] === "number") {
            let newNumeric = str[i] + 3;
            console.log(`new numeric is ${newNumeric}`);
            if (newNumeric > 26) {
                const numToWrap = newNumeric - 26;
                console.log(`num to wrap is ${numToWrap}`);
                newNumeric = numToWrap;
            }
            str.splice(i, 1, newNumeric);
        }
    }
    return str;
}

function convertNumericToAlpha(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            arr.splice(i, 1, 'a');
        } else if (arr[i] === 2) {
            arr.splice(i, 1, 'b');
        } else if (arr[i] === 3) {
            arr.splice(i, 1, 'c');
        } else if (arr[i] === 4) {
            arr.splice(i, 1, 'd');
        } else if (arr[i] === 5) {
            arr.splice(i, 1, 'e');
        } else if (arr[i] === 6) {
            arr.splice(i, 1, 'f');
        } else if (arr[i] === 7) {
            arr.splice(i, 1, 'g');
        } else if (arr[i] === 8) {
            arr.splice(i, 1, 'h');
        } else if (arr[i] === 9) {
            arr.splice(i, 1, 'i');
        } else if (arr[i] === 10) {
            arr.splice(i, 1, 'j');
        } else if (arr[i] === 11) {
            arr.splice(i, 1, 'k');
        } else if (arr[i] === 12) {
            arr.splice(i, 1, 'l');
        } else if (arr[i] === 13) {
            arr.splice(i, 1, 'm');
        } else if (arr[i] === 14) {
            arr.splice(i, 1, 'n');
        } else if (arr[i] === 15) {
            arr.splice(i, 1, 'o');
        } else if (arr[i] === 16) {
            arr.splice(i, 1, 'p');
        } else if (arr[i] === 17) {
            arr.splice(i, 1, 'q');
        } else if (arr[i] === 18) {
            arr.splice(i, 1, 'r');
        } else if (arr[i] === 19) {
            arr.splice(i, 1, 's');
        } else if (arr[i] === 20) {
            arr.splice(i, 1, 't');
        } else if (arr[i] === 21) {
            arr.splice(i, 1, 'u');
        } else if (arr[i] === 22) {
            arr.splice(i, 1, 'v');
        } else if (arr[i] === 23) {
            arr.splice(i, 1, 'w');
        } else if (arr[i] === 24) {
            arr.splice(i, 1, 'x');
        } else if (arr[i] === 25) {
            arr.splice(i, 1, 'y');
        } else if (arr[i] === 26) {
            arr.splice(i, 1, 'z');
        }
    }
    return arr;
}

function checkCapitalization(origArr, newArr) {
    console.log(`the original array is ${origArr}`);
    console.log(`the new array is ${newArr}`);
    for (let i = 0; i < origArr.length; i++) {
        if (origArr[i].toUpperCase() === origArr[i]) {
            let capitalized = newArr[i].toUpperCase();
            newArr.splice(i, 1, capitalized);
        }
    }
    return newArr;
}

module.exports = caesarCipher;