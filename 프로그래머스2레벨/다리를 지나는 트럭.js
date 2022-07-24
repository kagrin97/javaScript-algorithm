function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);
  let time = 0,
    totalWeigth = 0;

  while (truck_weights.length) {
    if (totalWeigth - bridge[0] + truck_weights[0] <= weight) {
      totalWeigth = totalWeigth - bridge[0] + truck_weights[0];
      bridge.shift();
      bridge.push(truck_weights.shift());
    } else {
      totalWeigth -= bridge[0];
      bridge.shift();
      bridge.push(0);
    }
    time += 1;
  }

  for (let i = bridge.length - 1; i >= 0; i--) {
    if (bridge[i] != 0) {
      time += i + 1;
      return time;
    }
  }
}
const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];
console.log(solution(bridge_length, weight, truck_weights));
