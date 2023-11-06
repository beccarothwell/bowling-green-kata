export function calculateBowlingScore(string: string): number {
  let arr = string.split(" ");

  if (arr.length === 10 && arr[9].length > 2) {
    if (arr[9].at(0) === "X") {
      if (arr[9].at(1) === "X") {
        arr = [
          ...arr.slice(0, 9),
          arr[9].slice(0, 1),
          arr[9].slice(1, 2),
          arr[9].slice(2),
        ];
      } else {
        arr = [...arr.slice(0, 9), arr[9].slice(0, 1), arr[9].slice(1)];
      }
    } else {
      arr = [...arr.slice(0, 9), arr[9].slice(0, 2), arr[9].slice(2)];
    }
  }

  console.log(arr);

  return arr.reduce((acc, curVal, i) => {
    if (i < 10) {
      if (curVal === "X") {
        return acc + strikeFrameTotal(arr[i + 1], arr[i + 2]);
      } else if (curVal.includes("/")) {
        return acc + spareFrameTotal(arr[i + 1]);
      } else {
        return acc + ordinaryFrameTotal(arr[i]);
      }
    }
    return acc;
  }, 0);
}

const ordinaryFrameTotal = (frameRolls: string): number => {
  const roll1 = frameRolls.at(0) === "-" ? 0 : Number(frameRolls.at(0));
  const roll2 = frameRolls.at(1) === "-" ? 0 : Number(frameRolls.at(1));
  return roll1 + roll2;
};

const lastRollBonus = (frameRolls: string): number => {
  if (frameRolls === "X") {
    return 10;
  } else {
    const roll1 = frameRolls.at(0) === "-" ? 0 : Number(frameRolls.at(0));
    return roll1;
  }
};

const spareFrameTotal = (oneAheadFrameRolls: string): number => {
  return 10 + lastRollBonus(oneAheadFrameRolls);
};

const strikeFrameTotal = (
  oneAheadFrameRolls: string,
  twoAheadFrameRolls: string
): number => {
  if (oneAheadFrameRolls === "X") {
    return 20 + lastRollBonus(twoAheadFrameRolls);
  } else if (oneAheadFrameRolls.includes("/")) {
    return 20;
  }
  return 10 + ordinaryFrameTotal(oneAheadFrameRolls);
};
