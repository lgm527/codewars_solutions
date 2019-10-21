//Solutions for CodeWars Kata's in Javascript

//https://www.codewars.com/kata/514a024011ea4fb54200004b
//5 kyu "Extract the domain name from a URL"
function domainName(url){
  let www = /www\./g
  let http = /http:\/\//g
  let https = /https:\/\//g
  let com = /(\.[a-z]+)(.*)$/
  let newURL = ''
  newURL = url.replace(www, '')
  newURL = newURL.replace(http, '')
  newURL = newURL.replace(https, '')
  newURL = newURL.replace(com, '')
  return newURL;
}

//https://www.codewars.com/kata/55c6126177c9441a570000cc
//5 kyu "Weight for weight"
function orderWeight(strng) {
  let weights = strng.split(' ');
//sort function that will convert weights into their "weights/sum of digits" and resort
//the array by comparing the weights, then adding the original nums back in the correct order
  weights.sort(function(a, b){
  //find sum of first weight
    var aSum = 0;
    for(let i = 0; i < a.length; i++) {
      aSum += parseInt(a[i]);
    }
    //find sum of second weight
    var bSum = 0;
    for(let j = 0; j < b.length; j++) {
      bSum += parseInt(b[j]);
    }
    //compare the sums, add back accordingly
    if (aSum == bSum) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    } else if (aSum < bSum) {
      return -1;
    } else {
      return 1;
    }
  })

return weights.join(' ');
}

//https://www.codewars.com/kata/5267faf57526ea542e0007fb
//5 kyu "Math Issues"
Math.round = function(number) {
  let wholeNum = Number(number.toFixed());
  let ans = number - wholeNum;
  if (ans >= .5) {
   return wholeNum+1;
  } else {
   return wholeNum;
  }
};

Math.ceil = function(number) {
if (Number.isInteger(number)){
 return number;
} else {
  let numStr = number.toString()
  let indexx = numStr.indexOf('.');
  let cutNum = numStr.slice(0, indexx);
  return (Number(cutNum)+1);
  }
};

Math.floor = function(number) {
if (Number.isInteger(number)){
 return number;
} else {
  let numStr = number.toString()
  let indexx = numStr.indexOf('.');
  let cutNum = numStr.slice(0, indexx);
  return Number(cutNum);
  }
};

//https://www.codewars.com/kata/5656b6906de340bd1b0000ac
//7 kyu "Two to One"
function longest(s1, s2) {
let result = '';
let s12A = s1.split('') +','+ s2.split('');
let sAsort = s12A.split(',').sort();

  for (let i = 0; i < sAsort.length; i++) {
    if (sAsort[i] != sAsort[i-1]){
      result += sAsort[i];
    }
  }
 return result;
}

//https://www.codewars.com/kata/559a28007caad2ac4e000083
//5 kyu "Perimeter of squares in a rectangle"
function perimeter(n) {
  let fib = function(n) {
  let F = [0,1];
  for (let i = 2; F.length <= n+2; i++) {
    F[i] = F[i-1] + F[i-2];
    F.push(F[i]);
    }
     F.pop();
     return F.join('+');
   }
    return eval(fib(n)) * 4;
}

//https://www.codewars.com/kata/5853213063adbd1b9b0000be
//6 kyu "Street Fighter 2 - Character Selection"
function streetFighterSelection(fighters, position, moves){
let results = [];
let ipos = [0,0];

moves.forEach(function(p) {
   if (p == 'up' && ipos[0] == 1) {
    ipos[0]-=1;
   } else if (p == 'down' && ipos[0] == 0) {
    ipos[0]+=1;
   } else if (p == 'left' && ipos[1] > 0) {
    ipos[1]-=1;
   } else if (p == 'right' && ipos[1] < 5) {
    ipos[1]+=1;
   } else if (p == 'right' && ipos[1] == 5) {
    ipos[1]=0;
   } else if (p == 'left' && ipos[1] == 0) {
    ipos[1]=5;
   }
   results.push(fighters[ipos[0]][ipos[1]]);
  })
    return results;
}

//https://www.codewars.com/kata/52774a314c2333f0a7000688
//5 kyu "Valid Parentheses"
function validParentheses(parens){
  let arr = parens.split('');
  let countOpen = 0;
  let countClose = 0;
  arr.forEach(function(i){
   if (i == '(') {
    countOpen++;
   } else if (i == ')') {
    countClose++;
   }
  })
  if (parens.length%2 !==0 || parens[0] == ')' || countOpen !== countClose
    || parens[parens.length-1] == '(') {
   return false;
  } else {
   return true;
  }
}

//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
//6 kyu "Mexican Wave"
function wave(string){
  let length = string.length;
  let word = '';
  let result = [];
  result.length == string.length;
  let raisedSeat = 0;
  for (let i = 0; i < length; i++) {
   for (let j = 0; j < string.length; j++) {
    if (j == raisedSeat && string[j] != ' ') {
     word += string[j].toUpperCase();
    }else if (j == raisedSeat && string[j] == ' ') {
     word = null;
     break;
    } else {
     word += string[j];
    }
   }
    if (word != null) {
    result.push(word);
    }
    word = '';
    raisedSeat++;
  }
  return result;
}


//https://www.codewars.com/kata/54e6533c92449cc251001667
//6 kyu "Unique In Order"
var uniqueInOrder=function(iterable){
 let result = [];
  for(let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i-1]) {
     result.push(iterable[i]);
    }
  }
  return result;
}

//https://www.codewars.com/kata/57a153e872292d7c030009d4
//6 kyu "Simple transposition"
function simpleTransposition(text) {
let row1 = [];
let row2 = [];
 for (let i = 0; i < text.length; i++) {
  if (i % 2 == 0) {
   row1.push(text[i]);
  } else {
   row2.push(text[i]);
  }
 }
 return row1.join('')+row2.join('');
}

//https://www.codewars.com/kata/526233aefd4764272800036f
//6 kyu "Matrix Addition"
function matrixAddition(a, b){
let result = [];
result = new Array (a.length);
for (let i = 0; i < result.length; i++) {
  result[i] = new Array (a[i].length);
  for (let j = 0; j < result[i].length; j++) {
   result[i][j] = a[i][j]+b[i][j];
  }
 }
 return result;
}

//https://www.codewars.com/kata/54da5a58ea159efa38000836
//6 kyu "Find the odd int"
function findOdd(A) {
  let count = {};
  let result;
  A.forEach(number => count[number] = (count[number] || 0) +1);
  Object.keys(count).forEach(function(key) {
   if (count[key] % 2 == 1)
    result = key;
  });
 return eval(result);
}

//https://www.codewars.com/kata/552c028c030765286c00007d
//6 kyu "IQ Test"
function iqTest(numbers){
  let array = numbers.split(' ');
  let evenArr = [];
  let oddArr = [];
    for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
     evenArr.push(i+1);
    } else {
     oddArr.push(i+1);
    }
  }
  if (evenArr.length == 1) {
    return Number(evenArr);
  } else {
    return Number(oddArr);
  }
}

//https://www.codewars.com/kata/5848565e273af816fb000449
//6 kyu "Encrypt this!"
var encryptThis = function(text) {
  let tArr = text.split(' ');
  let rArr = [];
  let fArr = [];

  for (let i = 0; i < tArr.length; i++) {
  let word = tArr[i].split('');
   if (word.length >= 3) {
      let secondToLast = word.splice(1,1);
      let lastToSecond = word.pop();
      word.splice(1,0,lastToSecond);
      word.push(secondToLast);
      let joinWord = word.join('');
      rArr.push(joinWord+' ');
   } else {
    rArr.push(tArr[i]+' ');
   }
  }
  let joinArr = rArr.join('').trim().split(' ');
   for (let j = 0; j < joinArr.length; j++) {
   let firstLet = joinArr[j].charCodeAt(0);
    for (let k = 0; k < joinArr[j].length; k++) {
     if (k == 0) {
      fArr.push(firstLet);
     } else {
      fArr.push(joinArr[j][k]);
     }
    }
     fArr.push(' ');
    }
    let final = fArr.join('').trim();
     return final;
   }

//https://www.codewars.com/kata/52ea928a1ef5cfec800003ee
//6 kyu "IPv4 to int32"
function ipToInt32(ip){
  let splitIp = ip.split('.');
  let biArr = [];
  for (let i = 0; i < splitIp.length; i++) {
   let toNum = eval(splitIp[i]);
   let toBi = ('00000000'+toNum.toString(2)).slice(-8);
   biArr.push(toBi);
  }
   let joined = biArr.join('');
   return parseInt(joined, 2);
}

//https://www.codewars.com/kata/5269452810342858ec000951
//6 kyu "Coordinates Validator"
function isValidCoordinates(coordinates){
  let arr = coordinates.split(', ');
  let result ='';
  let regex = /[A-Za-z]/;
  if (regex.test(arr) == true) {
   return false;
  } else if ((arr.length > 2) || (isNaN(arr[0]) == true) || (isNaN(arr[1]) == true)) {
   result = false;
  } else if ( (-90) < arr[0] && arr[0] < 90 && (-180) < arr[1] && arr[1] < 180 ) {
   result = true;
  } else {
   result = false;
  }
  return result;
}

//https://www.codewars.com/kata/5274d9d3ebc3030802000165
//6 kyu "Two Joggers"
var nbrOfLaps = function (x, y) {
let e = y;
let f = x;
  if (x == y) {
   return [1, 1];
  } else {
  function reduce(numerator,denominator){
  let gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}
   return reduce(e, f);
  }
}

//https://www.codewars.com/kata/58223370aef9fc03fd000071
//6 kyu "Dashatize it"
function dashatize(num) {
  let numStr = (Math.abs(num)).toString().split('');
  let notNum = (/\D/g);
  if (notNum.test(Math.abs(num)) == true) {
    return num.toString();
  } else if (numStr.length <= 1) {
    return Math.abs(num).toString();
  }
   for (let i = 0; i < numStr.length; i++) {
    if (numStr[i]%2 !== 0 && i !== 0 && i !== numStr.length-1) {
      numStr.splice(i,1,('-'+numStr[i]+'-'));
    } else if (numStr[i]%2 !== 0 && i == 0) {
      numStr.splice(0,1,(numStr[i]+'-'));
    } else if (numStr[i]%2 !== 0 && i == numStr.length-1) {
      numStr.splice(i,1,('-'+numStr[i]));
    }
   }
   return numStr.join('').replace(/--/g,'-');
};

//https://www.codewars.com/kata/53907ac3cd51b69f790006c5
//6 kyu "Triangle type"
function triangleType(a, b, c){
 let triangleArr = [a, b, c]
 let sortedArr = triangleArr.sort(function(a,b){return a-b;});
 let e = sortedArr[0];
 let f = sortedArr[1];
 let g = sortedArr[2];
  if ((e+f) <= g) {
   return 0;
  } else if (((e**2)+(f**2)) > (g**2)) {
    return 1;
  } else if (((e**2)+(f**2)) == (g**2)) {
   return 2;
  } else if (((e**2)+(f**2)) < (g**2)) {
   return 3;
  }
}

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
//6 kyu "Counting Duplicates"
function duplicateCount(text){
  let result = [];
  const strArr = text.toLowerCase().split('').sort().join('').match(/(.)\1+/g);

  if (strArr != null) {
   strArr.forEach((elem)=>{
    result.push(elem[0]);
   });
  }
  return result.length;
}

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
//6 kyu "Split Strings"
function solution(str){
   let chunks = str.match(/.{1,2}/g);
   let lastItem = (chunks[chunks.length-1])
   if (lastItem.length == 1) {
    chunks.splice((chunks.length-1),1,lastItem+'_');
   }
   return chunks;
}

//https://www.codewars.com/kata/51e0007c1f9378fa810002a9
//6 kyu "Make the Deadfish swim"
function parse( data ){
let total = 0;
let runningTotal = [];
let finalArr = [];
 for (let i = 0; i < data.length; i++) {
  if (data[i] == 'i') {
   total = total + 1;
   runningTotal.push(total);
  } else if (data[i] == 'd') {
   total = total - 1;
   runningTotal.push(total);
  } else if (data[i] == 's') {
   total = total * total;
   runningTotal.push(total);
  } else if (data[i] == 'o') {
   runningTotal.push(total);
   finalArr.push(total);
   }
 }
 return finalArr;
}

//https://www.codewars.com/kata/563b9941f72effc59d000031
//6 kyu "Don't get stressed"
function stress (word) {
let numOfSyll = [];
let ending = '';
let finalEnding = '';
let stressedSyll = '';
for (var i = 0; i < word.length; i++) {
  if (/[0-9]/.test(word[i]) == true) {
    numOfSyll.push(word[i]);
  } else if (/[a-z]/i.test(word[i]) == true) {
    ending = ending+word[i];
  }
 }
 let finalNum = numOfSyll.join('');
 if (3 > finalNum || 11 < finalNum) {
   return "invalid word";
 } else if (ending == 'ic' || ending == 'sion' || ending == 'tion' || ending == 'ious') {
     finalEnding = 'pen';
     stressedSyll = finalNum - 1;
    } else if (ending == 'ty' || ending == 'al' || ending == 'ise' || ending == 'ate') {
     finalEnding = 'ante-pen';
     stressedSyll = finalNum - 2;
  } else {
    return "invalid word";
   }
  return stressedSyll+finalEnding;
}

//https://www.codewars.com/kata/59df2f8f08c6cec835000012
//6 kyu "Meeting"
function meeting(s) {
  let names = s.toUpperCase().split(';');
  let List = [];
  for (var i = 0; i < names.length; i ++) {
   let middle = names[i].indexOf(':');
   let firstName = names[i].slice(0, middle);
   let lastName = names[i].slice(middle+1, names[i].length);
   List.push('('+lastName+', '+firstName+')');
  }
 let final = List.sort().join('').toString();
 return final;
}

//https://www.codewars.com/kata/587731fda577b3d1b0001196
//6 kyu "CamelCase Method"
String.prototype.camelCase=function(){
  if (this.length === 0) {
   return '';
  } else {
   let str = this.trim().split(' ');
   for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
   }
    return str.join('');
  }
}

//https://www.codewars.com/kata/53368a47e38700bd8300030d
//6 kyu "Format a string of names like 'Bart, Lisa & Maggie'."
function list(names){
let nameList = [];
for (var i = 0; i < names.length; i++) {
  nameList.push(names[i].name);
  } if (names.length > 2) {
 return nameList.slice(0,-2).join(', ')+', '+nameList.slice(-2).join(' & ');
 } else if (names.length = 2) {
   return nameList.join(' & ');
  } else {
   return names;
  }
}

//https://www.codewars.com/kata/586f6741c66d18c22800010a
//7 kyu "Sum of a sequence"
const sequenceSum = (begin, end, step) => {
  let finalArr = [];
  let sum = 0
  var i = begin;
  while (i <= end) {
   finalArr.push(i);
   i = i+step;
  }
  for (var i = 0; i < finalArr.length; i++) {
  sum += finalArr[i]
 }
 return sum;
};

//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
//7 kyu "Regex validate PIN code"
function validatePIN (pin) {
 let numRegex = /\D/g;
 if (numRegex.test(pin) == false) {
  if (pin.length == 4 || pin.length == 6) {
   return true;
  } else {
   return false;
  }
 }
 return false;
}

//https://www.codewars.com/kata/56747fd5cb988479af000028
//7 kyu "Get the Middle Character"
function getMiddle(s) {
 let middleCharOdd;
 let middleCharsEven1;
 let middleCharsEven2;
 if (s.length % 2 !== 0) {
   middleCharOdd = ((s.length+1)/2)-1;
   return s.charAt(middleCharOdd);
 } else {
   middleCharsEven1 = (s.length/2)-1;
   middleCharsEven2 = (s.length/2);
   return s.charAt(middleCharsEven1)+s.charAt(middleCharsEven2);
 }
}

//https://www.codewars.com/kata/563cf89eb4747c5fb100001b
//7 kyu "Remove the minimum"
function removeSmallest(numbers) {
 let newArr = numbers.slice(0);
 let lowestRating = newArr[0];
 let lowestRatingIndex;
 let emptyArr = [];
 for (var i = 1; i < newArr.length; i++) {
  if (newArr[i] < lowestRating) {
    lowestRating = newArr[i];
    lowestRatingIndex = i;
  } else if (newArr.length <= 1) {
   return emptyArr;
  }
 }
 let udpate = newArr.splice(lowestRatingIndex,1);
 return newArr;
}

//https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
//7 kyu "Even numbers in an array"
function evenNumbers(array, number) {
  let evenArr = [];
  for (var i = 0; i < array.length; i++) {
   if (array[i] % 2 == 0) {
    evenArr.push(array[i]);
   }
  }
 return evenArr.slice(evenArr.length-number);
}

//https://www.codewars.com/kata/5bb904724c47249b10000131
//8 kyu "Total amount of points"
function points(games) {
  let finalScore = 0;
  for (let i = 0; i < games.length; i++) {
  if (games[i][0]>games[i][2]) {
    finalScore += 3;
   } else if (games[i][0]<games[i][2]) {
    finalScore += 0;
   } else {
    finalScore += 1;
   }
  }
  return finalScore;
}

//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
//7 kyu "Build a square"
function generateShape(int){
  let char = '+';
  let oneLine = char.repeat(int)+'\n';
  let theSq = oneLine.repeat(int-1) + char.repeat(int);
  return theSq;
}

//https://www.codewars.com/kata/550aea365951383698000727
//7 kyu "Split an array"
function split(arr, prop) {
let finalArr = [[],[]];
 for (let i = 0; i < arr.length; i++) {
  if (arr[i][prop]) {
   finalArr[0].push(arr[i]);
  } else {
   finalArr[1].push(arr[i]);
  }
 }
 return finalArr;
}

//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
//7 kyu "Categorize New Member"
function openOrSenior(data){
let newArr = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
     newArr.push("Senior");
    } else {
     newArr.push("Open");
    }
   }
  return newArr;
}

//https://www.codewars.com/kata/54ba84be607a92aa900000f1
//7 kyu "Isograms"
function isIsogram(str){
  let arr = str.toLowerCase().split('');
  let inArr = [];
  for (var i = 0; i < arr.length; i ++) {
  if (!inArr[arr[i]]){
     inArr[arr[i]] = arr[i];
   } else {
    return false;
   }
  }
  return true;
}

//https://www.codewars.com/kata/54ad586282bc65b7ec000182
//7 kyu "Convert a Number to money!!"
var numberToMoney = function(n) {
  let result = (Math.floor(100 * n) / 100).toFixed(2);
  return Intl.NumberFormat('en-US', {style: 'decimal', currency: 'USD'}).format(result);
};

//https://www.codewars.com/kata/58712dfa5c538b6fc7000569
//7 kyu "Simple beads count"
function countRedBeads(n) {
  var blue = n;
  var red;
  if (n > 1) {
  return (blue*2)-2;
  } else {
  return 0;
  }
}

//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
//7 kyu "Shortest Word"
function findShort(s){
let arrS = s.split(' ');
let shortestWord = arrS[0];
for (var i = 0; i < arrS.length; i++) {
  if (arrS[i].length < shortestWord.length) {
   shortestWord = arrS[i];
  }
 }
 return shortestWord.length;
}


//https://www.codewars.com/kata/554b4ac871d6813a03000035
//7 kyu "Highest and Lowest"
function highAndLow(numbers){
  let numStr = numbers.split(' ');
  let numHigh = numStr[0];
  let numLow = numStr[0];
  for (var i = 0; i < numStr.length; i++) {
   if (parseInt(numStr[i]) > numHigh) {
   numHigh = numStr[i];
   }
  }
    for (var i = 0; i < numStr.length; i++) {
   if (parseInt(numStr[i]) < numLow) {
   numLow = numStr[i];
   }
  }
  return numHigh+' '+numLow;
}

//https://www.codewars.com/kata/56541980fa08ab47a0000040
//7 kyu "Printer Errors"
function printerError(s) {
 var numOfErrors = 0;
    for (var i = 0; i < s.length; i++) {
    switch(s[i]) {
    case 'a':
    case 'b':
    case 'c':
    case 'd':
    case 'e':
    case 'f':
    case 'g':
    case 'h':
    case 'i':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
     numOfErrors += 0;
     break;
    case 'n':
    case 'o':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'u':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
     numOfErrors += 1;
     break;
    }
  }
  return numOfErrors+'/'+s.length;
}

//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
//8 kyu "If you can't sleep, just count sheep!!"
var countSheep = function (num){
  var murmur = '';
  var i = 0
  do {
   i = i + 1;
   murmur = murmur + i + ' sheep...';
  } while (i < num);
   return murmur;
}

//https://www.codewars.com/kata/5aca48db188ab3558e0030fa
//7 kyu "Find the calculation type"
function calcType(a, b, res) {
  if (a + b == res) {
    return "addition";
  } else if (a - b == res) {
    return "subtraction";
  } else if (a * b == res) {
    return "multiplication";
  } else if (a / b == res){
    return "division";
  }
}

//https://www.codewars.com/kata/51f2b4448cadf20ed0000386
//7 kyu "Remove anchor from URL"
function removeUrlAnchor(url){
  //is '#' in url?
  if (url.includes('#') == true) {
  //if true, return url.slice(url[0], location of '#')
  return url.slice(0, url.indexOf('#'));
  //if false, return unchanged url
  } else {
  return url;
  }
}

//https://www.codewars.com/kata/57eaeb9578748ff92a000009
//8 kyu "Sum Mixed Array"
function sumMix(x){
  let allNum = x.map(function(x){
    return parseInt(x, 10);
   });
   return allNum.reduce((accumulator, currentValue) => accumulator + currentValue);
}

//https://www.codewars.com/kata/523b4ff7adca849afe000035
//8 kyu "Function 1 - hello world"
function greet(){
 return "hello world!";
}

//https://www.codewars.com/kata/56dec885c54a926dcd001095
//8  kyu "Opposite number"
function opposite(number) {
  return -(number);
}

//https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058
//8 kyu "Do you speak "English"?"
function spEng(sentence){
let regex = /english/ig;
 if (regex.test(sentence) == true) {
  return true;
 } else {
  return false;
 }
}

//https://www.codewars.com/kata/59811fd8a070625d4c000013
//8 kyu "Find the Integral"
function integrate(coefficient, exponent) {
  return (coefficient/(exponent + 1))+'x^'+(exponent + 1);
}

//https://www.codewars.com/kata/55ccdf1512938ce3ac000056
//8 kyu "A Strange Trip to the Market"
function isLockNessMonster(s) {
  let lochNess = RegExp('tree fiddy');
  let lochNess2 = RegExp('3.50');
  if (lochNess.test(s) == true) {
  return true;
  } else if (lochNess2.test(s) == true) {
  return true;
  }
}

//https://www.codewars.com/kata/5ad0d8356165e63c140014d4
//8 kyu "Student's Final Grade"
function finalGrade (exam, projects) {
 if (exam > 90 || projects > 10) {
 return 100;
 } else if (exam > 75 && projects >= 5) {
 return 90;
 } else if (exam > 50 && projects >= 2) {
 return 75;
 } else {
  return 0;
 }
}

//https://www.codewars.com/kata/5875b200d520904a04000003
//8 kyu "Will there be enough space?"
function enough(cap, on, wait) {
  if (wait <= (cap-on)) {
  return 0;
  } else if (wait > (cap-on)) {
  return Math.abs((cap-on) - wait);
  }
}

//https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
//8 kyu "Return the day"
function whatday(num) {
  var whatday = '';
   switch(num) {
   case 1: whatday = "Sunday"; break;
   case 2: whatday = "Monday"; break;
   case 3: whatday = "Tuesday"; break;
   case 4: whatday = "Wednesday"; break;
   case 5: whatday = "Thursday"; break;
   case 6: whatday = "Friday"; break;
   case 7: whatday = "Saturday"; break;
   default: whatday = "Wrong, please enter a number between 1 and 7"; break;
  }
  return whatday;
}

//https://www.codewars.com/kata/5715eaedb436cf5606000381
//8 kyu "Sum of positive"
function positiveSum(arr) {
 var theSum = 0
  for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
   theSum += arr[i];
   }
  }
  return theSum;
}

//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
//8 kyu "Closest elevator"
function elevator(left, right, call){
  // code on! :)
  if (Math.abs(left - call) < Math.abs(right - call)) {
  return "left";
  } else if (Math.abs(left - call) > Math.abs(right - call)) {
  return "right";
  } else {
  return "right";
  }
}

//https://www.codewars.com/kata/5556282156230d0e5e000089
//8 kyu "DNA to RNA Conversion"
function DNAtoRNA(dna) {
  var replacement = /T/gi
  return dna.replace(replacement, 'U');
}

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
//8 kyu "Abbreviate a Two Word Name"
function abbrevName(name){
  //turn string into function to access first letter of each word
  var nameArr = name.split(' ');
  //create variable for first item in array (first name)
  var firstName = nameArr[0];
  //create variable for second item in array (last name)
  var lastName = nameArr[1];
  //format (concatenate)
  var results = firstName[0] + '.' + lastName[0];
  //format (capitalize) and return results
  return results.toUpperCase();
}

//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
//8 kyu "Even or Odd"
function even_or_odd(number) {
  if (number % 2 == 0) {
  return "Even";
  } else {
  return "Odd";
  }
}
