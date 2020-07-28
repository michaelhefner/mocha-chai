import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe("isAnagram - basic functionality", () => {
  it("returns true if word is anagram", () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns false if either string has extra letters', () => {
      const expected = false;
      const actual = isAnagram('elbows', 'below');
      expect(actual).to.equal(expected);

      const actual2 = isAnagram('below', 'elbows');
      expect(actual).to.equal(expected);
  });
  it('returns false when the strings have the same letters and different quantities', () => {
      const expected = false;
      const actual = isAnagram('listens', 'silent');
      expect(actual).to.equal(expected);
  });
});
