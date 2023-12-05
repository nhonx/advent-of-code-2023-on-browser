//2023 - Day 1 - Part 2
const map = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9 }
function getNumber(s) {
    var rs = [...s.matchAll(/(one|two|three|four|five|six|seven|eight|nine|\d)/g)];
    if (rs.length <= 0) {
        return 0;
    }
    var firstDigit = rs[0][0];
    rs = [...s.matchAll(/(?=one|two|three|four|five|six|seven|eight|nine|\d)/g)];
    var temp = s.substr(rs[rs.length - 1].index, s.length - 1);
    // console.log(temp)
    rs = [...temp.matchAll(/(one|two|three|four|five|six|seven|eight|nine|\d)/g)];
    var lastDigit = rs[0][0];
    console.log(lastDigit, rs)
    return parseInt([firstDigit, lastDigit].map(x => x.length === 1 ? x : map[x]).join(""));
}
b = document.getElementsByTagName("pre")[0].innerText.split("\n");
s = 0;
b.forEach(x => {
    let k = getNumber(x);
    console.log(k, x);
    if (x) s = s + k;
}); s


//2023 - Day 3 - Part 1
b = document.getElementsByTagName("pre")[0].innerText.split("\n");
s = 0;
function isPart(line, start, length) {
    const isSymbol = (c) => c !== "." && isNaN(parseInt(c))
    for (var i = start - 1; i < start - 1 + length + 2; i++) {
        if (line - 1 >= 0 && i >= 0 && i < b[line - 1].length && isSymbol(b[line - 1][i])) {
            return true;
        }
    }
    for (var i = start - 1; i < start - 1 + length + 2; i++) {
        if (line + 1 >= 0 && i >= 0 && i < b[line + 1].length && isSymbol(b[line + 1][i])) {
            return true;
        }
    }
    if (isSymbol(b[line][start - 1]) || isSymbol(b[line][start + length])) return true;
    return false;
}
function getNumber(a, i) {
    let rs = 0;
    const nums = [...a.matchAll(/(\d+)/g)]
    nums.forEach(n => {
        if (isPart(i, n.index, n[0].length)) {
            console.log(n[0])
            rs += parseInt(n[0])
        }
    })
    return rs;
}
b.forEach((x, idx) => {
    let k = getNumber(x, idx);
    s = s + k;
});
s