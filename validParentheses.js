/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 === 1)
        return false
    characterArray = []
    for (var i = 0; s.length > i; i++) {
        if ((s[i] === '{') || (s[i] === '(') || (s[i] === '['))
            characterArray.push(s[i]);
        else if ((s[i] === '}') || (s[i] === ')') || (s[i] === ']')) {
            var lastChar = characterArray.pop();
            if (lastChar === compliment(s[i])) {
                console.log("passed")
            }
            else {
                console.log("failed")
                return false;
            }
        }
        else {
            return false;
        }
    }
    if (characterArray.length == 0)
        return true;
    else {
        return false;
    }
};

function compliment(character) {
    if (character === '}')
        return '{'
    if (character === ')')
        return '('
    if (character === ']')
        return '['
}