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

const part2 = () => {
    b = document.getElementsByTagName("pre")[0].innerText.split("\n");
    sum = 0;
    function getNumber(a, i) {
        const isNum = (c) => c && !isNaN(parseInt(c))
        let rs = 0;
        for (var j = 0; j < a.length; j++) {
            if (a[j] == '*') {
                const muls = []
                if (i > 0) {
                    let pos = b[i - 1].split("").map((x, idx) => isNum(x) ? idx : -1).filter(x => x >= 0 && x >= j - 1 && x <= j + 1)
                    const nums = [...b[i - 1].matchAll(/(\d+)/g)]
                    pos.forEach(p => {
                        nums.forEach(n => {
                            if (p >= n.index && p <= n.index + n[0].length - 1) {
                                if (muls.filter(x => x[0] === `${i - 1}${n.index}`).length == 0) {
                                    muls.push([`${i - 1}${n.index}`, parseInt(n[0])]);
                                }
                            }
                        })
                    })

                }
                if (i < b.length - 1) {
                    let pos = b[i + 1].split("").map((x, idx) => isNum(x) ? idx : -1).filter(x => x >= 0 && x >= j - 1 && x <= j + 1)
                    const nums = [...b[i + 1].matchAll(/(\d+)/g)]
                    pos.forEach(p => {
                        nums.forEach(n => {
                            if (p >= n.index && p <= n.index + n[0].length - 1) {
                                if (muls.filter(x => x[0] === `${i + 1}${n.index}`).length == 0) {
                                    muls.push([`${i + 1}${n.index}`, parseInt(n[0])]);
                                }
                            }
                        })
                    })
                }
                if (isNum(a[j - 1])) {
                    const nums = [...b[i].matchAll(/(\d+)/g)]
                    nums.forEach(n => {
                        if (j - 1 >= n.index && j - 1 <= n.index + n[0].length - 1) {
                            muls.push([`${i}${n.index}`, parseInt(n[0])]);
                        }
                    })
                }
                if (isNum(a[j + 1])) {
                    const nums = [...b[i].matchAll(/(\d+)/g)]
                    nums.forEach(n => {
                        if (j + 1 >= n.index && j + 1 <= n.index + n[0].length - 1) {
                            muls.push([`${i}${n.index}`, parseInt(n[0])]);
                        }
                    })
                }
                if (muls.length === 2) {
                    rs += muls[0][1] * muls[1][1]
                }
            }
        }
        return rs;
    }
    b.forEach((x, idx) => {
        let k = getNumber(x, idx);
        sum = sum + k;
    });
    return sum;
}
console.log("Part 2", part2());