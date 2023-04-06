/**
 * {@link https://leetcode.com/problems/implement-stack-using-queues/}
 * 
 * Implement a last in first out (LIFO) stack using only two queues. The
 * implemented stack should support all the functions of a normal queue (`push`,
 * `top`, `pop`, and `empty`).
 * 
 * Implement the `MyStack` class:
 * - `void push(int x)` Pushes element `x` to the top of the stack.
 * - `int pop()` Removes the element on the top of the stack and returns it.
 * - `int top()` Returns the element on the top of the stack.
 * - `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.
 * 
 * Notes:
 * - You must use **only** standard operations of a queue, which means only
 * `push to back`, `peek/pop from front`, `size`, and `is empty` operations
 * are valid.
 * - Depending on your language, the queue may not be supported natively. You
 * may simulate a queue using a list or deque (double-ended queue) as long as
 * you use only a queue's standard operations.
 * 
 * Constraints:
 * - `1 <= x <= 9`  
 * - At most `100` calls will be made to `push`, `pop`, `top`, and `empty`.
 * - All the calls to `pop` and `top` are valid.
 */
export interface Stack {
  push(x: number): void;
  pop(): number;
  top(): number;
  empty(): boolean;
}

export class Stack_Grey implements Stack {
  push(x: number): void {
    x;
  }
  pop(): number {
    return 0;
  }
  top(): number {
    return 0;
  }
  empty(): boolean {
    return false;
  }
}

export class Stack_Zach implements Stack {
  push(x: number): void {
    x;
  }
  pop(): number {
    return 0;
  }
  top(): number {
    return 0;
  }
  empty(): boolean {
    return false;
  }
}