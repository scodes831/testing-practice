function capitalize(str) {
    const strArr = Array.from(str);
    const cap0 = strArr[0].toUpperCase();
    strArr.splice(0, 1, cap0);
    const result = strArr.join('');
    return result;
}
module.exports = capitalize;