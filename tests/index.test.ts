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
  test(`Strike noted with spaces between bonus strikes - X X X.
  21 rolls: 9 pairs of 5 and spare, 1 strike, with two bonus strikes = 8 frames * 15 points + 1 frame * 20 points + 1 frame * 30 points = 170`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ X X X";
    expect(calculateBowlingScore(scores)).toBe(170);
  });
  test(`Strike noted with no spaces between bonus strikes - XXX.
  21 rolls: 9 pairs of 5 and spare, 1 strike, with two bonus strikes = 8 frames * 15 points + 1 frame * 20 points + 1 frame * 30 points = 165`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ XXX";
    expect(calculateBowlingScore(scores)).toBe(170);
  });
  test(`Strike noted with a space before bonus spare - X 5/.
  21 rolls: 9 pairs of 5 and spare, 1 strike, with two bonus rolls equaling a spare = 8 frames * 15 points + 2 frames * 20 points = 160`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ X 5/";
    expect(calculateBowlingScore(scores)).toBe(160);
  });
  test(`Strike noted with no space before bonus spare - X5/.
  21 rolls: 9 pairs of 5 and spare, 1 strike, with two bonus rolls equaling a spare = 8 frames * 15 points + 2 frames * 20 points = 160`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ X5/";
    expect(calculateBowlingScore(scores)).toBe(160);
  });
  test(`Strike noted with no space before bonus rolls - X-7.
  21 rolls: 9 pairs of 5 and spare, 1 strike, with two bonus rolls a miss and a 7 = 8 frames * 15 points + 1 frame * 20 points + 1 frame * 17 points = 157`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ X-7";
    expect(calculateBowlingScore(scores)).toBe(157);
  });
  test(`Strike noted with a space before bonus rolls - X -7.
  21 rolls: 9 pairs of 5 and spare, 1 strike, with two bonus rolls a miss and a 7 = 8 frames * 15 points + 1 frame * 20 points + 1 frame * 17 points = 157`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ X -7";
    expect(calculateBowlingScore(scores)).toBe(157);
  });
  test(`Strike noted with no space before bonus rolls - X7-.
  21 rolls: 9 pairs of 5 and spare, 1 strike, with two bonus rolls a 7 and a miss = 8 frames * 15 points + 1 frame * 20 points + 1 frame * 17 points = 157`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ X7-";
    expect(calculateBowlingScore(scores)).toBe(157);
  });
  test(`Strike noted with a space before bonus rolls - X 7-.
  21 rolls: 9 pairs of 5 and spare, 1 strike, with two bonus rolls a 7 and a miss = 8 frames * 15 points + 1 frame * 20 points + 1 frame * 17 points = 157`, () => {
    const scores = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ X 7-";
    expect(calculateBowlingScore(scores)).toBe(157);
  });
});
