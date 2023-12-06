//2023 - Day 4 - Part 1
const part1 = () => {
    function getNumber(s) {
        let map = {}
        let rs = 0
        s.split("|")[0].trim().split(" ").filter(x => x).map(x => parseInt(x.trim())).forEach(x => {
            map[x] = 1
        })
        s.split("|")[1].trim().split(" ").filter(x => x).map(x => parseInt(x.trim())).forEach(p => {
            if (map[p] == 1) {
                rs = rs == 0 ? 1 : rs * 2;
                map[p] = 0;
            }
        })
        return rs;
    }
    b = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(x => x).map(x => x.split(": ")[1]);
    s = 0;
    b.forEach(x => {
        let k = getNumber(x);
        s = s + k;
    });
    return s
}
console.log("Part 1", part1())

