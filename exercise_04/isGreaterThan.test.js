import { describe, test, expect } from "vitest";
import isGreaterThan from "./isGreaterThan";

describe("Given method isGreaterThan", () => {
  test("When input value is non-number Then an error must be thrown", () => {
    //Arrange
    const value = "test";
    const threshold = 13;

    //Act
    //Asert
    expect(() => isGreaterThan(value, threshold)).toThrowError();
  });

  test("When input threshold is non-number Then an error must be thrown", () => {
    //Arrange
    const value = 13;
    const threshold = "test";

    //Act
    //Asert
    expect(() => isGreaterThan(value, threshold)).toThrowError();
  });

  test("When input threshold is non-number Then error message must be expected number but received string", () => {
    //Arrange
    const value = 13;
    const threshold = "test";

    try {
      //Act
      isGreaterThan(value, threshold);
    } catch (error) {
      //Asert
      expect(error.message).toBe("expected number but received string");
    }
  });

  test("When input value is 13 input threshold is 12 Then the result returned must be true", () => {
    //Arrange
    const value = 13;
    const threshold = 12;

    //Act
    const result = isGreaterThan(value, threshold);

    //Asert
    expect(result).toBe(true);
  });

  test("When input value is 13 input threshold is 13 Then the result returned must be false", () => {
    //Arrange
    const value = 13;
    const threshold = 13;

    //Act
    const result = isGreaterThan(value, threshold);

    //Asert
    expect(result).toBe(false);
  });

  test("When input value is 13 input threshold is 20 Then the result returned must be false", () => {
    //Arrange
    const value = 13;
    const threshold = 20;

    //Act
    const result = isGreaterThan(value, threshold);

    //Asert
    expect(result).toBe(false);
  });
});
