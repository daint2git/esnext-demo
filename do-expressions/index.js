const isStatus = containColor => color => color.includes(containColor);
const isHot = isStatus('red');
const isCold = isStatus('blue');
const isWarn = isStatus('orange');

const getNewColor = color => {
  if (typeof color !== 'string') return 'unknown';
  return do {
    if (isHot(color)) {
      ('light-red');
    } else if (isCold(color)) {
      ('light-blue');
    } else if (isWarn(color)) {
      ('light-orange');
    } else {
      ('pink');
    }
  };
};

console.log(getNewColor(false));
console.log(getNewColor('red'));
console.log(getNewColor('dark-red'));
console.log(getNewColor('gray'));
