// shifts strings using a shift factor
// ch.charCodeAt(index)

const getCodeList = (string) => {
    let codeList = [];
    for (let i = 0; i < string.length; i++){
        codeList[i] = string.charCodeAt(i);
    }
    return codeList;
}

const shiftCodeList = (arr, factor) => {
	let updatedList = [];
    for (let i = 0; i < arr.length; i++){
  	    if (arr[i] >= 65 && arr[i] <= 90){
  	        let num = arr[i] + factor;
            if (num > 90){
                updatedList[i] = (num % 90) + 64;
            } else if (num < 65){
                updatedList[i] = 91 - (65 % num);
            } else {
                updatedList[i] = num;
            }
        } else if (arr[i] >= 97 && arr[i] <= 122){
            let num = arr[i] + factor;
            if (num > 122){
                updatedList[i] = num % 122 + 96;
            } else if (num < 97) {
                updatedList[i] = 123 - (97 % num);
            } else {
                updatedList[i] = num;
            }
        } else {
            updatedList.push(arr[i]);
        }
    } 
  return updatedList
}

const convertCodeList = (arr) => {
	let wordList = [];
    for (let i = 0; i < arr.length; i++){
  	    wordList[i] = String.fromCharCode(arr[i]);
    }
    return wordList.join("");
}


const caesarCipher = (string, factor) => {
    let codeList = getCodeList(string);
    let shiftedList = shiftCodeList(codeList, factor);
    let finalList = convertCodeList(shiftedList);
    return finalList;
}

module.exports = caesarCipher;