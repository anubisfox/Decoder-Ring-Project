// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    describe("encoding", () => {
        it("should translate the letter i and j to 42", () => {
            const message = "jiggle";
            const actual = polybius(message);
            const expected = "424222221351";

            expect(actual).to.equal(expected);
        });
        it("should ignore all capital letters", () => {
            const message = "Message";
            const actual = polybius(message);
            const expected = "23513434112251";

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces", () => {
            const message = "my message";
            const actual = polybius(message);
            const expected = "2345 23513434112251";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", () => {
        it("should translate 42 to (i/j)", () => {
            const message = "424222221351";
            const actual = polybius(message, false);

            expect(actual).to.include("(i/j)");
        });
        it("should maintain spaces", () => {
            const message = "2345 23513434112251";
            const actual = polybius(message, false);
            const expected = "my message";

            expect(actual).to.equal(expected);
        });
    });
});