import { assertThat, equalTo } from 'hamjest';
import { sortAsc, sortAscBy, sortDesc, sortDescBy } from './sort';

const TEST_DATA = [
  { input: ['PT20S', 'PT30S', 'PT10S'], output: ['PT10S', 'PT20S', 'PT30S'] },
  { input: ['PT20S', 'PT1M', 'PT10S'], output: ['PT10S', 'PT20S', 'PT1M'] },
  { input: ['PT20S', 'P1M', 'PT10S'], output: ['PT10S', 'PT20S', 'P1M'] },
  { input: ['PT20S', 'P1M', 'PT10S'], output: ['PT10S', 'PT20S', 'P1M'] },
  {
    input: ['PT1M', 'P1D', 'PT1S', 'PT1H', 'P1M', 'P1W', 'P1Y'],
    output: ['PT1S', 'PT1M', 'PT1H', 'P1D', 'P1W', 'P1M', 'P1Y'],
  },
];

const toArrayOfObjects = (array) => array.map((i) => ({ randomKey: i }));
const reverse = (array) => [...array].reverse();

describe('sortAsc', () => {
  TEST_DATA.forEach(({ input, output }) => {
    it(`sorts ${input} correctly`, () => {
      assertThat(input.sort(sortAsc), equalTo(output));
    });
  });
});

describe('sortAscBy', () => {
  TEST_DATA.forEach(({ input, output }) => {
    it(`sorts ${input} correctly`, () => {
      assertThat(toArrayOfObjects(input).sort(sortAscBy('randomKey')),
        equalTo(toArrayOfObjects(output)));
    });
  });
});

describe('sortDesc', () => {
  TEST_DATA.forEach(({ input, output }) => {
    it(`sorts ${input} correctly`, () => {
      assertThat(input.sort(sortDesc), equalTo(reverse([...output])));
    });
  });
});

describe('sortDescBy', () => {
  TEST_DATA.forEach(({ input, output }) => {
    it(`sorts ${input} correctly`, () => {
      assertThat(toArrayOfObjects(input).sort(sortDescBy('randomKey')),
        equalTo(reverse(toArrayOfObjects(output))));
    });
  });
});

