function isAlphabet(char) {
  const ascii = char.charCodeAt(0);
  if (ascii >= 65 && ascii <= 90) return true;
  else if (ascii >= 97 && ascii <= 122) return true;
  else return false;
}

function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (
    str1.length <= 1000 &&
    str1.length >= 2 &&
    str2.length <= 1000 &&
    str2.length >= 2
  ) {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < str1.length - 1; i++) {
      arr1.push(str1.substr(i, 2));
    }

    for (let i = 0; i < str2.length - 1; i++) {
      arr2.push(str2.substr(i, 2));
    }

    let minArr = arr1.length < arr2.length ? arr1 : arr2;
    let maxArr = JSON.stringify(minArr) === JSON.stringify(arr1) ? arr2 : arr1;

    minArr = minArr.filter(
      (item) => item.split("").filter((char) => isAlphabet(char)).length === 2
    );
    maxArr = maxArr.filter(
      (item) => item.split("").filter((char) => isAlphabet(char)).length === 2
    );

    let intersection = [];
    let union = [];

    for (const item of maxArr) {
      const idx = minArr.findIndex((found) => found === item);
      if (idx !== -1) {
        intersection.push(item);
        minArr.splice(idx, 1);
      }
    }

    union = [...maxArr, ...minArr];

    if (intersection.length || union.length)
      return Math.floor((intersection.length / union.length) * 65536);
    else return 65536;
  }
}

solution("aa1+aa2", "AAAA12");
