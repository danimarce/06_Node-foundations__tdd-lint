import { describe, test, expect, vi } from "vitest";
import generateRandomNumberInRange from "./generateRandomNumberInRange";

describe("Given method generateRandomNumberInRange", () => {
  test("When a non-number is recieved Then an error must be thrown", () => {
    //Arrange
    const threshold = "test";

    //Act
    //Assert
    expect(() => generateRandomNumberInRange(threshold)).toThrowError();
  });

  test("When a string is recieved Then the error message must be expected number but received string", () => {
    //Arrange
    const threshold = "test";

    try {
      //Act
      generateRandomNumberInRange(threshold);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected number but received string");
    }
  });

  test("When a string is recieved Then the error message must be expected number but received boolean", () => {
    //Arrange
    const threshold = true;

    try {
      //Act
      generateRandomNumberInRange(threshold);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected number but received boolean");
    }
  });

  test("When the threshold is 10 and the mockRandomValue is 0.5 Then result must be 5", () => {
    //Mock
    const mockRandomValue = 0.5;

    vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

    //Arrange
    const threshold = 10;

    //Act
    const result = generateRandomNumberInRange(threshold);

    //Assert
    expect(result).toBe(5);
  });

  test("When the threshold is 100 and the mockRandomValue is 0.49 Then result must be 49", () => {
    //Mock
    const mockRandomValue = 0.49;

    vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

    //Arrange
    const threshold = 100;

    //Act
    const result = generateRandomNumberInRange(threshold);

    //Assert
    expect(result).toBe(49);
  });

  test("When the threshold is 50 and the mockRandomValue is 0.5 Then result must be 25", () => {
    //Mock
    const mockRandomValue = 0.5;

    vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

    //Arrange
    const threshold = 50;

    //Act
    const result = generateRandomNumberInRange(threshold);

    //Assert
    expect(result).toBe(25);
  });
});
