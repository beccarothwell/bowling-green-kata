import { calculateBowlingScore } from "../src/index";

describe("suggested initial test cases", () => {
  test("12 rolls: 12 strikes = 10 frames * 30 points = 300", () => {
    const scores = "X X X X X X X X X X X X";
    expect(calculateBowlingScore(scores)).toBe(300);
  });
  test("20 rolls: 10 pairs of 9 and miss = 10 frames * 9 points = 90", () => {
    const scores = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-";
    expect(calculateBowlingScore(scores)).toBe(90);
  });
  test("21 rolls: 10 pairs of 5 and spare, with a final 5 = 10 frames * 15 points = 150", () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";
    expect(calculateBowlingScore(scores)).toBe(150);
  });
});
describe("test different input notation for final bonus roll with strikes and spares", () => {
  test(`Strike noted immediately after final spare 5/X.
  21 rolls: 10 pairs of 5 and spare, with a final strike = 9 frames * 15 points + 1 frame * 20 points = 155`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/X";
    expect(calculateBowlingScore(scores)).toBe(155);
  });
  test(`Strike noted with space after final spare - 5/ X.
  21 rolls: 10 pairs of 5 and spare, with a final strike = 9 frames * 15 points + 1 frame * 20 points = 155`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ X";
    expect(calculateBowlingScore(scores)).toBe(155);
  });
});
