import { describe, test, expect } from "vitest";
import checkCollectionHasElements from "./checkCollectionHasElements";

describe("Given method checkCollectionHasElements", () => {
  test("When collection is not an array Then an error must be thrown", () => {
    //Arrange
    const collection = 3;

    //Act
    //Assert
    expect(() => checkCollectionHasElements(collection)).toThrowError();
  });

  test("When collection is an string Then the error message must be expected array but received string", () => {
    //Arrange
    const collection = "test";

    try {
      //Act
      checkCollectionHasElements(collection);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected array but received string");
    }
  });

  test("When collection is an number Then the error message must be expected array but received number", () => {
    //Arrange
    const collection = 3;

    try {
      //Act
      checkCollectionHasElements(collection);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected array but received number");
    }
  });

  test("When collection is empty Then the result returned must be false", () => {
    //Arrange
    const collection = [];

    //Act
    const result = checkCollectionHasElements(collection);

    //Assert
    expect(result).toBe(false);
  });

  test("When collection is not empty Then the result returned must be true", () => {
    //Arrange
    const collection = [1, 2, 3, 4];

    //Act
    const result = checkCollectionHasElements(collection);

    //Assert
    expect(result).toBe(true);
  });

  test("When collection is not empty Then the result returned must be true", () => {
    //Arrange
    const collection = ["1", "2", "3", "4"];

    //Act
    const result = checkCollectionHasElements(collection);

    //Assert
    expect(result).toBe(true);
  });
});
