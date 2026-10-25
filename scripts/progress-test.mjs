import assert from 'node:assert/strict';
import { initialCompletion, summarize, toggleTask, tasks } from '../app/training.ts';
let state = { ...initialCompletion };
const check = (completed, percent) => assert.deepEqual(summarize(state), { completed, total: 3, percent });
check(0, 0);
state = toggleTask(state, 'sword'); check(1, 33);
state = toggleTask(state, 'endurance'); check(2, 67);
state = toggleTask(state, 'team'); check(3, 100);
state = toggleTask(state, 'team'); check(2, 67);
for (let i=0; i<100; i++) { state = toggleTask(state, 'sword'); check(i % 2 === 0 ? 1 : 2, i % 2 === 0 ? 33 : 67); }
for (let mask=0; mask<8; mask++) {
  const combination = Object.fromEntries(tasks.map((task, index) => [task.id, Boolean(mask & (1 << index))]));
  const count = Object.values(combination).filter(Boolean).length;
  assert.deepEqual(summarize(combination), { completed: count, total: 3, percent: Math.round(count/3*100) });
}
assert.deepEqual(initialCompletion, { sword:false, endurance:false, team:false });
console.log('PASS: required sequence, 100 repeated toggles, all 8 combinations, immutable initial state.');
