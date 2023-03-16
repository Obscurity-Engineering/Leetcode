/**
 * {@link https://leetcode.com/problems/valid-parentheses/ | Valid Parentheses}
 * 
 * Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * 
 * Open brackets must be closed in the correct order.
 * 
 * Every close bracket has a corresponding open bracket of the same type.
 */

// [({}{})]


// Problem I had: I developed a misconception for what valid parens would look like, for example I thought ({(})) would be valid (it's syntactical invalid in every way) and let that stop me from implementing the solution
// Also, I didn't think the only add opening symbols, I kept thinking in terms of pushing everything in the stack and removing somehow
export function isValid(expression: string): boolean {
  // Use array as a stack
  const stack: string[] = [];
  
  for(let index = 0; index < expression.length; index++) {
    const symbol = expression[index];

    if(symbol === '(' || symbol === '[' || symbol === '{') { 
      stack.push(symbol);
    } else if (stack.length > 0) {
      const top = stack.slice(-1)[0];

      if(top === '(' && symbol === ')' || top === '[' && symbol === ']'  || top === '{' && symbol === '}') {
        stack.pop();
      } else { // We couldn't match the closing symbol and opening symbol, syntax is incorrect, return false
        return false;
      }
        
    }  else { // We had a closing symbol but nothing was in the stack, return false
      return false; // Invalid Parens
    }

  }



  if(stack.length > 0) // Final check to see if stack is truly empty (meaning we had all valid parens), return false if not
    return false;

  return true; // Return true, we had valid parens, if we make it past all previous validity checks

}


// ()[]{}
// (())

// ({[}]) // Invalid use of parens here, doesn't matter

