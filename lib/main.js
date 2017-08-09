function getSingleLyric(num1, num2, num3, unit1, unit2) {
    if (num1 === "No more") {
        return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }
    return `${num1} ${unit1} of beer on the wall, ${num2} ${unit1} of beer.
Take one down and pass it around, ${num3} ${unit2} of beer on the wall.`;
}

function generateLyric(count) {
    switch (count) {
        case 0:
            return getSingleLyric("No more");
        case 1:
            return getSingleLyric(1, 1, "no more", "bottle", "bottles");
        case 2:
            return getSingleLyric(2, 2, 1, "bottles", "bottle");
        default:
            return getSingleLyric(count, count, count - 1, "bottles", "bottles");
    }
}

function song(count) {
    let results = [];
    for (; count >= 0; count--) {
        results.push(generateLyric(count));
    }
    return results.join("\n");
}

module.exports = song;
