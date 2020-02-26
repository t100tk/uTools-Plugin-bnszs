const stoneEvolution = {
    number8: {
        xiandan: 2,
        lingdan: 3,
        lingshi: 4,
        yueshi: 5
    },
    number16: {
        xiandan: 1,
        lingdan: 1,
        lingshi: 1,
        yueshi: 1
    },
    number31: {
        xiandan: 1,
        lingdan: 1,
        lingshi: 1,
        yueshi: 1
    },
    Count: (xd, ld, ls, ys) => {
        let zj = stoneEvolution.number8.xiandan * xd + stoneEvolution.number8.lingdan * ld + stoneEvolution.number8.lingshi * ls + stoneEvolution.number8.yueshi * ys;
        return zj;
    }
}




let xd = document.getElementById('xd');
xd.addEventListener('change', () => {
    console.log(
        stoneEvolution.Count(xd.value, 1, 1, 1)
    )
})