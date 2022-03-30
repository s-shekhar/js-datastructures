//Similar approach for all popular Leetcode backtracking questions mentioned below.

//  █▀ █░█ █▄▄ █▀ █▀▀ ▀█▀ █▀   █
//  ▄█ █▄█ █▄█ ▄█ ██▄ ░█░ ▄█   █

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    const result = [];

    function dfs(i, curArr) {
        if (i > nums.length) return;

        result.push([...curArr]);

        for (let j = i; j < nums.length; j++) {
            curArr.push(nums[j]);
            dfs(j + 1, curArr);
            curArr.pop();
        }
    }

    dfs(0, []);

    return result;
};

// console.log(subsets([1, 2, 3]));

//Another approach in the end of document. Named Alter Subsets I


// █▀ █░█ █▄▄ █▀ █▀▀ ▀█▀ █▀   █ █
// ▄█ █▄█ █▄█ ▄█ ██▄ ░█░ ▄█   █ █

//Same as above, use of hash to filter duplicates
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = [];

    nums.sort((a, b) => b - a);

    function dfs(i, curArr) {
        //Base case
        if (i > nums.length) return;
        if (i === nums.length) {
            result.push([...curArr]);
            return;
        }

        //Exclude
        dfs(i + 1, curArr);
        //Include
        curArr.push(nums[i]);
        dfs(i + 1, curArr);
        curArr.pop();
    }

    dfs(0, []);

    let hash = {};

    for (let val of result) {
        if (!hash[val]) hash[val] = val;
    }

    return Object.values(hash);
};

// console.log(subsetsWithDup([4, 4, 4, 1, 4]))



// █▀█ █▀▀ █▀█ █▀▄▀█ █░█ ▀█▀ ▄▀█ ▀█▀ █ █▀█ █▄░█ █▀   █
// █▀▀ ██▄ █▀▄ █░▀░█ █▄█ ░█░ █▀█ ░█░ █ █▄█ █░▀█ ▄█   █


var permute = function (nums) {
    let result = [];

    let dfs = (i, curArr) => {
        //Base case
        if (i > nums.length) return;

        if (i === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1, nums);
            [nums[j], nums[i]] = [nums[i], nums[j]];
        }
    }

    dfs(0, []);
    return result;
};


// console.log(permute([1, 2, 3]));



// █▀█ █▀▀ █▀█ █▀▄▀█ █░█ ▀█▀ ▄▀█ ▀█▀ █ █▀█ █▄░█ █▀   █ █
// █▀▀ ██▄ █▀▄ █░▀░█ █▄█ ░█░ █▀█ ░█░ █ █▄█ █░▀█ ▄█   █ █

//Same as above, use of set to prevent going in duplicate cases

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let result = [];

    let dfs = (i) => {

        //base case
        if (i > nums.length) return;

        if (i === nums.length) result.push([...nums]);

        let set = new Set;

        for (let j = i; j < nums.length; j++) {
            if (set.has(nums[j])) continue;
            set.add(nums[j]);
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1);
            [nums[j], nums[i]] = [nums[i], nums[j]];
        }
    }

    dfs(0);

    return result;
};


// console.log(permuteUnique([1, 1, 2]));


// █▀▀ █▀█ █▀▄▀█ █▄▄ █ █▄░█ ▄▀█ ▀█▀ █ █▀█ █▄░█   █▀ █░█ █▀▄▀█   █
// █▄▄ █▄█ █░▀░█ █▄█ █ █░▀█ █▀█ ░█░ █ █▄█ █░▀█   ▄█ █▄█ █░▀░█   █

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];

    function dfs(i, total, curArr) {

        //Base case
        if (i > candidates.length || total > target) return;

        if (total === target) {
            result.push([...curArr]);
            return;
        }

        //recursion
        for (let j = i; j < candidates.length; j++) {
            curArr.push(candidates[j]);
            dfs(j, total + candidates[j], curArr);
            curArr.pop();
        }
    }

    dfs(0, 0, []);

    return result;
};

// console.log(combinationSum([2, 3, 6, 7], 7));



// █▀▀ █▀█ █▀▄▀█ █▄▄ █ █▄░█ ▄▀█ ▀█▀ █ █▀█ █▄░█   █▀ █░█ █▀▄▀█   █ █
// █▄▄ █▄█ █░▀░█ █▄█ █ █░▀█ █▀█ ░█░ █ █▄█ █░▀█   ▄█ █▄█ █░▀░█   █ █

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let result = [];

    candidates.sort((a, b) => a - b);

    function dfs(i, total, curArr) {

        //base case
        if (i > candidates.length || total > target) return;

        if (total === target) {
            result.push([...curArr]);
            return;
        }

        //recursive helper
        for (let j = i; j < candidates.length; j++) {

            if (i !== j && candidates[j] === candidates[j - 1]) continue;

            curArr.push(candidates[j]);
            dfs(j + 1, total + candidates[j], curArr);
            curArr.pop();
        }
    }

    dfs(0, 0, []);

    return result;
};


// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))


// █▀▀ █▀█ █▀▄▀█ █▄▄ █ █▄░█ ▄▀█ ▀█▀ █ █▀█ █▄░█   █▀ █░█ █▀▄▀█   █ █ █
// █▄▄ █▄█ █░▀░█ █▄█ █ █░▀█ █▀█ ░█░ █ █▄█ █░▀█   ▄█ █▄█ █░▀░█   █ █ █

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let result = [];

    function dfs(i, total, curArr) {
        //base case
        if (i > 10 || total > n) return;

        if (total === n && curArr.length === k) {
            result.push([...curArr]);
            return;
        }

        //backtrack
        for (let j = i; j < 10; j++) {
            curArr.push(j);
            dfs(j + 1, total + j, curArr);
            curArr.pop();
        }
    }

    dfs(1, 0, []);

    return result;
};

// console.log(combinationSum3(9, 45));


// █▀▀ █▀█ █▀▄▀█ █▄▄ █ █▄░█ ▄▀█ ▀█▀ █ █▀█ █▄░█ █▀
// █▄▄ █▄█ █░▀░█ █▄█ █ █░▀█ █▀█ ░█░ █ █▄█ █░▀█ ▄█
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    const result = [];

    function dfs(i, curr = []) {
        if (curr.length === k) {
            result.push([...curr]);
            return;
        }

        for (let j = i; j <= n; j++) {
            curr.push(j);
            dfs(j + 1, curr);
            curr.pop();
        }
    }

    dfs(1);

    return result;
};

// console.log(combine(4, 2));


// █░░ █▀▀ ▀█▀ ▀█▀ █▀▀ █▀█   █▀▀ ▄▀█ █▀ █▀▀   █▀█ █▀▀ █▀█ █▀▄▀█ █░█ ▀█▀ ▄▀█ ▀█▀ █ █▀█ █▄░█
// █▄▄ ██▄ ░█░ ░█░ ██▄ █▀▄   █▄▄ █▀█ ▄█ ██▄   █▀▀ ██▄ █▀▄ █░▀░█ █▄█ ░█░ █▀█ ░█░ █ █▄█ █░▀█

var letterCasePermutation = function (s) {
    let result = [];

    function dfs(i, curArr) {
        //Backtrack Case


        //Base care/ Return case
        if (i > s.length) return;


        if (i === s.length) {
            result.push(curArr.join(''));
            return;
        }

        //DFS helper recursion
        if (!Number.isInteger(parseInt(s[i]))) {

            curArr.push(s[i].toLowerCase());
            dfs(i + 1, curArr);
            curArr.pop();

            curArr.push(s[i].toUpperCase());
            dfs(i + 1, curArr);
            curArr.pop();

        }
        else {
            curArr.push(s[i]);
            dfs(i + 1, curArr);
            curArr.pop()
        }
    }

    dfs(0, []);

    return result;
};


// console.log(letterCasePermutation("a1b2"))


// █▀█ ▄▀█ █░░ █ █▄░█ █▀▄ █▀█ █▀█ █▀▄▀█ █▀▀   █▀█ ▄▀█ █▀█ ▀█▀ █ ▀█▀ █ █▀█ █▄░█ █ █▄░█ █▀▀
// █▀▀ █▀█ █▄▄ █ █░▀█ █▄▀ █▀▄ █▄█ █░▀░█ ██▄   █▀▀ █▀█ █▀▄ ░█░ █ ░█░ █ █▄█ █░▀█ █ █░▀█ █▄█

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = [];

    function isPalindrome(str) {
        return (str.split('').reverse().join('') === str);
    }

    function dfs(i, curArr) {

        //base case
        if (i > s.length) return;

        if (i === s.length) {
            result.push([...curArr]);
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s.slice(i, j + 1))) {
                curArr.push(s.slice(i, j + 1));
                dfs(j + 1, curArr);
                curArr.pop();
            }
        }
    }

    dfs(0, []);

    return result;
};

// console.log(partition("aab"));




//===========================ALTERNATE APPROACH==================================//

//ALTER SUBSETS I

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
//  var subsets = function (nums) {
//     let result = [];

//     function dfs(i, curArr) {
//         //Base case
//         if (i > nums.length) return;
//         if (i === nums.length) {
//             result.push([...curArr]);
//             return;
//         }

//         //DFS helper
//         dfs(i + 1, curArr);
//         curArr.push(nums[i]);
//         dfs(i + 1, curArr);
//         curArr.pop();
//     }
//     dfs(0, [])

//     return result;
// };
