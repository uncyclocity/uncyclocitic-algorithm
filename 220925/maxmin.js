//https://school.programmers.co.kr/learn/courses/30/lessons/12939

const solution = (s) => {
  const splited = s.split(" ").map((item) => parseInt(item));

  let max = -999999;
  let min = 999999;

  splited.forEach((item) => {
    if (max < item) max = item;
    if (min > item) min = item;
  });

  return `${min} ${max}`;
};

console.log(solution("-99 99 11 88 20"));
