function generateLine(count) {
    switch(count){
        case 0:
            return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
            break;
        case 1:
            return `${count} bottle of beer on the wall, ${count} bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.\n`;
            break;
        case 2:
            return `${count} bottles of beer on the wall, ${count} bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.\n`;
            break;
        default:
            return `${count} bottles of beer on the wall, ${count} bottles of beer.
Take one down and pass it around, ${count - 1} bottles of beer on the wall.\n`;
    }
}

function song(count){
    let results = '';
    for(;count >= 0; count--){
        results = results.concat(generateLine(count));
    }
    return results;

}

module.exports = song;
