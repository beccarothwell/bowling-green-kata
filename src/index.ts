export function calculateBowlingScore(string: string) {
  let arr = string.split(" ");

  if (arr.length === 10 && arr[9].length > 2) {
    arr = [...arr.slice(0, 9), arr[9].slice(0, 2), arr[9].slice(2)];
  }

  let total = 0;

  for (let i = 0; i < 10; i++) {
    if (arr[i] === "X") {
      total += 10;

      if (arr[i + 1] === "X") {
        total += 10;

        if (arr[i + 2] === "X") {
          total += 10;
        } else {
          const roll1 = arr[i + 2].at(0) === "-" ? 0 : Number(arr[i + 2].at(0));

          total += roll1;
        }
      } else {
        if (arr[i + 1].includes("/")) {
          total += 10;
        } else {
          const roll1 = arr[i + 2].at(0) === "-" ? 0 : Number(arr[i + 2].at(0));
          const roll2 = arr[i + 2].at(1) === "-" ? 0 : Number(arr[i + 2].at(1));
          total += roll1 + roll2;
        }
      }
    } else if (arr[i].includes("/")) {
      total += 10;

      if (arr[i + 1] === "X") {
        total += 10;
      } else {
        const roll1 = arr[i + 1].at(0) === "-" ? 0 : Number(arr[i + 1].at(0));
        total += roll1;
      }
    } else {
      const roll1 = arr[i].at(0) === "-" ? 0 : Number(arr[i].at(0));
      const roll2 = arr[i].at(1) === "-" ? 0 : Number(arr[i].at(1));
      total += roll1 + roll2;
    }
  }

  return total;
}
