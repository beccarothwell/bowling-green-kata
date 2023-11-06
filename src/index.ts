export function calculateBowlingScore(string: string) {
  let arr = string.split(" ");

  if (arr.length === 10 && arr[9].length > 2) {
    arr = [...arr.slice(0, 9), arr[9].slice(0, 2), arr[9].slice(2)];
  }

  let total = 0;

  for (let i = 0; i < 10; i++) {
    if (arr[i] === "X") {
      total += strikeFrameTotal(arr[i + 1], arr[i + 2]);
    } else if (arr[i].includes("/")) {
      total += spareFrameTotal(arr[i + 1]);
    } else {
      total += ordinaryFrameTotal(arr[i]);
    }
  }

  return total;
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
  return 10 + ordinaryFrameTotal(twoAheadFrameRolls);
};
