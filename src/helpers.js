const randomInt = (k) => Math.floor((k + 1) * Math.random());

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default shuffle;