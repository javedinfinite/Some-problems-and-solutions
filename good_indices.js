//solution:

let s = 'bearbbear';
let sub_s = 'bear';
let s_length = s.length;
let sub_s_length = sub_s.length
let total_count = 0;

for(i=0; s_length-i >= sub_s_length; i++)
{
 for(j=sub_s_length+i-1; j<s_length; j++){
     console.log('substring: ',s.substring(i,j+1));
     if(s.substring(i,j+1).includes(sub_s))
         total_count+=1;
 }
}

console.log('total_count', total_count);


//problem
//String: Good Indices

// You are given a string S containing lowercase English characters.
// A pair of indices (X, Y), where X < Y, in the string S, are said to be good if the substring S[X … Y] contains at least one occurrence of the string "bear".
// You need to find the number of good indices in the string S.

// Example
// String S = "bearbtear"
// bearbtear

// The pairs of indices (1,4), (1,5),(1,6),(1,7),(1,8),(1,9) contain at least one occurrence of the string "bear".
// Hence, the answer is 6.

// Function Description
// In the provided code snippet, implement the provided goodIndices(...) method using the variables to print the number of good indices in the string S. You can write your code in the space below the phrase “WRITE YOUR LOGIC HERE”.

// There will be multiple test cases running so the Input and Output should match exactly as provided.
// The base Output variable result is set to a default value of -404 which can be modified. Additionally, you can add or remove these output variables.

// Input Format
// The first line of the input contains a string, denoting the value of S.

// Sample Input
// bearbtear


// Constraint
// 1 ≤ |S| ≤ 1000

// Output Format
// Print a single string denoting the resultant string.

// Sample Output
// 6


// Explanation
// Here, the pairs of indices (1,4), (1,5),(1,6),(1,7),(1,8),(1,9) contain at least one occurrence of the string "bear".
// Hence, the answer is 6.
