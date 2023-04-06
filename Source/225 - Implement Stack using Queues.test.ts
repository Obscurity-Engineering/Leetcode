import { Pattern, match } from 'ts-pattern';
import { Stack, Stack_Grey, Stack_Zach } from './225 - Implement Stack using Queues';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[
      ['push', 1],
      ['push', 2],
      ['top', 2],
      ['pop', 2],
      ['empty', false],
    ]]
  ],
  descriptor: 'The stack based queue should work',
  solutions: [
    ['Zach\'s Stack', () => new Stack_Zach()],
    ['Grey\'s Stack', () => new Stack_Grey()],
  ],
  tester: (stackBuilder: () => Stack) => 
    (actions: Action[]) => {
      const stack = stackBuilder();
      performActions(stack, actions);
    }
});

type Action = Push | Pop | Top | Empty;
type Push = ['push', number];
type Pop = ['pop', number];
type Top = ['top', number];
type Empty = ['empty', boolean];

function performActions(stack: Stack, actions: Action[]) {
  actions.forEach(action => match(action)
    .with(['push', Pattern.number], 
      ([,value]) => stack.push(value))
    .with(['pop', Pattern.number], 
      ([,value]) => expect(stack.pop()).toBe(value))
    .with(['top', Pattern.number], 
      ([,value]) => expect(stack.top()).toBe(value))
    .with(['empty', Pattern.boolean], 
      ([,value]) => expect(stack.empty()).toBe(value))
    .exhaustive()
  );
}