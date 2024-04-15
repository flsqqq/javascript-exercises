const removeFromArray = function(arr, ...toRemove) {
    return arr.filter((el => !toRemove.includes(el)));
};

// Do not edit below this line
module.exports = removeFromArray;
