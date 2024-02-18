// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
    let input = "Zebra Magazine";
    let shift = 3;

    it("returns false if the shift values are invalid", () => {
        const shiftValues = [0, -26, 26, undefined];
        const actual = shiftValues.every((shift) => {
            return !caesar(input, shift);
        });
        expect(actual).to.be.true;
    });

    it("should ignore all capital letters", () => {
        const actual = caesar(input, shift);
        const expected = "cheud pdjdclqh";
        expect(actual).to.equal(expected);
    });

    describe("encoding a message", () => {
        it("should handle shifts that go past the end of the alphabet", () => {
            const expected = "cheud pdjdclqh";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and other nonalphabetic symbols", () => {
            const expected = "cheud pdjdclqh";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });
    });
});