/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
 * - if total number of words is greater than 5, then return uppercase string
 * - otherwise, return lowercase string
 * input: string (sentence)
 * output: string
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */

const formatStringByWordsLength = (sentence) => {
  if (Array.isArray(sentence)) {
    throw new TypeError("expected string but received array");
  }

  if (typeof sentence !== "string") {
    throw new TypeError(`expected string but received ${typeof sentence}`);
  }

  const sentenceSplited = sentence.split(" ");
  const threshold = 5;

  if (sentenceSplited.length > threshold) {
    return sentence.toUpperCase();
  }

  return sentence.toLowerCase();
};

export default formatStringByWordsLength;
