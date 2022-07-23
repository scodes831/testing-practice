function reverseString(str) {
    const strArr = Array.from(str);
    const revStrArr = strArr.reverse();
    const result = revStrArr.join('');
    return result;
}
module.exports = reverseString;