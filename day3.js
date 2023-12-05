//2023 - Day 3 - Part 1
const part1 = () => {
    b = document.getElementsByTagName("pre")[0].innerText.split("\n");
    sum = 0;
    function isPart(line, start, length) {
        const isSymbol = (c) => c && c !== "." && isNaN(parseInt(c))
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
                rs += parseInt(n[0])
            }
        })
        return rs;
    }
    b.forEach((x, idx) => {
        let k = getNumber(x, idx);
        sum = sum + k;
    });
    return sum;
}
console.log("Part 1", part1());