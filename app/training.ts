export const tasks = [
  { id: 'sword', title: 'Sword control', description: 'Practise precise anti-magic sword movements.', priority: 'High' },
  { id: 'endurance', title: 'Physical endurance', description: 'Complete a focused strength and stamina session.', priority: 'Medium' },
  { id: 'team', title: 'Team coordination', description: 'Review a preparation plan with the Black Bulls.', priority: 'High' },
] as const;
export type TaskId = typeof tasks[number]['id'];
export type Completion = Record<TaskId, boolean>;
export const initialCompletion: Completion = { sword: false, endurance: false, team: false };
export function toggleTask(state: Completion, id: TaskId): Completion {
  return { ...state, [id]: !state[id] };
}
export function summarize(state: Completion) {
  const completed = tasks.filter(task => state[task.id]).length;
  return { completed, total: tasks.length, percent: Math.round(completed / tasks.length * 100) };
}
