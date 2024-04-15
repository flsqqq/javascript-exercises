const getTheTitles = function(booksDict) {
    let titles = [];
    for (book in booksDict) {
        titles.push(booksDict[book].title);
    }
    console.log(titles);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

