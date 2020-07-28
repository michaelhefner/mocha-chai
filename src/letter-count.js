export const getLetterCount = (string) => {
  const letters = string.split("");
  let letterCount = {};
  letters.forEach((element) => {
    if (!letterCount[element]) {
      letterCount[element] = 1;
    } else {
      letterCount[element] += 1;
    }
  });
  return letterCount;
};
