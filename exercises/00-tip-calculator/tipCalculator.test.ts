import { describe, it, expect } from "@jest/globals";
import { calculateTip } from "./tipCalculator";

describe("tipCalculator", () => {
  it("should return the tip as 5 and total as 105 when tipRate is 5 and billAmount is 100", () => {
    const result = calculateTip(5, 100);
    expect(result).toEqual({
      tip: 5,
      total: 105,
    });
  });
  it("should return the tip as 1 and the total as 11 when then the tipRate is 10 and the billAmount is 10", () => {
    const result = calculateTip(10, 10);
    expect(result).toEqual({
      tip: 1,
      total: 11,
    });
  });

  it("should round the tip to the nearest round number", () => {
    const result = calculateTip(12.1, 50);
    expect(result).toEqual({
      tip: 6,
      total: 56,
    });
  });
  it('should return "invalid Tip Rate" when the tip is less than 0', () => {
    const result = calculateTip(-3, 100);
    expect(result).toEqual("Invalid Tip Rate");
  });

  it('should return "Invalid Bill Amount" when the bill is 0', () => {
    const result = calculateTip(5, 0);
    expect(result).toEqual("Invalid Bill Amount");
  });
  it('should return "Invalid Bill Amount" when the bill is negative', () => {
    const result = calculateTip(5, -1);
    expect(result).toEqual("Invalid Bill Amount");
  });
});
