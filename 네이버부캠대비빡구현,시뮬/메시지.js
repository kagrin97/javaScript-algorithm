const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  if (line === "0") {
    rl.close();
  } else {
    const words = line.split(" ");
    const n = parseInt(words[0]);
    const sockets = words.slice(1).map((x) => parseInt(x));
    let devices = Array.from({ length: n }, () => 0);

    let plugs = 0;
    let count = 0;

    for (let i = 0; i < sockets.length; i++) {
      const device = sockets[i];
      if (devices.includes(device)) {
        continue;
      }

      if (plugs < n) {
        devices[plugs] = device;
        plugs++;
      } else {
        devices[
          devices.indexOf(
            devices.reduce((a, b) => {
              const aIndex = sockets.indexOf(a, i + 1);
              const bIndex = sockets.indexOf(b, i + 1);
              return aIndex === -1 || (bIndex !== -1 && aIndex > bIndex)
                ? b
                : a;
            })
          )
        ] = device;
        count++;
      }
    }

    console.log(count);
  }
});
