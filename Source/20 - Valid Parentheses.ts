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
export function isValid(expression: string): boolean {
  const openBracketStack = [];
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

// Faster, but it uses `any` which is bad typescript practice
function isValid_faster(expression: string): boolean {
  const openBracketStack: any = [];
  const closeLookup: any = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  for (const bracket of expression) {
    const isOpenBracket = closeLookup[bracket] !== undefined;
    const isCloseBracket = !isOpenBracket;

    if (isOpenBracket) {
      openBracketStack.push(bracket);
    }
    
    if (isCloseBracket) {
      const matchingOpenBracket = openBracketStack.pop();
      const expectedCloseBracket = closeLookup[matchingOpenBracket];
      if (bracket !== expectedCloseBracket)
        return false;
    }
  }

  return openBracketStack.length === 0;
}