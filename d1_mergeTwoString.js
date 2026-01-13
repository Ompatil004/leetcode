
// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
var mergeAlternately = function(word1, word2) {
    let result="";
    let n=Math.max(word1.length,word2.length);
    for(let i=0;i<=n;i++){
        if(i<word1.length)result+=word1[i];
        if(i<word2.length)result+=word2[i];
    }
    return result;

};