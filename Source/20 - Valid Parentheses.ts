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
  const openBracketStack: string[] = [];
  const closeLookup = new Map([
    ['{', '}'],
    ['(', ')'],
    ['[', ']'],
  ]);
    
  for (const bracket of expression) {
    const isOpenBracket = closeLookup.get(bracket) !== undefined;
    const isCloseBracket = !isOpenBracket;
        
    if (isOpenBracket) {
      openBracketStack.push(bracket);
    }
        
    if (isCloseBracket) {
      const matchingOpenBracket = openBracketStack.pop() ?? '';
      const expectedCloseBracket = closeLookup.get(matchingOpenBracket) ?? '';
      if (bracket !== expectedCloseBracket)
        return false;
    }
  }
    
  return openBracketStack.length === 0;
}

