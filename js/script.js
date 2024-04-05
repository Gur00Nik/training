const convertBinary = (number) => {
  return number === 0
    ? "0"
    : convertBinary(Math.floor(number / 3)) + (number % 3);
};

const result = convertBinary(3);

console.log(result);
