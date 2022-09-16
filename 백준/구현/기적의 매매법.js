function jTrading() {
  let jMoney = +inputData[0];
  let jStock = 0;
  stock.forEach((curStock) => {
    if (jMoney >= curStock) {
      jStock += parseInt(jMoney / curStock);
      jMoney = jMoney % curStock;
    }
  });
  return jStock * stock.at(-1) + jMoney;
}

function sTrading() {
  let sMoney = +inputData[0];
  let sStock = 0;

  let upStock = 0;
  let downStock = 0;

  for (let i = 1; i < stock.length; i++) {
    if (stock[i] > stock[i - 1]) {
      upStock += 1;
      downStock = 0;
    } else if (stock[i] < stock[i - 1]) {
      downStock += 1;
      upStock = 0;
    }

    if (upStock >= 3) {
      sMoney = sMoney + sStock * stock[i];
      sStock = 0;
    }

    if (downStock >= 3) {
      if (sMoney >= stock[i]) {
        sStock += parseInt(sMoney / stock[i]);
        sMoney = sMoney % stock[i];
      }
    }
  }
  return sStock * stock.at(-1) + sMoney;
}

const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString().split("\n");

const stock = inputData[1].split(" ").map((val) => +val);

const jTotalMoney = jTrading();

const sTotalMoney = sTrading();

if (jTotalMoney > sTotalMoney) {
  console.log("BNP");
} else if (jTotalMoney < sTotalMoney) {
  console.log("TIMING");
} else {
  console.log("SAMESAME");
}
