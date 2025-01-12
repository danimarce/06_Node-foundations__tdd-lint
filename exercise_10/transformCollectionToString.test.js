import { describe, test, expect } from "vitest";
import transformCollectionToString from "./transformCollectionToString";

describe("Given method transformCollectionToString", () => {
  test("When input type is not an array Then an error must be thrown", () => {
    //Arrange
    const collection = 2;

    //Act
    //Assert
    expect(() => transformCollectionToString(collection));
  });

  test("When input type is an string Then the error message must be expected array but received string", () => {
    //Arrange
    const collection = "test";

    try {
      //Act
      transformCollectionToString(collection);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected array but received string");
    }
  });

  test("When input type is an number Then the error message must be expected array but received number", () => {
    //Arrange
    const collection = 2;

    try {
      //Act
      transformCollectionToString(collection);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected array but received number");
    }
  });

  test("When input is ['apple', 'grapes', 'strawberries'] Then the result returned must be 'apple | grapes | strawberries'", () => {
    //Arrange
    const collection = ["apple", "grapes", "strawberries"];

    //Act
    const result = transformCollectionToString(collection);

    //Assert
    expect(result).toBe("apple | grapes | strawberries");
  });

  test("When input is [] Then the result returned must be ''", () => {
    //Arrange
    const collection = [];

    //Act
    const result = transformCollectionToString(collection);

    //Assert
    expect(result).toBe("");
  });

  test("When input is ['test', 'test', 'test'] Then the result returned must be 'apple | grapes | strawberries'", () => {
    //Arrange
    const collection = ["test", "test", "test"];

    //Act
    const result = transformCollectionToString(collection);

    //Assert
    expect(result).toBe("test | test | test");
  });
});
