/**
 * Advent Of Code 2023 - Day 2
 * URL: https://adventofcode.com/2023/day/2/input
 * Run on Browser console.
 */
part1 = () => {
    const b = document.getElementsByTagName("pre")[0].innerText.split("\n")
    const parse = (s) => {
        let a = s.split(": ");
        let id = parseInt(a[0].replace("Game ", ""));
        let cases = a[1].split("; ");
        cases.forEach(c => {
            let m = {};
            c.split(", ").forEach(p => {
                m[p.split(" ")[1]] = parseInt(p.split(" ")[0]);
            });
            if (m["red"] > 12 || m["green"] > 13 || m["blue"] > 14) id = 0;
        });
        return id
    }
    var s = 0;
    b.forEach(g => { if (g) s = s + parse(g) });
    return s
}
part2 = () => {
    const b = document.getElementsByTagName("pre")[0].innerText.split("\n")
    const parse = (s) => {
        let a = s.split(": ");
        let cases = a[1].split("; ");
        let max = {};
        cases.forEach(c => {
            c.split(", ").forEach(p => {
                const color = p.split(" ")[1]
                const num = parseInt(p.split(" ")[0])
                if (!max[color]) {
                    max[color] = num;
                } else {
                    max[color] = num > max[color] ? num : max[color];
                }
            });
        });
        return max["red"]* max["green"]* max["blue"]
    }
    var s = 0;
    b.forEach(g => { if (g) s = s + parse(g) });
    return s
}
