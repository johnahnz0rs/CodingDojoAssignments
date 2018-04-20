const _ = {
    // done
    map: function(array, callback) {
        let return_array = [];
        // is param array an array of items?
        if (Array.isArray(array)) {
            for (let i = 0; i < array.length; i++) {
                return_array.push(callback(array[i]));
            }
            return return_array;
        } // is param array a dictionary?
        else if (typeof array == "object" && !Array.isArray(array)) {
            for (key in array) {
                return_array.push(callback(array[key]));
            }
            return return_array;
        }
    },
    // done
    reduce: function(array, callback, memo) {
        return_sum = 0;
        for (let i = 0; i < array.length; i++) {
            return_sum += callback(array[i], memo);
        }
        return return_sum;
    },
    // done
    find: function(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return array[i];
            }
        }
        return;
    },
    // done
    filter: function(array, callback) {
        return_array = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return_array.push(array[i]);
            }
        }
        return return_array;
    },
    // done
    reject: function(array, callback) {
        let return_array = [];
        for (let i = 0; i < array.length; i++) {
            if (!callback(array[i])) {
                return_array.push(array[i]);
            }
        }
        return return_array;
    }
}


// let odds = _.reject([1,2,3,4,5,6], function(num) {return num%2 == 0;});
// console.log(odds);

// reduce = _.reduce([1,2,3,4], function(num, memo) { return memo + num;}, 0);
// console.log(reduce);


// map = _.map([1,2,3], function(num) { return num*3;});
// map2 = _.map({one:1, two:2, three:3}, function(num, key) {return num*3;});
// console.log(map2);

// evens = _.filter([1,2,3,4,5,6], function(num) { return num% 2 == 0;});
// console.log(evens);

// even = _.find([1,2,3,4,5,6], function(num) {return num%2 == 0;});
// console.log(even);