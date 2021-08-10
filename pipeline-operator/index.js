const reverseWords = str =>
  str
    .split(' ')
    .reduce((revStr, word) => [word, ...revStr], [])
    .join(' ');

console.log(reverseWords('this is fun'));

const splitBySpace = str => str.split(' ');
const reverseArray = arr => arr.reduce((acc, cur) => [cur, ...acc], []);
const joinWithSpace = arr => arr.join(' ');

const reverseWords2 = str => joinWithSpace(reverseArray(splitBySpace(str)));

console.log(reverseWords2('this is fun'));

const reverseWords3 = str =>
  str |> splitBySpace |> reverseArray |> joinWithSpace;

console.log(reverseWords3('this is fun'));
