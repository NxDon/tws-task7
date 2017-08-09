"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var song = require("../lib/main.js");


describe("beerSong test", function(){
    sinon.spy(console, 'log');
        it("return a lyric when pass 0", function(){
        var result = song(0);
        var expect_string = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        expect(expect_string).to.equal(result);
    });
    it("return a lyric when pass 1", function(){
        var result = song(1);
        var expect_string = `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        expect(expect_string).to.equal(result);
    });
    it("return a lyric when pass 2", function(){
        var result = song(2);
        var expect_string = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        expect(expect_string).to.equal(result);
    });
    it("return a lyric when pass 2", function(){
        var result = song(2);
        var expect_string = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        expect(expect_string).to.equal(result);
    });




});