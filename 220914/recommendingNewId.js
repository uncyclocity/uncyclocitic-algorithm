const first = (idValue) => idValue.toLowerCase();

const second = (idValue) => {
  const availableSymbols = ["-", "_", "."];
  idValue = idValue.split("");
  idValue = idValue.filter((char) => {
    const ascii = char.charCodeAt(0);
    if (ascii > 47 && ascii < 58) return true;
    else if (ascii > 96 && ascii < 123) return true;
    else if (availableSymbols.includes(char)) return true;
    return false;
  });
  return idValue.join("");
};

const third = (idValue) => {
  while (idValue.includes("..")) {
    idValue = idValue.replace("..", ".");
  }
  return idValue;
};

const fourth = (idValue) => {
  if (idValue[0] === ".") idValue = idValue.substring(1);
  if (idValue[idValue.length - 1] === ".")
    idValue = idValue.substring(0, idValue.length - 1);
  return idValue;
};

const fifth = (idValue) => (!idValue ? "a" : idValue);

const sixth = (idValue) => {
  if (idValue.length >= 16) idValue = idValue.substring(0, 15);
  if (idValue[idValue.length - 1] === ".")
    idValue = idValue.substring(0, idValue.length - 1);
  return idValue;
};

const seventh = (idValue) => {
  while (idValue.length <= 2) {
    idValue = `${idValue}${idValue[idValue.length - 1]}`;
  }
  return idValue;
};

const solution = (newId) => {
  newId = first(newId);
  newId = second(newId);
  newId = third(newId);
  newId = fourth(newId);
  newId = fifth(newId);
  newId = sixth(newId);
  newId = seventh(newId);
  return newId;
};

console.log(solution("abcdefghijklmn.p"));
