// 연결된 노드의 개수를 계산하는 함수
function countNodes(links, startNode, cutNode) {
  let count = 1; // 방문한 노드의 수를 저장하는 변수 초기화
  const visited = new Set([startNode, cutNode]); // 방문한 노드를 저장하는 집합

  // 깊이 우선 탐색을 수행하는 함수
  function dfs(node) {
    for (const connectedNode of links[node]) {
      // 연결된 모든 노드에 대해
      if (!visited.has(connectedNode)) {
        // 아직 방문하지 않은 노드라면
        visited.add(connectedNode); // 방문한 노드 집합에 추가
        count++; // 방문한 노드 수 증가
        dfs(connectedNode); // 재귀적으로 깊이 우선 탐색 수행
      }
    }
  }

  dfs(startNode); // 시작 노드로부터 깊이 우선 탐색 시작
  return count; // 방문한 노드 수 반환
}

// 전력망을 둘로 나누기 문제를 푸는 함수
function solution(n, wires) {
  let minDifference = n; // 두 그룹 간의 최소 차이를 저장하는 변수 초기화

  for (let i = 0; i < n - 1; i++) {
    // 모든 전선을 순회하며
    const links = new Array(n + 1).fill(0).map(() => []); // 전력망 연결 정보 초기화
    for (let j = 0; j < n - 1; j++) {
      // 전력망 정보를 순회하며
      if (j !== i) {
        // 현재 제거하려는 전선이 아니라면
        const [a, b] = wires[j]; // 두 노드 정보를 가져와서
        links[a].push(b); // 전력망 연결 정보를 저장
        links[b].push(a);
      }
    }

    const group1 = countNodes(links, wires[i][0], wires[i][1]); // 첫 번째 그룹의 노드 수 계산
    const group2 = countNodes(links, wires[i][1], wires[i][0]); // 두 번째 그룹의 노드 수 계산
    minDifference = Math.min(minDifference, Math.abs(group1 - group2)); // 두 그룹 간의 차이를 최소 차이와 비교하여 업데이트
  }

  return minDifference; // 최소 차이 반환
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
