module.exports = {
    text2token: text2token
}

Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}

function text2token(textFile) {
    var lines = [],
        tokens = [];

   
    var fs = require('fs');
    //Read Corpus line by line
    var lineByLine = require('n-readlines');

    if (textFile == '' || textFile == undefined) {
        throw new Error('path is required');
    }

    var liner = new lineByLine(textFile);
    while (line = liner.next()) {
        lines.push(line.toString('ascii'));
    }

    for (var i = 0; i < lines.length; i++) {
        var words = lines[i].split(" ");
        for (var j = 0; j < words.length; j++) {
            tokens.push(words[j]);
        }
    }

    tokens = tokens.unique();

    return {lines: lines, tokens:tokens}
}
