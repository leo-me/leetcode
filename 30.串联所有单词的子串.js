/*
 * @lc app=leetcode.cn id=30 lang=javascript
 * @lcpr version=30005
 *
 * [30] 串联所有单词的子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!s || !words || words.length === 0) {
    return [];
}

const wordLen = words[0].length; // Length of each word
const totalLen = wordLen * words.length; // Total length of all words combined
const wordCount = {}; // Hash map to store the count of each word in `words`

// Initialize wordCount with the frequency of each word in `words`
for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
}

const result = []; // Array to store the starting indices of valid substrings

// Iterate through `s` to check each possible window
for (let i = 0; i <= s.length - totalLen; i++) {
    const seen = {}; // Hash map to store the count of words in the current window
    let j = 0;

    // Check if the current window contains all words in `words`
    while (j < words.length) {
        const word = s.substring(i + j * wordLen, i + (j + 1) * wordLen); // Extract the current word
        if (wordCount[word]) {
            seen[word] = (seen[word] || 0) + 1; // Increment the count of the word in `seen`
            if (seen[word] > wordCount[word]) {
                break; // If the word appears more than in `words`, break
            }
        } else {
            break; // If the word is not in `words`, break
        }
        j++;
    }

    // If all words are matched, add the starting index to the result
    if (j === words.length) {
        result.push(i);
    }
}

return result;
    
};
// @lc code=end



/*
// @lcpr case=start
// "barfoothefoobarman"\n["foo","bar"]\n
// @lcpr case=end

// @lcpr case=start
// "wordgoodgoodgoodbestword"\n["word","good","best","word"]\n
// @lcpr case=end

// @lcpr case=start
// "barfoofoobarthefoobarman"\n["bar","foo","the"]\n
// @lcpr case=end

 */

