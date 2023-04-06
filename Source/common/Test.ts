import deepClone from 'deep-clone';

type Data = ReturnType<typeof deepClone>;

export function testSolutions<Solution, TestCase extends Data[]>(
  properties: {
    cases?: TestCase[];
    descriptor: string;
    tester: (solution: Solution) => (...args: TestCase) => void;
    solutions: [string, Solution][];
  }
) {
  const {
    cases,
    descriptor,
    tester,
    solutions
  } = properties;

  solutions.map(([name, solution]) => 
    describe(name, () => {
      test.each(deepClone(cases ?? []))(descriptor, tester(solution));
    })
  );
}