// Method 1
const replaceString = (oldS, newS, fullS) => {
  for (let i = 0; i < fullS.length; i++) {
    if (fullS.substring(i, i + oldS.length) === oldS) {
      return fullS.substring(0, i) + newS + fullS.substring(i + oldS.length);
    }
  }
  return null;
};

// Method 2
const replaceString = (oldS, newS, fullS) => fullS.split(oldS).join(newS);

console.log(replaceString('New', 'Old', 'Brave New World'));
