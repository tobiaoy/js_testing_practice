const capitalize = (string) => {
    if (!string) {
        return '';
    }
    let word_list = string.split("");
    let first = word_list[0].toUpperCase();
    let rest = string.substr(1);
    return first.concat(rest);
}

module.exports = capitalize;