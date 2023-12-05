//2023 - Day 1 - Part 2
const map = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9 }
const part2 = () => {
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
    });
    return s
}
console.log("Part 2", part2())