'use client';
import { useState } from 'react';
import { initialCompletion, summarize, tasks, toggleTask } from './training';
export default function TrainingPlan() {
  const [completion, setCompletion] = useState(initialCompletion);
  const { completed, total, percent } = summarize(completion);
  return <section aria-label="Training plan">
    <p aria-live="polite">{completed} / {total} complete · {percent}%</p>
    <progress aria-label="Training-plan completion" value={completed} max={total} />
    {tasks.map(task => <label key={task.id} style={{display:'block',padding:16}}>
      <input type="checkbox" checked={completion[task.id]} onChange={() => setCompletion(current => toggleTask(current, task.id))} /> {task.title}
    </label>)}
  </section>;
}
