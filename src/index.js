function removePairsOfBrackets(a, b) {
    for (let item of b) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === item[0] && a[i + 1] === item[1]) {
                a.splice(i, 2)
            }
        }
    }
    return a
}

function checksCycleCondition(n, m) {
    let clone = Object.assign([], n);
    let lstN = removePairsOfBrackets(n, m)
    return lstN.length < clone.length
}

module.exports = function check(str, bracketsConfig) {
    let lst = str.split('')
    let lstNew = []
    while (checksCycleCondition(lst, bracketsConfig)) {
        lstNew = removePairsOfBrackets(lst, bracketsConfig)
        lst = lstNew.splice(0)
    }
    return lst.length === 0
}
