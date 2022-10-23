function solution(s) {
  let answer = s.split("");
  let res = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === res[res.length - 1]) {
      res.pop();
    } else {
      res.push(answer[i]);
    }
  }
  answer = res;
  return answer.length ? 0 : 1;
}
