const reverseString = (string) => {
    if (!string){
        return "";
    }
    if (string.length === 1){
        return string;
    }
    let word_list = string.split("");
    let reversed_list = word_list.reverse();
    return reversed_list.join("");
}

module.exports = reverseString;