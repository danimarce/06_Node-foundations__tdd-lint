import { describe, test, expect } from "vitest";
import formatStringByWordsLength from "./formatStringByWordsLength";

describe("Given method formatStringByWordsLength", () => {
  test("When the input type is non-string Then an error must be thrown", () => {
    //Arrange
    const sentence = 2;

    //Act
    //Assert
    expect(() => formatStringByWordsLength(sentence)).toThrowError();
  });

  test("When the input type is a number Then the error must be expected string but received number", () => {
    //Arrange
    const sentence = 2;

    try {
      //Act
      formatStringByWordsLength(sentence);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected string but received number");
    }
  });

  test("When the input type is an array Then the error must be expected string but received array", () => {
    //Arrange
    const sentence = [];

    try {
      //Act
      formatStringByWordsLength(sentence);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected string but received array");
    }
  });

  test("When the sentece is 'test test test test test test' Then the result returned must be 'TEST TEST TEST TEST TEST TEST'", () => {
    //Arrange
    const sentence = "test test test test test test";

    //Act
    const result = formatStringByWordsLength(sentence);
    //Assert
    expect(result).toBe("TEST TEST TEST TEST TEST TEST");
  });

  test("When the sentece is 'test test test test' Then the result returned must be 'test test test test'", () => {
    //Arrange
    const sentence = "test test test test";

    //Act
    const result = formatStringByWordsLength(sentence);
    //Assert
    expect(result).toBe("test test test test");
  });

  test("When the sentece is 'test' Then the result returned must be 'test'", () => {
    //Arrange
    const sentence = "test";

    //Act
    const result = formatStringByWordsLength(sentence);
    //Assert
    expect(result).toBe("test");
  });
});
