import { match, Pattern } from 'ts-pattern';
import { Queue, Queue_Grey, Queue_Zach } from './232 - Implement Queue using Stacks';
import { testSolutions } from './common/Test';

testSolutions({
  cases: [
    [[
      ['push', 1],
      ['push', 2],
      ['peek', 1],
      ['pop', 1],
      ['empty', false],
    ]],
  ],
  descriptor: 'The queue based stack should work',
  solutions: [
    ['Zach\'s Queue', () => new Queue_Zach()],
    ['Grey\'s Queue', () => new Queue_Grey()],
  ],
  tester: (queueBuilder: () => Queue) =>
    (actions: Action[]) => {
      const queue = queueBuilder();
      performActions(queue, actions);
    }
});

type Action = Push | Pop | Top | Empty;
type Push = ['push', number];
type Pop = ['pop', number];
type Top = ['peek', number];
type Empty = ['empty', boolean];

function performActions(queue: Queue, actions: Action[]) {
  actions.forEach(action => match(action)
    .with(['push', Pattern.number], 
      ([,value]) => queue.push(value))
    .with(['pop', Pattern.number], 
      ([,value]) => expect(queue.pop()).toBe(value))
    .with(['peek', Pattern.number], 
      ([,value]) => expect(queue.peek()).toBe(value))
    .with(['empty', Pattern.boolean], 
      ([,value]) => expect(queue.empty()).toBe(value))
    .exhaustive()
  );
}