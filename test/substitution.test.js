// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    describe("error-handling", () => {
        it("returns false if the given alphabet isn't exactly 26 characters long", () => {
            const message = "message";
            const alphabet = "short";
            const actual = substitution(message, alphabet);
    
            expect(actual).to.be.false;
        });
        it("returns false if there are any duplicate characters in the given alphabet", () => {
            const message = "message";
            const alphabet = "aaaaaaaaaaaaaaaa";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
    });
    describe("encoding", () => {
        it("should maintain spaces", () => {
            const message = "my message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "yp ysii.rs";

            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "Message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", () => {
        it("should correctly translate phrase", () => {
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq"
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";
    
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces", () => {
            const message = "yp ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            const expected = "my message";

            expect(actual).to.equal(expected);
        });
    });
});