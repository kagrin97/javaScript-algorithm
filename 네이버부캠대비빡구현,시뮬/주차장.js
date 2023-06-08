const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const parkingPayArr = input.slice(1, 1 + N).map(Number);
const carWeightArr = input.slice(1 + N, 1 + N + M).map(Number);
const order = input.slice(1 + N + M).map(Number);

// 각 주차장 자리의 가격과 현재 주차중인 차 번호 (0은 비어있음)
// { 0 => [ pay, carNumber ], 1 => [ 3, 0 ], 2 => [ 5, 0 ] }
const parkingPayMap = new Map();
parkingPayArr.forEach((pay, index) => {
  parkingPayMap.set(index, [pay, 0]);
});

// 차량 번호와 차량 무게
// { 1 => 200, carNumber => Weight, 3 => 300, 4 => 800 }
const carWeightMap = new Map();
carWeightArr.forEach((weight, index) => {
  carWeightMap.set(index + 1, weight);
});

let totalPay = 0;

const remainCar = []; // 주차하지 못해서 대기중인 차들

for (let ord of order) {
  // 주차할곳이 없어 대기중인 차를 주차시켜줌
  if (remainCar.length) {
    for (let [key, value] of parkingPayMap) {
      const [pay, carNumber] = value;

      // 주차할 곳이 생기면 제일 먼저 대기한 차부터 넣어줌
      if (carNumber === 0) {
        parkingPayMap.set(key, [pay, remainCar.shift()]);
      }
    }
  }

  // 주차할때
  if (ord > 0) {
    let parkingFlag = false;
    for (let [key, value] of parkingPayMap) {
      const [pay, carNumber] = value;

      // 주차할 곳이 생기면 해당 차량을 해당 자리에 넣고 종료
      if (carNumber === 0) {
        parkingPayMap.set(key, [pay, ord]);
        parkingFlag = true;
        break;
      }
    }

    // 만약 주차할 자리가 없었다면 remainCar에 넣어줌
    if (!parkingFlag) remainCar.push(ord);
  }

  // 차 뺼떄
  if (ord < 0) {
    for (let [key, value] of parkingPayMap) {
      const [pay, carNumber] = value;

      // 주차장 자리를 순회하면서 해당 장소에 해당 차가 존재하면 뺌
      if (carNumber === Math.abs(ord)) {
        // 가격 = 무게 * 해당 주차구역의 가격
        totalPay += carWeightMap.get(carNumber) * pay;
        parkingPayMap.set(key, [pay, 0]); // 차량을 뺴줌
        break;
      }
    }
  }
}
console.log(totalPay);
