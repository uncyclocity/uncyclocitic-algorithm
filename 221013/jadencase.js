// https://school.programmers.co.kr/learn/courses/30/lessons/12951

const solution = (s) =>
  s
    .split(" ")
    .map(
      (str) => str && `${str[0].toUpperCase()}${str.substr(1).toLowerCase()}`
    )
    .join(" ");

console.log(solution("a Aa "));
