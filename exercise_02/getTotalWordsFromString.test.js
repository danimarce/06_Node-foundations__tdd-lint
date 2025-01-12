import { describe, test, expect } from "vitest";
import getTotalWordsFromString from "./getTotalWordsFromString";

describe("Given method getTotalWordsFromString", () => {
  test("When a non-string value is recieved Then an error must be thrown", () => {
    //Arragne
    const sentence = 2;

    //Act
    //Assert
    expect(() => getTotalWordsFromString(sentence)).toThrowError();
  });

  test("When a number value is recieved Then the error message must be expected string but received number", () => {
    //Arragne
    const sentence = 2;

    try {
      //Act
      getTotalWordsFromString(sentence);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected string but received number");
    }
  });

  test("When a boolean value is recieved Then the error message must be expected string but received boolean", () => {
    //Arragne
    const sentence = true;

    try {
      //Act
      getTotalWordsFromString(sentence);
    } catch (error) {
      //Assert
      expect(error.message).toBe("expected string but received boolean");
    }
  });

  test("When the sentence is test test Then the result must be 2", () => {
    //Arragne
    const sentence = "test test";

    //Act
    const result = getTotalWordsFromString(sentence);

    //Assert
    expect(result).toBe(2);
  });

  test("When the sentence is empty Then the result must be 0", () => {
    //Arragne
    const sentence = "";

    //Act
    const result = getTotalWordsFromString(sentence);

    //Assert
    expect(result).toBe(0);
  });

  test("When the sentence is test test Then the result must be 4", () => {
    //Arragne
    const sentence = "test test test test";

    //Act
    const result = getTotalWordsFromString(sentence);

    //Assert
    expect(result).toBe(4);
  });
});
