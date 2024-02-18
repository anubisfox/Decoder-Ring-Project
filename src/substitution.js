// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function isValidAlphabet(alphabet) {
    if (typeof alphabet !== 'string' || alphabet.length !== 26) {
      return false;
    }
    const uniqueChars = new Set(alphabet.toLowerCase());
    return uniqueChars.size === 26;
  }

  function substitution(input, alphabet, encode = true) {
    if (!isValidAlphabet(alphabet)) return false;

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputArray = input.toLowerCase().split("");

    let result = inputArray.map((char) => {
      if (char === " ") {
        return char;
      }

      const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
      return encode ? alphabet[index] : standardAlphabet[index];
    });
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
