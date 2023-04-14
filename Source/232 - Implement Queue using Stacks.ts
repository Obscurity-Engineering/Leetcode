/**
 * {@link https://leetcode.com/problems/implement-queue-using-stacks/}
 * 
 * Implement a first in first out (FIFO) queue using only two stacks. The
 * implemented queue should support all the functions of a normal queue (`push`,
 * `peek`, `pop`, and `empty`).
 * 
 * Implement the `MyQueue` class:
 * - `void push(int x)` Pushes element `x` to the back of the queue.
 * - `int pop()` Removes the element from the front of the queue and returns it.
 * - `int peek()` Returns the element at the front of the queue.
 * - `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.
 * 
 * Notes:
 * - You must use **only** standard operations of a stack, which means only
 * `push to top`, `peek/pop from top`, `size`, and `is empty` operations are
 * valid.
 * - Depending on your language, the stack may not be supported natively. You may
 * simulate a stack using a list or deque (double-ended queue) as long as you
 * use only a stack's standard operations.
 * 
 * Constraints:
 * - `1 <= x <= 9`
 * - At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
 * - All the calls to `pop`, `peek`, and `empty` are valid.
 */
export interface Queue {
  push(x: number): void;
  pop(): number | undefined;
  peek(): number | undefined;
  empty(): boolean;
}

export class Queue_Grey implements Queue {
  constructor(
    private stack: number[] = [],
    private mode: 'raw' | 'reversed' = 'raw'
  ) {}

  push(x: number): void {
    if (this.mode !== 'raw')
      this.toggleMode();

    this.stack.push(x);
  }
  pop(): number | undefined {
    if (this.mode !== 'reversed')
      this.toggleMode();

    return this.stack.pop();
  }
  peek(): number | undefined {
    if (this.mode !== 'reversed')
      this.toggleMode();

    return this.stack.at(-1);

  }
  empty(): boolean {
    return this.stack.length === 0;
  }

  private toggleMode() {
    const newStack: number[] = [];
    for (
      let value = this.stack.pop(); 
      value !== undefined; 
      value = this.stack.pop()
    ) {
      newStack.push(value);
    }

    this.mode = this.mode === 'raw' ? 'reversed' : 'raw';
    this.stack = newStack;
  }
}

export class Queue_Zach implements Queue {
  push(x: number): void {
    x;
  }
  pop(): number {
    return 0;
  }
  peek(): number {
    return 0;
  }
  empty(): boolean {
    return false;
  }
}