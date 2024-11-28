const analyzeArray = (arr) => {
    let ob = {
        'average': arr.reduce((a, b) => a + b) / arr.length,
        'min': Math.min(...arr),
        'max': Math.max(...arr),
        'length': arr.length
    }
    return ob
}

module.exports = analyzeArray;