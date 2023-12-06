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

//2023 - Day 4 - Part 2
const part2 = () => {
    function getCount(s) {
        let map = {}
        let rs = 0
        s.split("|")[0].trim().split(" ").filter(x => x).map(x => parseInt(x.trim())).forEach(x => {
            map[x] = 1
        })
        s.split("|")[1].trim().split(" ").filter(x => x).map(x => parseInt(x.trim())).forEach(p => {
            if (map[p] == 1) {
                rs++;
                map[p] = 0;
            }
        })
        return rs;
    }
    b = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(x => x).map(x => x.split(": ")[1]);
    s = 0;
    let map = {};
    b.forEach((x, i) => {
        map[i + 1] = 1
    })
    b.forEach((x, idx) => {
        let k = getCount(x);
        for (var i = idx + 1; i <= idx + k; i++) {
            map[i + 1] = map[i + 1] + map[idx + 1];
        }

    });
    b.forEach((x, i) => {
        s += map[i + 1]
    })
    return s
}
console.log("Part 2", part2())
