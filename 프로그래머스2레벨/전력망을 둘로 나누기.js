function solution(n, wires) {
  const links = {};
  wires.map((val) => {
    const [a, b] = val;

    if (!links[a]) {
      links[a] = [b];
    } else {
      links[a].push(b);
    }

    if (!links[b]) {
      links[b] = [a];
    } else {
      links[b].push(a);
    }
  });

  const check = (startNode, cutNode) => {
    let count = 0;
    let que = [startNode];
    let visited = {};
    visited[startNode] = true;
    while (que.length) {
      const start = que.pop();
      links[start].map((val) => {
        if (val != cutNode && !visited[val]) {
          visited[val] = true;
          que.push(val);
          count++;
        }
      });
    }
    return count;
  };

  let result = 1000;
  wires.map((val) => {
    const [a, b] = val;
    let diff = Math.abs(check(a, b) - check(b, a));
    if (result > diff) {
      result = diff;
    }
  });

  return result;
}

const n = 9;
const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

console.log(solution(n, wires));
